import './signup.css'
import { useState } from 'react';
import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/parent3.svg';
import styled from 'styled-components'
const SignUp = () => {
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();
    const [dni, setDni] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();

    const submit = async () => {
        console.log({ name: name, lastname: lastname, password: password, dni: dni, email: email, telefono: telefono })
        await fetch('http://localhost:4000/api/users/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
                ({ name: name, lastname: lastname, password: password, dni: dni, email: email, telefono: telefono })
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message)
            })
    }

    return (
        <>
            <Title>
                <h1>Registrate para comenzar!</h1>
            </Title>
            <div className="form-container-signUp">
                <div className="svg">
                    <SVG />
                </div>
                <div className="form-container">
                    <h2 style={{ margin: '0px' }}>Registro</h2>
                    <br />
                    <div className="datos-personales">
                        <div className="nombre">
                            <span>Nombre</span>
                            <input type="text" onChange={event => { setName(event.target.value) }} />
                        </div>
                        <div className="apellido">
                            <span>Apellido</span>
                            <input type="text" onChange={event => setLastname(event.target.value)} />
                        </div>
                    </div>
                    <div className="datos-privados">
                        <div className="password">
                            <span>Contraseña</span>
                            <input type="password" onChange={event => setPassword(event.target.value)} />
                        </div>
                        <div className="dni">
                            <span>DNI</span>
                            <input type="number" onChange={event => setDni(event.target.value)} />
                        </div>
                    </div>
                    <div className="datos-contacto">
                        <div className="email">
                            <span>Email</span>
                            <input type="email" onChange={event => setEmail(event.target.value)} />
                        </div>
                        <div className="telefono">
                            <span>Telefono</span>
                            <input type="number" onChange={event => setTelefono(event.target.value)} />
                        </div>
                    </div>
                    <div className='button-container'>
                        <div className='button'>
                            <button><CgEnter className='icon' onClick={submit} /></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp;

const Title = styled.div`
    padding:5em 0px 0em 5em;
    font-family: 'Roboto';
    color:white;

`