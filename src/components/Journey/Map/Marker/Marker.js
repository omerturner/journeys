import { connect } from 'react-redux';
import { highlightLocation } from '../../../../store/modules/journey/journey.actions';
import InfoWindow from '../InfoWindow/InfoWindow';
import { StlyedMarker } from './style'


const Marker = ({ place, showLocation }) => (
  <>
    <StlyedMarker 
      onClick={() => showLocation(place)}
    />

    {place.isActive && <InfoWindow place={place} />}
  </>
);


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLocation: (location) => dispatch(highlightLocation(ownProps.journey, location))
  }
}

export default connect(()=>{}, mapDispatchToProps)(Marker);