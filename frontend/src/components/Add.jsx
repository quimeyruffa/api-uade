import {
  Button,
  Container,
  Fab,
  makeStyles,
  Modal,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: '100%',
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

const Add = () => {
  const [nombre, setNombre] = useState();
  const [date, setDate] = useState();
  const [blood, setBlood] = useState();
  let email = localStorage.getItem('email')

  const [alergia, setAlergia] = useState();
  const [alergias, setAlergias] = useState([]);

  const [enfermedad, setEnfermedad] = useState();
  const [enfermedades, setEnfermedades] = useState([]);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
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

  //submit 
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
              setOpen(false);
             setOpenAlert(false);
         })
 }
  return (
    <>
      <Tooltip title="Registra a tu hijo" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <h1>Registra a  tu niño!</h1>
              <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={submit}
              >
                Agregar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
            </div>
              <br /> <br />
              <span>Nombre completo</span>
              <TextField
                id="standard-basic"
                size="small"
                style={{ width: "100%" }}
                onChange={(e) => setNombre(e.target.value)}
              />
              <br /><br />
              <span>Fecha de nacimiento</span>
              <TextField
                id="standard-basic"
                label=""
                type="date"
                size="small"
                style={{ width: "100%" }}
                onChange={(e) => setDate(e.target.value)}
              />
              <br /><br />
              <span>Grupo sanguineo</span>
              <TextField
                id="standard-basic"
                label=""
                type="text"
                size="small"
                style={{ width: "100%" }}
                onChange={(e) => setBlood(e.target.value)}
              />
            </div>

            <br />
            <div className="alergias">
              <span className='span'>Enfermedades Cronicas</span>
              <div className="input-action">
              <TextField
                id="standard-basic"
                label=""
                type="text"
                size="small"
                style={{ width: "70%" }}
                onChange={(e) => setAlergia(e.target.value)} 
              />
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={addAlergia}
                >
                  Agregar
                </Button>
              </div>
            </div>

            <div className="render-alergias">
              {alergias && alergias.map((item) => (
                <div key={item}>
                  {item}
                  <Button
                    name={item}
                    variant="outlined"
                    color="secondary"
                    style={{ height:'15px', border:'none' }}
                    onClick={handleRemoveItem}
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
              <br />
            {/* ENFERMEDADES */}
            <div className="alergias">
              <span className='span'>Alergias</span>
              <div className="input-action">
              <TextField
                id="standard-basic"
                label=""
                type="text"
                size="small"
                style={{ width: "70%" }}
                onChange={(e) => setEnfermedad(e.target.value)}
              />
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => addEnfermedad()}
                >
                  Agregar
                </Button>
              </div>
            </div>

            <div className="render-alergias">
              {enfermedades && enfermedades.map((item) => (
                <div key={item}>
                  {item}

                  <Button
                    name={item}
                    variant="outlined"
                    color="secondary"
                    style={{ height:'15px', border:'none' }}
                    onClick={handleRemoveItemEnfermedad}
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
           
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          Se ha agregado un hijo con exito!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
