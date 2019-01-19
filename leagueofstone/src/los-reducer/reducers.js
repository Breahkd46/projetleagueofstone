import { combineReducers } from 'redux';
import sessionReducer from './session-reducer';
import matchmakingReducer from './matchmaking-reducer';
import matchReducer from './match-reducer';

const losApp = combineReducers({
  sessionReducer,
  matchmakingReducer,
  matchReducer
})

export default losApp
