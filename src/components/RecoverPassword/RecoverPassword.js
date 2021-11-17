import './signup.css'
import { useState } from 'react';
import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/parent3.svg';
import styled from 'styled-components'
const RecoverPassword = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
 

    const submit = async () => {
        await fetch('http://localhost:4000/api/users/recoverPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dni:name, password:password
            })
        })
            .then((res) => res.json())
            .then((data) => console.log(data.message))
    }

    return (
        <>
           
            <div className="form-container-signUp">
                <div className="svg">
                    <SVG />
                </div>
                <div className="form-container">
                    <h2 style={{ margin: '0px' }}>Recupera tu contraseña</h2>
                    <br />
                    <div className="datos-personales">
                        <div className="nombre">
                            <span>DNI</span>
                            <input type="number" onChange={event => { setName(event.target.value) }} />
                        </div>
                      </div>
                    <div className="datos-privados">
                        <div className="password">
                            <span>Nueva Contraseña</span>
                            <input type="password" onChange={event => setPassword(event.target.value)} />
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

export default RecoverPassword;

const Title = styled.div`
    padding:5em 0px 0em 5em;
    font-family: 'Roboto';
    color:white;

`