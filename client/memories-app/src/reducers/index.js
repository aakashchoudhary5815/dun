// import { combineReducers } from "redux";
// import posts from './posts';
// export default combineReducers({posts});
//export const reducers = combineReducers({ posts });

import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

export default combineReducers({posts , auth});

