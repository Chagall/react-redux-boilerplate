import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';

// The Redux store must store at this time only one simple information
// Which menu button should be highlighted at any moment
// storeState == activeMenuItem

// ---- Action types ----
const CHANGE_ACTIVE_ITEM_HOME = "CH_HOME";
const CHANGE_ACTIVE_ITEM_LIVELIST = "CH_LIVELIST";
const CHANGE_ACTIVE_ITEM_TOPOLOGY = "CH_TOPOLOGY";
const CHANGE_ACTIVE_ITEM_MAINTENANCE = "CH_MAINTENANCE";
const CHANGE_ACTIVE_ITEM_LOG = "CH_LOG";
const CHANGE_ACTIVE_ITEM_CONFIG = "CH_CONFIG";

// ---- Reducer ----
function activeMenuItemReducer(initialState = "/", action) {
  switch (action.type) {
    case CHANGE_ACTIVE_ITEM_HOME:
      return action.payload.activeItem;
    case CHANGE_ACTIVE_ITEM_LIVELIST:
      return action.payload.activeItem;
    case CHANGE_ACTIVE_ITEM_TOPOLOGY:
      return action.payload.activeItem;
    case CHANGE_ACTIVE_ITEM_MAINTENANCE:
      return action.payload.activeItem;
    case CHANGE_ACTIVE_ITEM_LOG:
      return action.payload.activeItem;
    case CHANGE_ACTIVE_ITEM_CONFIG:
      return action.payload.activeItem;
    default:
      return initialState;
  }
}

// ---- Actions ----
const homeAction = {
  type: CHANGE_ACTIVE_ITEM_HOME,
  payload: { activeItem: "/" }
}
const livelistAction = {
  type: CHANGE_ACTIVE_ITEM_LIVELIST,
  payload: { activeItem: "/livelist" }
}
const topologyAction = {
  type: CHANGE_ACTIVE_ITEM_TOPOLOGY,
  payload: { activeItem: "/topology" }
}
const maintenanceAction = {
  type: CHANGE_ACTIVE_ITEM_MAINTENANCE,
  payload: { activeItem: "/maintenance" }
}
const logAction = {
  type: CHANGE_ACTIVE_ITEM_LOG,
  payload: { activeItem: "/log" }
}
const configAction = {
  type: CHANGE_ACTIVE_ITEM_CONFIG,
  payload: { activeItem: "/config" }
}

// ---- Creating the store and testing dispatching the actions ----
const store = createStore(activeMenuItemReducer);
console.log(store.getState());

store.dispatch(homeAction);
console.log(store.getState());

store.dispatch(livelistAction);
console.log(store.getState());

store.dispatch(topologyAction);
console.log(store.getState());

store.dispatch(maintenanceAction);
console.log(store.getState());

store.dispatch(logAction);
console.log(store.getState());

store.dispatch(configAction);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
