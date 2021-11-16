import React from "react";
import styled from "styled-components";

function Navbar({userdata}) {
  return (
    <NavbarContainer>
      <Text>
        Buenos dias,
        {userdata && userdata.map((item) =>{
          return (
            <span>{item.name}</span>
            )
        })}
      </Text>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    padding-left:10px;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;


export default Navbar;
