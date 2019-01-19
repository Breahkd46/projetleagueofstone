import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import matchmakingReducer from './matchmaking-reducer';

const losApp = combineReducers({
  sessionReducer,
  matchmakingReducer
})

export default losApp
