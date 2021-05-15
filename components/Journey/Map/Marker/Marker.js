import { connect } from 'react-redux';
import { highlightLocation } from '../../../../store/modules/journey/journey.actions';
import InfoWindow from '../InfoWindow/InfoWindow';
import { MapIcon } from './style'

import { getLocationType } from '../../../../store/modules/journey/journey.constants';

const Marker = ({ place, showLocation }) => {
  const { mapIcon, mapIconColor } = getLocationType(place.type);

  return (
    <>
      <MapIcon component={mapIcon} style={{ background: mapIconColor ?? "#ffc0c0" }}
        onClick={() => showLocation(place)}
      />

      {place.isActive && <InfoWindow place={place} />}
    </>
  )
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLocation: (location) => dispatch(highlightLocation(ownProps.journey, location))
  }
}

export default connect(()=>({}), mapDispatchToProps)(Marker);