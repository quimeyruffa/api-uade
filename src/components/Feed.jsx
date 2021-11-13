import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";
import { ReactComponent as Svg } from "../svg/parent1.svg";
import { ReactComponent as Svg1 } from "../svg/parent2.svg";
import { ReactComponent as Svg2 } from "../svg/parent3.svg";

import Estrellas from '../svg/stars.png'
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    background:'#f7f7f738'
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>

      <Post title={"Bienvenidos padres!"} state={false} component={<Svg style={{width:'40%'}}/>}  text="  Bienvenidos a Healty, una aplicacion donde los padres pueden mantener el registro de las vacunas y controles pedriaticos de los chicos. Tambien podran comparar  los controles de sus hijos con los percentiles de Curva de Crecimiento ofrecidos por la OMS"/>
      <Post title="Registra a tu chico"  state={false} component={<Svg1 style={{width:'40%'}}/>} text="Para registrar a tus chicos tenes un acceso directo en la parte de abajo a la derecha de la pagina, el boton mas (+) te desplegara un formulario para llenarlo con los datos de tus hijos"/>
      <Post title="Controles de percentiles" state={true} component={<Svg2 style={{width:'40%'}}/>}  text="Tambien podran comparar  los controles de sus hijos con los percentiles de Curva de Crecimiento ofrecidos por la OMS"/>
    </Container>
  );
};

export default Feed;

