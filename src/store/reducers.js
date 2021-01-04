import { combineReducers } from 'redux';
import journeyReducer from '../components/journey/journey.reducer';

const reducers = () => {
  return combineReducers({
    journeyReducer,
  });
};

export default reducers;
