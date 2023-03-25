import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ListIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>

        <MenuButton>
          <HomeIcon />
          <span>首頁</span>
        </MenuButton>

        <MenuButton>
          <ExploreIcon />
          <span>搜尋</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>通知</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>訊息</span>
        </MenuButton>


        <MenuButton className="active">
          <ProfileIcon />
          <span>用戶</span>
        </MenuButton>

        <Button>
          <span>I-Study 發文</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar>
          <img
            src="ICON.png"
            alt="向夢想前進中的人"
          />
        </Avatar>

        <ProfileData>
          <strong>向夢想前進中的人</strong>
          <span>@向夢想前進中的人</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
