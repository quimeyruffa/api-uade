import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

export const Vaccine = ({ setOpenModal, openModal, vaccineName, vaccineAge, token }) => {

    let id = localStorage.getItem('idChild');
    const [vacuna, setVacuna] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/api/users/getVaccine', {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id, name:vaccineName, fecha:vaccineAge })
        })
            .then((res) => res.json())
            .then((data) => {
                setVacuna(data.searchedVaccine);
            });

    }, [])

    return (
        <Container>
            <div className="modalContainer">
                <ContainerButton>
                    <button onClick={() => setOpenModal(!openModal)}> X </button>
                </ContainerButton>
                <div className='title'>
                   <h1> Registro de Vacuna </h1>
                    <ContainerVacuna>
                        {vacuna.map((item) => {
                            return (
                                <Vacuna>
                                    <FechaVacuna>
                                        {item.dateChild}
                                    </FechaVacuna>

                                    <TipoVacuna>
                                        {item.nameVaccine}
                                    </TipoVacuna>

                                    <div>
                                        <P>
                                            {item.fechaVacunacion}
                                        </P>
                                    </div>

                                    <div>
                                        <P>
                                            {item.lugar}
                                        </P>
                                    </div>
                                </Vacuna>

                            )
                        })}

                    </ContainerVacuna>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height:100vh;
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

const ContainerVacuna = styled.div`
    width: 100%;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
`
const Vacuna = styled.div`
    display:flex;
    flex-direction: row;
    height:50px;
    justify-content: space-around;
    display:flex;
    align-items: center;
    margin-top:1em;
    border-radius:5px;
    div{
        width:200px;
    }
    border:1px solid gray;
`

const FechaVacuna = styled.div`
    background: #A2D2FF;
    border-radius:5px 0px 0px 5px;
    color:#161E54;
    font-weight:bold;
    display:flex;
    justify-content:center;
    height:100%;
    align-items: center;
`

const TipoVacuna = styled.div`
    background: #FFFF;
    border-radius:5px;
    color:#3E00FF;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items: center;
`
const P = styled.p`
    font-weight:bold;    
`