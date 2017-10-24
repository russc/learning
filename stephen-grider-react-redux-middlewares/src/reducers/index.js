import { combineReducers } from 'redux';
import usersReducer from './users';
import eventsReducer from './events';

const rootReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer
});

export default rootReducer;
