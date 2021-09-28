import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (


        <div className='navbar'>

            <div className='brand-logo'> 
                    <h4>Healthy</h4>   
            </div>

            <div className='icon-action'>
                <div> <Link to='/turnos' className='link-action' >Mis turnos</Link> </div>
                <div> <Link to='/vacunas' className='link-action' >Mis vacunas</Link> </div>
                <div> <Link to='/' className='link-action' >Home</Link> </div>
                <div> <Link to='/signIn' className='link-action' >Hola usuario!</Link> </div>
            </div>
        </div>


    )
}

export default Navbar;