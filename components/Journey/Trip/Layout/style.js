import styled from 'styled-components';
import { Typography } from 'antd';

const { Title, Text } = Typography;


export const StyledMetadata  = styled(Text)`
  display: block;
`;
export const StyledTitle  = styled(Title)`
  margin-bottom: 3px !important;
`;

export const LayoutItemContainer = styled.div`
  margin: 20px 2px;
  font-size: 18px;
`;
