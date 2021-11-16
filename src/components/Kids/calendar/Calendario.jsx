import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { IoReaderSharp } from 'react-icons/io5';
import { NewVaccine } from './NewVaccine';
import { Vaccine } from './Vaccine';
import Leftbar from '../../Leftbar';
import Navbar from '../../Navbar';
function createData(name, BCG, HEPATITIS_B, PENTAVALIENTE,
    ROTAVIRUS, CUADRUPLE, SALK, NEUMOCOCO_CONJUGADA, GRIPE,
    MENINGOCOCO, TRIPLE_VIRAL, HEPATITIS_A, VARICELA,
    TRIPLE_BACTERIANA_CELULAR, TRIPLE_BACTERIANA_ACELULAR,
    HPV, DOBLE_BACTERIANA, DOBLE_VIRAL) {
    return {
        name, BCG, HEPATITIS_B, PENTAVALIENTE,
        ROTAVIRUS, CUADRUPLE, SALK, NEUMOCOCO_CONJUGADA, GRIPE,
        MENINGOCOCO, TRIPLE_VIRAL, HEPATITIS_A, VARICELA,
        TRIPLE_BACTERIANA_CELULAR, TRIPLE_BACTERIANA_ACELULAR,
        HPV, DOBLE_BACTERIANA, DOBLE_VIRAL
    };
}
const rows2 = [
    createData('15-18 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('24 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('INGRESO ESCOLAR (5-6 ANOS)', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('11 ANOS', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('ADULTOS', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('EMBARAZADAS', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('PUERPERIO', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL')
];

const rows = [
    createData('RECIEN NACIDO', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('2 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('3 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('4 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('5 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('6 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('12 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('15 MESES', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL'),
    createData('PERSONAL DE SALUD', 'BCG', 'HEPATITIS B', 'PENTAVALIENTE',
        'ROTAVIRUS', 'CUADRUPLE', 'SALK', 'NEUMOCOCO CONJUGADA', 'GRIPE',
        'MENINGOCOCO ', 'TRIPLE VIRAL', 'HEPATITIS A', 'VARICELA',
        'TRIPLE BACTERIANA CELULAR', 'TRIPLE BACTERIANA ACELULAR',
        'HPV', 'DOBLE BACTERIANA', 'DOBLE VIRAL')

];

const Calendario = () => {
    const [nameRow, setNameRow] = useState();
    const [nameVaccine, setNameVaccine] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const token = localStorage.getItem('token')

    return (
        <MainContainer>
            {openModal && <NewVaccine setOpenModal={setOpenModal} openModal={openModal} token={token} vaccineAge={nameRow} vaccineName={nameVaccine} />}
            {openModal2 && <Vaccine setOpenModal={setOpenModal2} openModal={openModal2} token={token} vaccineAge={nameRow} vaccineName={nameVaccine} />}
            <Navbar />
            <ContainerLeftbar>

            <Leftbar />
            </ContainerLeftbar>
            <Container style={{  paddingTop:'4.5em'}}>
                <Header> 
                    <h1> Calendario de vacunacion</h1>
                    <button>Ver todas las vacunas</button>
                </Header>
                <TableContainer component={Paper} style={{ width: '70%' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">VACUNA / EDAD</TableCell>
                                <TableCell align="center">BCG</TableCell>
                                <TableCell align="center">HEPATITIS B</TableCell>
                                <TableCell align="center">PENTAVALIENTE</TableCell>
                                <TableCell align="center">ROTAVIRUS</TableCell>
                                <TableCell align="center">CUADRUPLE</TableCell>
                                <TableCell align="center">SALK</TableCell>
                                <TableCell align="center">NEUMOCOCO CONJUGADA</TableCell>
                                <TableCell align="center">GRIPE</TableCell>
                                <TableCell align="center">DOBLE VIRAL</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.BCG)
                                            setOpenModal(!openModal)
                                        }}>
                                            <MdAdd />
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.BCG)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.HEPATITIS_B)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.HEPATITIS_B)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.PENTAVALIENTE)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.PENTAVALIENTE)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.ROTAVIRUS)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.ROTAVIRUS)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.CUADRUPLE)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.CUADRUPLE)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.SALK)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.SALK)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.NEUMOCOCO_CONJUGADA)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.NEUMOCOCO_CONJUGADA)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.GRIPE)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.GRIPE)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.DOBLE_VIRAL)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setNameRow(row.name)
                                                setNameVaccine(row.DOBLE_VIRAL)
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>

                <br></br> <br></br>

                <TableContainer component={Paper} style={{ width: '70%' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">VACUNA / EDAD</TableCell>
                                <TableCell align="center">MENINGOCOCO </TableCell>
                                <TableCell align="center">TRIPLE VIRAL</TableCell>
                                <TableCell align="center">HEPATITIS A</TableCell>
                                <TableCell align="center">VARICELA</TableCell>
                                <TableCell align="center">TRIPLE BACTERIANA CELULAR</TableCell>
                                <TableCell align="center">TRIPLE BACTERIANA ACELULAR</TableCell>
                                <TableCell align="center">HPV</TableCell>
                                <TableCell align="center">DOBLE BACTERIANA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.MENINGOCOCO)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.TRIPLE_VIRAL)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.HEPATITIS_A)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.VARICELA)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.TRIPLE_BACTERIANA_CELULAR)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.TRIPLE_BACTERIANA_ACELULAR)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.HPV)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setNameRow(row.name)
                                            setNameVaccine(row.DOBLE_BACTERIANA)
                                            setOpenModal(!openModal)
                                        }}><MdAdd /></Button>
                                        <Button
                                            onClick={() => {
                                                setOpenModal2(!openModal2)
                                            }}
                                        ><IoReaderSharp /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Container>
        </MainContainer>
    );
}
export default Calendario;
const MainContainer = styled.div`
        display:flex;
        flex-direction: row;
`
const ContainerLeftbar = styled.div`
    width:20%;
`
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    padding:1em;
    @media (max-width: 600px) {
        width:40%
        
      }
      @media (max-width: 850px) {
        width:50%
      }
      @media (max-width: 1107px) {
        width:80%
      }
      
`




const Button = styled.button`
    background-color: transparent;
    border:none;
    cursor:pointer;
`

const Header = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width: 100%;
    button{
        border-radius:5px;
        background: #3E00FF;
        border:none;
        font-weight:bold;
        color:white;
        font-size:15px;
        height:30px;
    }
    @media (max-width: 600px) {
        width:100%;
        button{
        height:100%;
      }
    }
`