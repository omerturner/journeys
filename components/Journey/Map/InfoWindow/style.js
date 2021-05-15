import styled from 'styled-components';
import { Card } from 'antd';

export const StyledInfoWindow = styled(Card)`
  position: relative;
  bottom: 340px;
  left: -90px;
  width: 200px;
  height: 300px;
  background-color: white;
  box-shadow: 0 2px 7px 1px rgba(0,0,0,0.3);
  font-ize: 14px;
  z-index: 100;
`;