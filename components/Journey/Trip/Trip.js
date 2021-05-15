import { connect } from 'react-redux';
import { highlightLocation } from '../../../store/modules/journey/journey.actions';
import Location from './Layout/Location';
import { Timeline, Typography, Divider } from 'antd';
import Icon from '@ant-design/icons';
import Moment from 'moment';
import { getLocationType } from '../../../store/modules/journey/journey.constants';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Trip = ({ journey, showLocation }) => (
  <>
    <Title>{journey.title}</Title>
    <Text type="secondary">
      {Moment(journey.duration.from).format('ddd DD MMM, YYYY')} - {Moment(journey.duration.to).format('ddd DD MMM, YYYY')}
    </Text>
    <Divider />
    <Timeline>
      {
        journey.locations.map(location => {
          const { icon } = getLocationType(location.type);
          const TimelineIcon = styled(icon)`
            font-size: 24px;
          `
          return (
            <Timeline.Item 
              key={location.id} 
              dot={<Icon component={TimelineIcon} />} 
              onMouseEnter={() => showLocation(location)} 
              onMouseLeave={() => showLocation({ id: -1 })} 
            >
              <Location location={location} />
              <Divider />
            </Timeline.Item>
          )
        })
      }
    </Timeline>
  </>
)

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showLocation: (location) => dispatch(highlightLocation(ownProps.journey, location))
  }
}

export default connect(()=>({}), mapDispatchToProps)(Trip);
