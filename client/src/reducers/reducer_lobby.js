import {
  ROOM_CREATE_REQUEST, ROOM_CREATE_SUCCESS, ROOM_CREATE_FAILURE,
  ROOM_JOIN_REQUEST, ROOM_JOIN_SUCCESS, ROOM_JOIN_FAILURE,
  ROOM_LEAVE_REQUEST, ROOM_LEAVE_SUCCESS, ROOM_LEAVE_FAILURE,
  ROOM_CREATED, ROOM_DESTROYED,
  CLIENT_JOIN_ROOM, CLIENT_LEAVE_ROOM, CLIENT_DISCONNECTED, CLIENT_UPDATE,
  ROOMS_GET_REQUEST, ROOMS_GET_SUCCESS, CLIENTS_GET_SUCCESS,
  ID_GET_SUCCESS,
  RULES_CIVS_UPDATE_REQUEST, RULES_CIVS_UPDATED, RULES_DUP_UPDATE_REQUEST, RULES_DUP_UPDATED
} from '../actions/lobby';

const INITIAL_STATE = {
  rooms: [],
  loading: false,
  active: null,
  id: null,
  error: null
};

/*
{
  name: null,
  clients: [{
    id: null,
    preferences: null,
    civ: {
    leader: 'Random',
    civ: 'Random'
  }
  }],
  passworded: false,
  host: null,
  rules: {
    duplicate: false,
    civs: {leader: true,}
  }
}
*/

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ROOM_CREATE_REQUEST:
      return { ...state,
        loading: true
    };
    case ROOM_CREATE_SUCCESS:
      return { ...state,
        active: action.payload.name
    };
    case ROOM_CREATE_FAILURE:
      return { ...state,
        loading: false,
        error: action.payload
    };

    case ROOM_JOIN_REQUEST:
      return { ...state,
        loading: true
    };
    case ROOM_JOIN_SUCCESS:
      return { ...state,
        loading: false,
        active: action.payload
    };
    case ROOM_JOIN_FAILURE:
      return { ...state,
        loading: false,
        error: action.payload
    };

    case ROOM_LEAVE_REQUEST:
      return { ...state,
        loading: true
    };
    case ROOM_LEAVE_SUCCESS:
      return { ...state,
        loading: false,
        active: null
    };
    case ROOM_LEAVE_FAILURE:
      return { ...state,
        loading: false,
        error: action.payload
    };

    case ROOM_CREATED:
      return { ...state,
        rooms: [ ...state.rooms,
          action.payload
        ],
        loading: false
    };

    case ROOM_DESTROYED:
      if(state.active === action.payload) {
        window.history.back();
      }
      return { ...state,
        rooms: state.rooms.filter(room => room.name !== action.payload)
    };

    case CLIENT_JOIN_ROOM:
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          clients: [ ...room.clients, action.payload.client ]} :
          //Otherwise return original room
          room
        )
    };
    case CLIENT_LEAVE_ROOM:
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          clients: room.clients.filter(client => client.id !== action.payload.client.id)} :
          //Otherwise return original room
          room
        )
    };
    case CLIENT_DISCONNECTED:
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          clients: room.clients.filter(client => client.id !== action.payload.id)} :
          //Otherwise return original room
          room
        )
    }
    case CLIENT_UPDATE:
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          clients: room.clients.map(client => client.id === action.payload.client.id ?
            action.payload.client :
            client
          )} :
          //Otherwise return original room
          room
        )
    };

    case ROOMS_GET_REQUEST:
      return { ...state,
        loading: true
    };
    case ROOMS_GET_SUCCESS:
      return { ...state,
        rooms: action.payload,
        loading: false
    };

    case CLIENTS_GET_SUCCESS:
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          clients: action.payload.clients } :
          //Otherwise return original room
          room
        )
    };

    case ID_GET_SUCCESS:
      return { ...state,
        id: action.payload
    };


    case RULES_DUP_UPDATE_REQUEST:
      return { ...state,
        rooms: state.rooms.map(room => room.name === state.active ?
          //Match
          { ...room,
          rules: { ...room.rules,
            duplicate: action.payload.value
          }
          } :
          //Otherwise return original room
          room
        )
    };
    case RULES_DUP_UPDATED:
    return { ...state,
      rooms: state.rooms.map(room => room.name === action.payload.room ?
        //Match
        { ...room,
        rules: { ...room.rules,
          duplicate: action.payload.rule.value
        }
        } :
        //Otherwise return original room
        room
      )
  };
    case RULES_CIVS_UPDATE_REQUEST: {
      const newCivs = {};
      newCivs[action.payload.civ] = action.payload.value;
      return { ...state,
        rooms: state.rooms.map(room => room.name === state.active ?
          //Match
          { ...room,
          rules: { ...room.rules,
            civs: Object.assign({}, room.rules.civs, newCivs)
          }
          } :
          //Otherwise return original room
          room
        )
    }}
    case RULES_CIVS_UPDATED: {
      const newCivs = {};
      newCivs[action.payload.rule.civ] = action.payload.rule.value;
      return { ...state,
        rooms: state.rooms.map(room => room.name === action.payload.room ?
          //Match
          { ...room,
          rules: { ...room.rules,
            civs: Object.assign({}, room.rules.civs, newCivs)
          }
          } :
          //Otherwise return original room
          room
        )
    }}


    default:
      return state;
  }
}
