import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const Vaccine = ({ setOpenModal, openModal, vaccineName, vaccineAge, idChild, token }) => {

    let id = localStorage.getItem('idChild');
    
    const vaccine = async () => {
        await fetch('http://localhost:4000/api/users/getVaccine', {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
    }
    return (
        <Container>
            <div className="modalContainer">
                <ContainerButton>
                    <button onClick={() => setOpenModal(!openModal)}> X </button>
                </ContainerButton>
                <div className='title'>
                   
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;    
`



const ContainerButton = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
    button{
        background-color: #7579E7;
        width:30px;
        height:30px;
        border-radius:5px;
        text-align: center;
        color:white;
        font-weight:bold;
        font-size:20px;
        border:none;

    }
`
