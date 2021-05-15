import { loadJourneyInProgress, loadJourneyFailure, loadJourneySuccess } from './journey.actions';

export const loadJourneyByName = (name) => async (dispatch, getState) => {
  try {
    dispatch(loadJourneyInProgress());
    const journey = require('../../../test/mock/journey.mock.json');
    dispatch(loadJourneySuccess(journey));
  } catch (e) {
    dispatch(loadJourneyFailure());
    alert(e)
  }
}