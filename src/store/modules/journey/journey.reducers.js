import {
  LOAD_JOURNEY_IN_PROGRESS,
  LOAD_JOURNEY_FAILURE,
  LOAD_JOURNEY_SUCCESS,
  HIGHLIGHT_LOCATION
} from './journey.actions';


const journeyReducer = (state = [], action) => {
  const { type, payload } = action;

  const enrichJourney = (journey) => ({
    ...journey,
    locations: journey.locations.map((loc => ({ ...loc, isActive: false })))
  });

  switch (type) {
    case LOAD_JOURNEY_SUCCESS:
      const { journey } = payload;
      return [...state, enrichJourney(journey)]

    case LOAD_JOURNEY_IN_PROGRESS:
      return [...state]

    case LOAD_JOURNEY_FAILURE:
      return [...state]

    case HIGHLIGHT_LOCATION:
      const { journey: currentJourney, location } = payload;
      return [
        ...state.filter(j => j.id !== currentJourney.id), 
        {...currentJourney, locations: currentJourney.locations.map((loc => { 
          let isActive = false;
          if (loc.id === location.id) {
            isActive = true; 
          }
          return { ...loc, isActive }
        }))}
      ]
      
    default:
      return state;
  }
};

export default journeyReducer;