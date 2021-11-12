import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/padreEhijo.svg';
import { Link  } from 'react-router-dom';
import { useState} from 'react';
import './signin.css'

const SignIn = ({email, setEmail}) => {
  
    const [password, setPassword] = useState();
    const submit = async () => {
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

                    localStorage.setItem('token', data.loginUser.token);
                    localStorage.setItem('email', email);
                    window.location.href = '/';
                }
            })
    }

    

    return (
        <div className='form-container'>
            <div className='form-aux'>
                <div className="form">
                    <h2>Ingresa</h2>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className='recuperar-contraseña'>
                        <a href="">Recuperar Contraseña</a>
                    </div>

                    <div className="button">
                        <button onClick={submit}>
                            <CgEnter className='icon' />
                        </button>
                    </div>
                    <div className="link">
                        <Link to='/signUp' className='short-cut-signUp'> No tenes una cuenta? Registrate</Link>
                    </div>
                </div>
            </div>
            <div className="svg">
                <SVG />
            </div>
        </div>
    )
}

export default SignIn;