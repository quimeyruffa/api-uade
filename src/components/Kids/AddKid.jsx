import {
  Fab,
  makeStyles,
  Modal,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import './modals.css';
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddKid = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const [nombre, setNombre] = useState();
    const [date, setDate] = useState();
    const [blood, setBlood] = useState();

    const [alergia, setAlergia] = useState();
    const [alergias, setAlergias] =useState([]);

    const [enfermedad, setEnfermedad] = useState();
    const [enfermedades, setEnfermedades] = useState([]);

    let email = localStorage.getItem('email')

    //ALERGIAS
    const addAlergia = () => {
        if (alergia !== null) { 
            alergias.push(alergia)
            setAlergia(null)
         }
         setAlergia(null)
    }

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        setAlergias(alergias.filter(item => item !== name));
    };

    //ENFERMEDADES
    const addEnfermedad = () => {
        if (enfermedad !== null) { 
            enfermedades.push(enfermedad)
            setEnfermedad(null)
         }
         setEnfermedad(null)
    }

    const handleRemoveItemEnfermedad = (e) => {
        const name = e.target.getAttribute("name")
        setEnfermedades(enfermedades.filter(item => item !== name));
    };

    const submit = async () => {
        
        let array = {parent:email, name:nombre, birth: date, bloodType:blood, alergias: alergias, enfermedades: enfermedades }
        console.log(array)
        await fetch('http://localhost:4000/api/users/createChild', {
            method : 'POST',
            mode : 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
             body: JSON.stringify(array)
            })
             .then((res) => res.json())
             .then((data) => {
                 console.log(data.message)
             })
     }
  return (
    <>
      <Tooltip title="Registra a tu hijo" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
      <div className="modalContainer">
                <button onClick={() => setOpen(false)}> X </button>
                <div className='title'>
                    <h1>Registra a tu hijo!</h1>
                </div>
                <div className='body'>

                    <div className="nombre">
                        <span className='span'>Nombre Completo</span>
                        <input type="text" className='input' onChange={(e)=> setNombre(e.target.value)}/>
                    </div>
                    <div className="nacimiento">
                        <span className='span'>Fecha de nacimiento</span>
                        <input type="date" className='input'  onChange={(e)=> setDate(e.target.value)}/>
                    </div>

                    <div className="sangre">
                        <span className='span'>Grupo Sanguineo</span>
                        <input type="text" className='input'  onChange={(e)=> setBlood(e.target.value)}/>
                    </div>
                    <div></div>
                    {/* ALERGIAS */}
                    <div className="alergias">
                        <span className='span'>Enfermedades Cronicas</span>
                        <div className="input-action">
                            <input type="text" className='input' onChange={(e) => setAlergia(e.target.value)} />
                            <button onClick={() => addAlergia()}> Agregar </button>
                        </div>
                    </div>

                    <div className="render-alergias">
                        {alergias && alergias.map((item) => (
                            <div key={item}>
                                {item} 
                                <button name={item} onClick={handleRemoveItem}>x</button> 
                            </div>
                        ))}
                    </div>

                    {/* ENFERMEDADES */}
                    <div className="alergias">
                        <span className='span'>Alergias</span>
                        <div className="input-action">
                            <input type="text" className='input' onChange={(e) => setEnfermedad(e.target.value)} />
                            <button onClick={() => addEnfermedad()}> Agregar </button>
                        </div>
                    </div>

                    <div className="render-alergias">
                        {enfermedades && enfermedades.map((item) => (
                            <div key={item}>
                                {item} 
                                <button name={item} onClick={handleRemoveItemEnfermedad}>x</button> 
                            </div>
                        ))}
                    </div>

                </div>
                <div className='footer'>
                    <button onClick={submit}>Continue</button>
                </div>
            </div>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddKid;
