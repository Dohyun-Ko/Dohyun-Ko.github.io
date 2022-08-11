import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <TitleText>DOHYUN TIMES</TitleText>
      <RedBar>
        <RedBarButton>Portfolio</RedBarButton>
        <RedBarSeparator>•</RedBarSeparator>
        <RedBarButton>Blog</RedBarButton>
        <RedBarSeparator>•</RedBarSeparator>
        <RedBarButton>Toy Projects</RedBarButton>
        <RedBarSeparator>•</RedBarSeparator>
        <RedBarButton>SandBox</RedBarButton>
      </RedBar>
      <BottomBar>
        <BottomBarText>
          {"Last Update " + process.env.REACT_APP_LAST_UPDATE_DATE}
        </BottomBarText>
        <form style={{ flex: "1 1 0", margin: "0 10% 0 10%" }}>
          <SearchInput />
        </form>
        <BottomBarText>
          {"Version " + process.env.REACT_APP_VERSION}
        </BottomBarText>
      </BottomBar>
    </HeaderWrapper>
  );
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

const TitleText = styled.div`
  font-family: "DMSerifText";
  font-size: 72px;
  height: 77px;
  line-height: 77px;
  color: #242c39;
`;

const RedBar = styled.div`
  font-size: 40px;
  height: 52px;
  width: 1240px;
  background-color: #ac3232;
  display: flex;
  justify-content: center;
`;

const RedBarButton = styled.button`
  font-family: "DMSerifDisplay";
  color: #f4f4f4;
  font-size: 40px;
  border: 0;
  background-color: transparent;
  height: 52px;
  line-height: 52px;
  padding: 0;
`;

const RedBarSeparator = styled.div`
  font-family: "DMSerifDisplay";
  color: #f4f4f4;
  margin: 0 7px 0 7px;
`;

const BottomBar = styled.div`
  height: 38px;
  width: 1240px;
  display: flex;
  justify-content: space-between;
`;

const BottomBarText = styled.div`
  height: 38px;
  line-height: 38px;
  font-family: "DMSerifText";
  font-size: 28px;
  color: #242c39;
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: 1px solid #242c39;
  height: 26px;
  margin: 4px 0 8px 0;
  width: 100%;
`;

export default Header;
