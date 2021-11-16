import React, { useEffect, useState } from "react";
import styled from "styled-components";
import KidsCards from "./KidsCards";


function MainContent({ userdata }) {

    const [hijos, setHijos] = useState([]);
    useEffect(() => {
        const child = async () => await fetch('http://localhost:4000/api/users/getChild', {
            method: 'POST',
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({ token: localStorage.getItem('email') })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.searchedChild);
                setHijos(data.searchedChild)

            })
        child();
    }, [])


    return (
        <Container>
            {hijos && hijos.map(item => {
                return (
                    <KidsCards name={item.name} id={item._id} enfermedades={item.enfermedades} bloodType={item.bloodType} birth={item.birth} alergias={item.alergias} />
                )
            })}
        </Container>
    );
}
export default MainContent;
const Container = styled.div`
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  display: flex;
  flex-direction: row;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;