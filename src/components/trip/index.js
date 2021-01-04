import React from 'react';
import { Timeline, Typography, Divider } from 'antd';

import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';



const { Title, Paragraph } = Typography;


const Trip = ({ journey }) => {

  return (
    <>
      <Title>{journey.title}</Title>
      <Timeline>
        {
          journey.locations.map(location => (
            <Timeline.Item>
              <Title level={3}>{location.title}</Title>
              {location.text.map(p => <Paragraph>{p}</Paragraph>)}
              <br/><br/>
              <ImageGallery items={location.images} />
              <br/><br/>
              <Divider />
            </Timeline.Item>
          ))
        }
      </Timeline>
    </>
  )
}

export default Trip;