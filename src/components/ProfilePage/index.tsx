import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="ICON.png"
            alt="向夢想前進中的人"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>向夢想前進中的人</h1>
        <h2>@向夢想前進中的人</h2>

        <p>
          未來人{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/eltonlazzarin/" target="_blank">
            @夢想實驗室
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            香港
          </li>
          <li>
            <CakeIcon />
            於2038年10月10日出生
          </li>
        </ul>

        <Followage>
          <span>
            <strong>989 </strong>
            追蹤中
          </span>
          <span>
            <strong>1 </strong>粉絲
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
