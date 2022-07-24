import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <img src="/images/logo.svg" alt="" />
      </Container>
      <Menu></Menu>
    </>
  );
};

export default Header;

const Container = styled.div``;

const Menu = styled.div``;
