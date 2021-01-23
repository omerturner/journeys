import styled from 'styled-components';

export const StlyedMarker = styled.div`
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