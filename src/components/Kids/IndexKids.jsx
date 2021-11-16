import styled from "styled-components";
import Sidebar from "../Profile/Sidebar";
import MainContent from "./MainContent";
import Add from "../Add";
import { useState, useEffect } from "react";

function IndexKids() {
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/users/userByMail', {
            method: 'POST',
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({ email: localStorage.getItem('email') })
        })
            .then((res) => res.json())
            .then((data) => {
              setUserdata(data.data.docs)
            })
  },[])

  return (
    <Container>
      <Sidebar userdata={userdata}/>
      <MainContent/>
      <Add />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default IndexKids;