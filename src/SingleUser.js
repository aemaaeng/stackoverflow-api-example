import React from "react";
import styled from "styled-components";

const UserContainer = styled.div`
  border: 1px solid blue;

  img {
    width: 36px;
    height: 36px;
  }
`;

const SingleUser = ({ username, avatarImg }) => {
  return (
    <UserContainer>
      <div>사용자 이름: {username}</div>
      <div>
        프로필 사진:
        <img alt="profile-img" src={avatarImg} />
      </div>
    </UserContainer>
  );
};

export default SingleUser;
