import React from 'react';
import { useSelector } from 'react-redux';
import { journeySelector } from '../journey/journey.selectors';
import _ from 'lodash';
import { Timeline, Typography, Divider, Image } from 'antd';
import { TYPE_GALLERY, TYPE_IMAGE, TYPE_TEXT } from '../../store/constants';
import Gallery from '../gallery';
import Text from '../text';
import { LayoutItemContainer } from './style';

const { Title } = Typography;

const Trip = () => {

  const journey = useSelector(journeySelector('london'));

  const renderLayoutItem = (item) => {
    const { properties: props } = item;
    switch (item.type) {
      case TYPE_TEXT:
        return <Text {...props} />
      case TYPE_GALLERY:
        return <Gallery {...props}/>
      case TYPE_IMAGE:
        return <Image {...props} />
    }
  }

  return (
    <>
      <Title>{journey.title}</Title>
      <Timeline>
        {
          journey.locations.map(location => (
            <Timeline.Item key={location.id}>
              <Title level={3}>{location.title}</Title>
              {
                _.orderBy(location.layout, ['order'], ['asc'])
                .map(item => (
                    <LayoutItemContainer key={item.order}>
                      {renderLayoutItem(item)}
                    </LayoutItemContainer>
                  )
                )
              }
              <Divider />
            </Timeline.Item>
          ))
        }
      </Timeline>
    </>
  )
}

export default Trip;