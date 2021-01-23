import styled from 'styled-components';
import { Card } from 'antd';

export const StyledInfoWindow = styled(Card)`
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
`;