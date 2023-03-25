import React from 'react';

import IStudy from '../IStudy';

import { Container, Tab, IStudies } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>I-study Posts</Tab>

      <IStudies>
        <IStudy />
      </IStudies>
    </Container>
  );
};

export default Feed;
