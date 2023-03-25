import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="搜尋I-Study" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="你可能喜歡"
            elements={[
              <FollowSuggestion name="札克博士" nickname="@札克" />,
              <FollowSuggestion name="好同學" nickname="@世上最好的同學" />,
              <FollowSuggestion name="華生" nickname="@華生" />,
            ]}
          />

          <List
            title="文章"
            elements={[
              <News
                header="學習 · 分享"
                topic="五分鐘學會高效學習！"
                link="dreamland.jpeg"
              />,
              <News
                header="心理 · 分享"
                topic="「冥想」能減緩焦慮、改善睡眠"
                link="dreamland.jpeg"
              />,
              <News header="學習 · 分享" topic="記憶宮殿的使用方法" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
