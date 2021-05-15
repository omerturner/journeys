import { combineReducers } from 'redux';
import journeyReducer from './modules/journey/journey.reducers';

const reducers = () => {
  return combineReducers({
    journeyReducer,
  });
};

export default reducers;
