import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export const NewControl = ({ open, setOpen }) => {
    var idChild = localStorage.getItem('idChild');
    const [fecha, setFecha] = React.useState();
    const [peso, setPeso] = React.useState();
    const [altura, setAltura] = React.useState();
    const [diametro, setDiametro] = React.useState();
    const [observaciones, setObservaciones] = React.useState();

    //Medicamentos Recetados
    const [history, setHistory] = React.useState([]);
    const [nombreMed, setNombreMed] = React.useState();
    const [cantidadMed, setCantidadMed] = React.useState();
    const [periodoMed, setPeriodoMed] = React.useState();
    //Estudios
    const [estudios, setEstudios] = React.useState([]);
    const [nombreEstudio, setNombreEstudio] = React.useState();
    const [resultado, setResultado] = React.useState()

    
    const submit = async () => {
        await fetch('http://localhost:4000/api/users/setControl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                child:idChild,
                fecha:fecha,
                peso:peso,
                altura:altura,
                diametro:diametro,
                observaciones:observaciones,
                history:history,
                estudios:estudios
            })
        })
            .then((res) => res.json())
           
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const AddMed =()=>{
        history.push({nombre:nombreMed, cantidad: cantidadMed, periodo: periodoMed});
    }

    const AddEstudio =()=>{
        estudios.push({nombre:nombreEstudio, resultado: resultado});
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Nuevo Control Pedriatico
                    </Typography>
                    <br />
                    <span>Fecha del control</span>
                    <input type='date' onChange={(e) => setFecha(e.target.value)} />
                    <br /><br />
                    <span>Datos del niño</span>
                    <br /><br />
                    <span>Peso</span>
                    <input type='text' onChange={(e) => setPeso(e.target.value)} />
                    <br /><br />
                    <span>Altura</span>
                    <input type='text' onChange={(e) => setAltura(e.target.value)} />
                    <br /><br />
                    <span>Diametro Cabeza</span>
                    <input type='text' onChange={(e) => setDiametro(e.target.value)} />
                    <br /><br />
                    <span>Observaciones</span>
                    <input type='text' onChange={(e) => setObservaciones(e.target.value)} />
                    <br /><br />
                    <span>Medicamentos Recetados</span>
                    <InputGroup >
                        <input type='text' placeholder='Nombre' onChange={(e) => setNombreMed(e.target.value)} />
                        <input type='text' placeholder='Cantidad' onChange={(e) => setCantidadMed(e.target.value)} />
                        <input type='text' placeholder='Periodo' onChange={(e) =>setPeriodoMed(e.target.value)} />
                    </InputGroup >
                    <button onClick={() => AddMed()}> Agregar </button>
                    <br /><br />
                    <span>Estudios Realizados</span>
                    <InputGroup >
                        <input type='text' placeholder='Nombre' onChange={(e) => setNombreEstudio(e.target.value)} />
                        <input type='text' placeholder='Resultado' onChange={(e) => setResultado(e.target.value)} />
                    </InputGroup >
                    <button onClick={() => AddEstudio()}> Agregar </button>
                    <br /><br />

                    
                    <button onClick={submit}>Guardar Control Pedriatico </button>
                </Box>
            </Modal>
        </div>
    );
}

const InputGroup = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    input{
        width:30%;
    }
`