

const journey = require('../../test/mock/journey.mock.json');


const journeyReducer = (state = [journey], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default journeyReducer;