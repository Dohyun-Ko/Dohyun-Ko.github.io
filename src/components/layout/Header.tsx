import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return <HeaderWrapper>asdfasdf</HeaderWrapper>;
};

const HeaderWrapper = styled.div`
  border-top: 4px solid #686868;
  border-bottom: 4px solid #686868;
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.div``;

export default Header;
