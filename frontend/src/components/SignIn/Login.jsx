import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/padreEhijo.svg';
import { useState } from 'react';
import './signin.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import {Snackbar} from "@material-ui/core";
const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [openAlert, setOpenAlert] = useState(false);
    
    //Login User
    const submit = async () => {
        try {
            await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify
                    ({ password: password, email: email })
            })
                .then((res) => res.json())
                .then((data) => {
                    if ('Invalid username or password' !== data.message) {
                         localStorage.setItem('token', data.loginUser.token );
                         localStorage.setItem('email', email);
                         window.location.href = '/home';
                    }
                    else{
                        setOpenAlert(!openAlert)
                    }
                })
                
            
              
        } catch (error) {
            console.error(error);
        }
    };


    

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
    return (
        <>
         <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          El email no pertenece a un usuario existente en el sistema.
        </Alert>
      </Snackbar>
            <Title>
                <h1>Bienvenido a Healthy!</h1>
            </Title>
            <div className='form-container'>
                <div className='form-aux'>
                    <div className="form">
                        <h2>Ingresa</h2>
                        <label htmlFor="">Email</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="">Contraseña</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <div className='recuperar-contraseña'>
                        </div>
                            <a  style={{textDecoration:'none'}} href="/recoverPassword">Olvidaste tu contraseña?</a>

                        <div className="button">
                            <button onClick={submit}>
                                <CgEnter className='icon' />
                            </button>
                        </div>
                        <div className="link">
                            <Link to='/register' className='short-cut-signUp'> No tenes una cuenta? Registrate</Link>
                        </div>
                    </div>
                </div>
                <div className="svg">
                    <SVG />
                </div>
            </div>
        </>
    )
}

export default Login;

const Title = styled.div`
    padding:5em 0px 0em 5em;
    font-family: 'Roboto';
    color:white;

`