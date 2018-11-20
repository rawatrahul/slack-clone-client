import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  color: #333;
  padding:10px;
  border-bottom: 1px solid #f2f2f2;
`;
export default ({ channelName }) => (
  <HeaderWrapper>
    <Header textAlign="left">#{channelName}</Header>
  </HeaderWrapper>
);
