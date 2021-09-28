import './signup.css'
import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/pareja.svg';
const SignUp = () => {
    return (
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
                        <input type="text" />
                    </div>
                    <div className="apellido">
                        <span>Apellido</span>
                        <input type="text" />
                    </div>
                </div>
                <div className="datos-privados">
                    <div className="password">
                        <span>Contraseña</span>
                        <input type="password" />
                    </div>
                    <div className="dni">
                        <span>DNI</span>
                        <input type="number" />
                    </div>
                </div>
                <div className="datos-contacto">
                    <div className="email">
                        <span>Email</span>
                        <input type="email" />
                    </div>
                    <div className="telefono">
                        <span>Telefono</span>
                        <input type="number" />
                    </div>
                </div>
                <div className='button-container'>
                    <div className='button'>
                        <button><CgEnter className='icon' /></button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SignUp;