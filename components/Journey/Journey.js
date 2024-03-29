import React, { useEffect } from 'react';
import Trip from './Trip/Trip';
import Map from './Map/Map';
import { connect, useSelector } from 'react-redux';
import { journeySelector } from '../../store/modules/journey/journey.selectors';
import { loadJourneyByName } from '../../store/modules/journey/journey.thunks';
import { Row, Col } from 'antd';


const Journey = ({ name, startLoadingJourney }) => {

  const journey = useSelector(journeySelector(name));
  
  useEffect(() => {
    startLoadingJourney();
  }, [name]);

  return (
    journey ? 
    <div style={{ padding: 70 }}>
      <Row gutter={32}>
        <Col span={14}>
          <Trip journey={journey}/>
        </Col>
        <Col span={10}>
          <Map journey={journey}/>
        </Col>
      </Row>
    </div> : ""
  )
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.match.params.name
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const name = ownProps.match.params.name;
  return {
    startLoadingJourney: () => dispatch(loadJourneyByName(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Journey);