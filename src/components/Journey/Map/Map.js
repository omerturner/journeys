import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { highlightLocation } from '../../../store/modules/journey/journey.actions';
import { Card, Rate, Tag, Image } from 'antd';

 
const Wrapper = styled.main`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`;

// InfoWindow component
const InfoWindow = ({ place: { rating, title, categories, image } }) => {
  const StyledInfoWindow = styled(Card)`
    position: relative;
    bottom: 400px;
    left: -110px;
    height: 360px;
    width: 220px;
    background-color: white;
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
    padding: 10px;
    font-ize: 14px;
    z-index: 100;
  `

  return (
    <StyledInfoWindow 
      cover={<Image 
        width={200} 
        style={{ maxHeight: 200 }} 
        src={image.src} />}>
      <Card.Meta title={title} description={
        <>
          <Rate allowHalf disabled defaultValue={rating} style={{ marginBottom: 15 }}/>
          {
            categories.slice(0,2).map(cat => <Tag>{cat.title}</Tag>)
          }
        </>
      } />
      
    </StyledInfoWindow>
  );
};

// Marker component
const Marker = ({ place, showLocation }) => {
  const StlyedMarker = styled.div`
    width: 18px;
    height: 18px;
    background-color: #000;
    border: 2px solid #fff;
    border-radius: 100%;
    user-select: none;
    transform: translate(-50%, -50%);
    cursor: 'pointer';
    &:hover {
      z-index: 1;
    }
  `;

  return (
    <>
      <StlyedMarker 
        onClick={() => showLocation(place)}
      />

      {place.isActive && <InfoWindow place={place} />}
    </>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLocation: (location) => dispatch(highlightLocation(ownProps.journey, location))
  }
}
const ConnectedMarker = connect(()=>{}, mapDispatchToProps)(Marker);
 
const Map = ({ journey }) => {

  const defaultProps = {
    center: [34.0022, -118.4437],
    zoom: 12
  };
 
  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: _.get(process.env, 'REACT_APP_GOOGLE_MAPS_API_KEY') }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        { 
          journey.locations.map(place => (
            <ConnectedMarker 
              lat={place.coordinates.latitude}
              lng={place.coordinates.longitude}
              journey={journey}
              place={place} />
          ))
        }

      </GoogleMapReact>
    </Wrapper>
  );
  
}

export default Map;