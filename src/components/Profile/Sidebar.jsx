import React, {useEffect} from "react";
import styled from "styled-components";
import {
  Home,
  Person,
  Group
} from "@material-ui/icons";
import {Link} from "react-router-dom";
import AvatarImage from "../../assets/avatarImage.jpeg";
import AddKid from "../Kids/AddKid";


function Sidebar({userdata}) {

  useEffect(() => {
    console.log(userdata)
  },[])
  return (
    <Container>
      <AddKid />
      <ProfileContainer>
       <br /><br /> <br />
        {userdata && userdata.map((item)=>{
          return <Name>{item.name} {item.lastname}</Name>

        })}
      </ProfileContainer>
      {userdata && userdata.map((item)=>{
          return(
        <ContactContainer>
          <span>Email: {' '} {item.email}</span>
          <span>Telefono:  {item.telefono}</span>
          <span>Dni:  {item.dni}</span>
        </ContactContainer>

          )

        })}
      <LinksContainer>
        <Links>
          <LinkAux to='/home'>
            < Home />
            <h3>Pagina principal</h3>
          </LinkAux>
          <LinkAux to='/profile'>
            <Person />
            <h3>Perfil</h3>
          </LinkAux>
          <LinkAux to='/children'>
            < Group />
            <h3>Niños</h3>
          </LinkAux>
        </Links>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const LinkAux = styled(Link)`
  margin-left: 15%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: black;
  text-decoration:none;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
