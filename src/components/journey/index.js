import React from 'react';
import Trip from '../trip';
import Map from '../map';

import { Row, Col } from 'antd';

const Journey = ({ journey }) => (
  <div style={{ padding: 30 }}>
    <Row gutter={32}>
      <Col span={14}>
        <Trip journey={journey}/>
      </Col>
      <Col span={10}>
        <Map/>
      </Col>
    </Row>
  </div>
)

export default Journey;