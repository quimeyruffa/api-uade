import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
export const NewVaccine = ({ setOpenModal, openModal, vaccineName, vaccineAge, idChild, token }) => {
    const [lugar, setLugar] = useState();
    const [date, setDate] = useState();
    let id = localStorage.getItem('idChild');
    const ActionMoment = async (name, value) => {
        await fetch('http://localhost:4000/api/users/setVaccine', {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({
                    child: id ,
                    nameVaccine: vaccineName,
                    dateChild: vaccineAge,
                    lugar: lugar,
                    fechaVacunacion: date
                })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

            })
            setOpenModal(!openModal)
    }
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
                    <h1>Registra la vacuna de tu hijo!</h1>
                    <ContainerData>
                        <Data>
                            <span>Vacuna: </span>
                            <label> {vaccineName} </label>
                        </Data>
                        <Data>
                            <span>Edad: </span>
                            <label> {vaccineAge} </label>
                        </Data>
                    </ContainerData>
                    <br />
                    <ContainerInput>
                        <span>Lugar de vacunacion</span>
                        <input type="text" onChange={(e)=>setLugar(e.target.value)}/>
                    </ContainerInput>
                    <br />
                    <ContainerInput>
                        <span>Fecha de vacunacion</span>
                        <input type="date" onChange={(e)=> setDate(e.target.value)}/>
                    </ContainerInput>
                </div>
            <Button onClick={ActionMoment}>Guardar</Button>
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

const ContainerData = styled.div`
    display:flex;
    width:100%;
    flex-direction: row;
`
const Data = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
    span{
        font-weight: bold;
    }
    label{
        margin-left:5px;
        background-color:#A3D8F4;
        padding-left:1em;
        padding-right:1em;
        font-size:12px;
        display:flex;
        align-items:center;
        border-radius:5px;
        color:#1B6CA8;
    }
`
const ContainerInput = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    input{
        border-radius:5px;
        height:40px;
    }
    span{
        width:200px;
        background-color:white;
        position:relative;
        left:150px;
        top:10px;
        font-weight:bold;

    }
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

const Button = styled.button`
    width:100%;
    height:45px;
    color:white;
    font-weight:bold;
    background-color:#7579E7;
    border-radius:5px;
    border:none;
    font-size:20px;
    position:relative;
    bottom:-230px;
    `