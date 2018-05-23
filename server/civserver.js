var http = require('http');
var io = require('socket.io')();

var tools = require('./tools');

var server = http.createServer();

server.listen(3000);
console.log('Listening on port 3000!');

io.attach(server);

io.on('connection', (socket) => {

  var rooms = io.sockets.adapter.rooms;

  socket.preferences = {
    name: 'Player',
    victype: 'any',
    dlc: {
      aztec: true,
      poland: false,
      australia: false,
      persia: false,
      nubia: false
    }
  };

  socket.civ = {leader: 'Random', civ: 'Random'};

  console.log("Client connected: " + socket.id + ", " + socket.preferences.name);
  socket.leave(socket.id);
  socket.emit('action', {
    type: 'ID_GET_SUCCESS',
    payload: socket.id
  });

  socket.on('action', (action) => {
    switch(action.type) {
      case 'socket/ROOM_CREATE_REQUEST':
        if(rooms.hasOwnProperty(action.payload.name)) {
          socket.emit('action', {
            type: 'ROOM_CREATE_FAILURE',
            payload: 'Room name already in use!'
          });
        } else {
          socket.join(action.payload.name);
          socket.host = action.payload.name;
          socket.room = action.payload.name;
          rooms[action.payload.name].name = action.payload.name;
          rooms[action.payload.name].password = action.payload.password;
          rooms[action.payload.name].host = socket.id;
          rooms[action.payload.name].rules = {
            duplicate: false,
            civs: tools.civsToBools(tools.civList)
          };
          console.log(socket.id + " created and joined room: " + action.payload.name);
          socket.emit('action', {
            type: 'ROOM_CREATE_SUCCESS',
            payload: {
              name: socket.room,
              passworded: (action.payload.password ? true : false),
              host: socket.id,
              rules: rooms[socket.room].rules
            }
          });
          io.emit('action', {
            type: 'ROOM_CREATED',
            payload: {
              name: socket.room,
              clients: [{
                id: socket.id,
                preferences: socket.preferences,
                civ: socket.civ
              }],
              passworded: (action.payload.password ? true : false),
              host: socket.id,
              rules: rooms[socket.room].rules
            }
          });
        }
      break;
      case 'socket/ROOM_JOIN_REQUEST':
        console.log(socket.id + "is attempting to join room " + action.payload.name + ', ' + action.payload.password);
        if(rooms.hasOwnProperty(action.payload.name)) {
          if(rooms[action.payload.name].password === action.payload.password) {
            if(socket.host) {
              socket.emit('action', {
                type: 'ROOM_JOIN_FAILURE',
                payload: 'Already in room!'
              });
              break;
            }
            socket.join(action.payload.name);
            socket.room = action.payload.name;
            console.log(socket.id + " joined room: " + action.payload.name);
            socket.emit('action', {
              type: 'ROOM_JOIN_SUCCESS',
              payload: action.payload.name
            });
            io.emit('action', {
              type: 'CLIENT_JOIN_ROOM',
              payload: {
                room: action.payload.name,
                client: {
                  id: socket.id,
                  preferences: socket.preferences,
                  civ: socket.civ
                }
              }
            });
          } else {
            socket.emit('action', {
              type: 'ROOM_JOIN_FAILURE',
              payload: 'Incorrect password!'
            });
          }
        } else {
          socket.emit('action', {
            type: 'ROOM_JOIN_FAILURE',
            payload: 'Room does not exist!'
          });
        }
      break;
      case 'socket/ROOM_LEAVE_REQUEST':
        socket.leave(action.payload.name);
        delete socket.room;
        console.log(socket.id + " left room: " + action.payload.name);
        socket.emit('action', {
          type: 'ROOM_LEAVE_SUCCESS'
        });
        io.emit('action', {
          type: 'CLIENT_LEAVE_ROOM',
          payload: {
            room: action.payload.name,
            client: {
              id: socket.id,
              preferences: socket.preferences,
              civ: socket.civ
            }
          }
        });
        if(socket.hasOwnProperty('host')) {
          socket.broadcast.emit('action', {
            type: 'ROOM_DESTROYED',
            payload: socket.host
          });
          console.log(socket.host + " has been deleted.");
          delete socket.host;
        }
      break;
      case 'socket/PREFERENCES_SET_REQUEST':
        socket.preferences = action.payload.online;
        console.log(action.payload.online);
        socket.emit('action', {
          type: 'PREFERENCES_SET_SUCCESS'
        });
      break;
      case 'socket/ROOMS_GET_REQUEST':
        var roomList = [];
        //gets list of rooms, cuts out passwords, gets clients
        for (var key in rooms) {
          //skip if property is from prototype
          if (!rooms.hasOwnProperty(key)) continue;

          //Get all clients in room
          //console.log(rooms[key]);
          var clientList = [];
          var clientIDs = rooms[key].sockets;
          for (var clientID in clientIDs) {
            var clientSocket = io.sockets.connected[clientID];
            clientList.push({
              id: clientSocket.id,
              preferences: clientSocket.preferences,
              civ: clientSocket.civ
            });
          }

          //Add room with clients to room list
          roomList.push({
            name: rooms[key].name,
            clients: clientList,
            passworded: (rooms[key].password ? true : false),
            host: rooms[key].host,
            rules: rooms[key].rules
          });
        }

        socket.emit('action', {
          type: 'ROOMS_GET_SUCCESS',
          payload: roomList
        });
        //console.log(roomList);
      break;
      case 'socket/PREFERENCES_UPDATE_ONLINE':
        console.log(action.payload);
        socket.preferences = Object.assign({},socket.preferences,action.payload);
        socket.emit('action', {
          type: 'PREFERENCES_UPDATE_SUCCESS'
        });
        io.emit('action', {
          type: 'CLIENT_UPDATE',
          payload: {
            room: socket.room,
            client: {
              id: socket.id,
              preferences: socket.preferences,
              civ: socket.civ
            }
          }
        });
      break;
      case 'socket/CHAT_SEND':
        socket.broadcast.to(socket.room).emit('action', {
          type: 'CHAT_RECEIVE',
          payload: action.payload
        });
        console.log(action.payload.name + " sent: " + action.payload.text);
      break;
      case 'socket/ROLL_CIVS':
        if(socket.hasOwnProperty('host')) {
          var clientList = [];
          var clientIDs = rooms[socket.host].sockets;
          for (var clientID in clientIDs) {
            var clientSocket = io.sockets.connected[clientID];
            clientList.push({
              id: clientSocket.id,
              preferences: clientSocket.preferences
            });
          }
          console.log('Room: '+socket.host+' is rolling!');
          let rolledClients = tools.selectCivsMP(clientList, rooms[socket.host].rules.civs, rooms[socket.host].rules.duplicate);
          for (var rolledClient in rolledClients) {
            var clientSocket = io.sockets.connected[rolledClients[rolledClient].id];
            clientSocket.civ = rolledClients[rolledClient].civ;
          }
          io.to(socket.host).emit('action', {
            type: 'CLIENTS_GET_SUCCESS',
            payload: {
              room: socket.host,
              clients: rolledClients
            }
          });
        }
      break;
      case 'socket/RULES_CIVS_UPDATE_REQUEST':
        if(socket.hasOwnProperty('host')) {
          rooms[socket.host].rules.civs[action.payload.civ] = action.payload.value;
          socket.broadcast.emit('action', {
            type: 'RULES_CIVS_UPDATED',
            payload: {
              room: socket.host,
              rule: action.payload
            }
          });
        }
      break;
      case 'socket/RULES_DUP_UPDATE_REQUEST':
        if(socket.hasOwnProperty('host')) {
          rooms[socket.host].rules.duplicate = action.payload.value;
          socket.broadcast.emit('action', {
            type: 'RULES_DUP_UPDATED',
            payload: {
              room: socket.host,
              rule: action.payload
            }
          });
        }
      break;
      default:
        socket.emit('action', {
          type: 'ERROR',
          payload: 'Invalid action!'
        });
      break;
    }
  });

  socket.on('disconnect', () => {
    console.log("Client disconnected: " + socket.id);
    if(socket.hasOwnProperty('host')) {
      socket.broadcast.emit('action', {
        type: 'ROOM_DESTROYED',
        payload: socket.host
      });

      if(rooms.hasOwnProperty(socket.host)) {
        var clientIDs = rooms[socket.host].sockets;
        for (var clientID in clientIDs) {
          io.sockets.connected[clientID].leave(socket.host);
        }
      }

      console.log(socket.host + " has been deleted.");
    } else {
      io.emit('action', {
        type: 'CLIENT_DISCONNECTED',
        payload: {
          id: socket.id,
          room: socket.room
        }
      });
    }
  });

});
