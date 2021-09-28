import { CgEnter } from 'react-icons/cg';
import { ReactComponent as SVG } from '../../svg/padreEhijo.svg';
import { Link } from 'react-router-dom';
import './signin.css'
const SignIn = () => {
    return (
        <div className='form-container'>
            <div className='form-aux'>
                <div className="form">
                    <h2>Ingresa</h2>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />
                    <div className='recuperar-contraseña'>
                        <a href="">Recuperar Contraseña</a>
                    </div>

                    <div className="button">
                        <button>
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