import Imagen from '../../photos/calendarioVacunacion.jpg';
import { ReactComponent as SVG } from '../../svg/dadAnddaughter.svg';
const Articulos = () =>{
    return(
        <div className="container-articulos">
            <div className="title-calendario">
                <span>Calendario de vacunacion</span>
                <div className="jpg">
                        <img src={Imagen} alt="calendario de vacunacion" />
                </div>
            </div>
            <div className="svg">
                <SVG className='svg'/>
            </div>
            
        </div>
    )
}

export default Articulos;