import styled from 'styled-components';
import Leftbar from '../../Leftbar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NewControl } from './NewControl';
import { Percentiles } from '../Percentiles';
import Navbar from '../../Navbar';


function Row(props) {

    const { row } = props;
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => { console.log('row', props) }, [])
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.fecha}
                </TableCell>
                <TableCell align="center">{row.peso}</TableCell>
                <TableCell align="center">{row.altura}</TableCell>
                <TableCell align="center">{row.diametro}</TableCell>
                <TableCell align="center">{row.observaciones}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Medicamentos Recetados
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead style={{ backgroundColor: '#FFFEEC' }}>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Dosis</TableCell>
                                        <TableCell align="center">Periodo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.nombre}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.nombre}
                                            </TableCell>
                                            <TableCell>{historyRow.cantidad}</TableCell>
                                            <TableCell align="center">{historyRow.periodo}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Estudios Medicos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead style={{ backgroundColor: '#FFFEEC' }}>
                                    <TableRow>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell>Resultados</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.estudios.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.nombre}
                                            </TableCell>
                                            <TableCell>{historyRow.resultado}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>

            </TableRow>
        </React.Fragment>
    );
}



export default function CollapsibleTable() {
    const [open, setOpen] = React.useState(false);
    const [control, setControl] = React.useState();


    React.useEffect(() => {
        let idChild = localStorage.getItem('idChild')
        fetch('http://localhost:4000/api/users/getControl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                child: idChild,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setControl(data.getControl)
            })
    }, [])
    return (
        <>
            <Navbar />
            <MainContainer>

                <NewControl open={open} setOpen={setOpen} />
                <ContainerLeftbar>
                    <Leftbar />
                </ContainerLeftbar>
                <TableContainer component={Paper} style={{  paddingTop:'4.5em'}}>
                    <Button onClick={() => setOpen(!open)}>Agregar nuevo registro</Button>
                    <Table aria-label="collapsible table">
                        <TableHead style={{ backgroundColor: '#B5DEFF' }}>
                            <TableRow>
                                <TableCell />
                                <TableCell >Fecha</TableCell>

                                <TableCell align="center">Peso</TableCell>
                                <TableCell align="center">Altura</TableCell>
                                <TableCell align="center">Diametro Cabeza</TableCell>
                                <TableCell align="center">Observaciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {control && control.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Percentiles />
            </MainContainer>
        </>

    );
}
const MainContainer = styled.div`
        display:flex;
        flex-direction: row;
`
const ContainerLeftbar = styled.div`
    width:30%;
`
const Button = styled.button`
    background:#6B59CC;
    height:46px;
    width:204px;
    border:none;
    color:white;
`

