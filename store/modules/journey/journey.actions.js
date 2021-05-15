
export const LOAD_JOURNEY_IN_PROGRESS = 'LOAD_JOURNEY_IN_PROGRESS';
export const loadJourneyInProgress = () => ({
  type: LOAD_JOURNEY_IN_PROGRESS
});

export const LOAD_JOURNEY_SUCCESS = 'LOAD_JOURNEY_SUCCESS';
export const loadJourneySuccess = (journey) => ({
  type: LOAD_JOURNEY_SUCCESS,
  payload: { journey }
});

export const LOAD_JOURNEY_FAILURE = 'LOAD_JOURNEY_FAILURE';
export const loadJourneyFailure = () => ({
  type: LOAD_JOURNEY_FAILURE
});

export const HIGHLIGHT_LOCATION = 'HIGHLIGHT_LOCATION';
export const highlightLocation = (journey, location) => ({
  type: HIGHLIGHT_LOCATION,
  payload: { journey, location }
});

