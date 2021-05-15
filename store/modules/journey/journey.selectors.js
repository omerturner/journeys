import { createSelector } from 'reselect';
import _ from 'lodash';

const baseAuthSelector = state => state.journeyReducer;

export const journeySelector = slugifiedName => {
  return createSelector(
    baseAuthSelector,
    journeys => _.find(journeys, { slugifiedName })
  )
}
