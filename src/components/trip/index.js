import React from 'react';
import _ from 'lodash';
import { Timeline, Typography, Divider, Image, Rate } from 'antd';
import { TYPE_GALLERY, TYPE_IMAGE, TYPE_TEXT } from '../../store/constants';
import Gallery from '../gallery';
import TextBlock from '../text';
import { LayoutItemContainer, StyledMetadata, StyledTitle } from './style';
import Moment from 'moment';
import { getType } from './tripType';

const { Title } = Typography;

const Trip = ({ journey }) => {

  const renderLayoutItem = (item) => {
    const { properties: props } = item;
    switch (item.type) {
      case TYPE_TEXT:
        return <TextBlock {...props} />
      case TYPE_GALLERY:
        return <Gallery {...props}/>
      case TYPE_IMAGE:
        return <Image {...props} />
    }
  }

  return (
    <>
      <Title>{journey.title}</Title>
      <StyledMetadata type="secondary">
        {Moment(journey.duration.from).format('ddd DD MMM, YYYY')} - {Moment(journey.duration.to).format('ddd DD MMM, YYYY')}
      </StyledMetadata>
      <Divider />
      <Timeline>
        {
          journey.locations.map(location => {
            const { icon, label } = getType(location.type);
            return (
              <Timeline.Item key={location.id} dot={icon}>
                <StyledTitle level={3}>{location.title}</StyledTitle>
                <StyledMetadata type="secondary">{label}</StyledMetadata>
                <StyledMetadata type="secondary">{location.location.address1}</StyledMetadata>
                <Rate allowHalf disabled defaultValue={location.rating}/>
                {
                  location.image ?
                  <div style={{ margin: "20px 0 40px 0" }}>
                    {renderLayoutItem({
                      type: "image",
                      properties: {...location.image}
                    })}
                  </div>
                  : ""
                }
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
            )
          })
        }
      </Timeline>
    </>
  )
}

export default Trip;