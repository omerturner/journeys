import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import Marker from './Marker/Marker';
import { StyledWrapper } from './style'

const Map = ({ journey }) => {
  const defaultProps = {
    center: [34.0022, -118.4437],
    zoom: 12
  };
 
  return (
    <StyledWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: _.get(process.env, 'REACT_APP_GOOGLE_MAPS_API_KEY') }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        { 
          journey.locations.map(place => (
            <Marker 
              lat={place.coordinates.latitude}
              lng={place.coordinates.longitude}
              journey={journey}
              place={place} />
          ))
        }

      </GoogleMapReact>
    </StyledWrapper>
  );
  
}

export default Map;