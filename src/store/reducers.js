import { combineReducers } from 'redux';
import journeyReducer from '../components/journey/journey.reducers';

const reducers = () => {
  return combineReducers({
    journeyReducer,
  });
};

export default reducers;
