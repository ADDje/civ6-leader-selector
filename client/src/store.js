import { createStore, applyMiddleware, compose } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import io from 'socket.io-client';
import reducer from './reducers/';

export const history = createHistory();
const routerMiddle = routerMiddleware(history);

//const socket = io('http://localhost:3001');
const socket = io('http://addam.me:3000');

const socketMiddleware = createSocketIoMiddleware(socket, "socket/")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(socketMiddleware, routerMiddle);

export default createStore(reducer, composeEnhancers(middleware));
