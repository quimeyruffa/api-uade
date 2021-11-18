import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  Home,
  CalendarToday,
  Person,
  Group
} from "@material-ui/icons";
import styled from 'styled-components';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
    textDecoration: 'none',
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));



const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <LinkAux to='/home' className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>
          <h3>
            Pagina principal
          </h3>
        </Typography>
      </LinkAux>
      <LinkAux to='/profile' className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>
          <h3>
            Perfil
          </h3>
        </Typography>
      </LinkAux>
      <LinkAux to='/children' className={classes.item}>
        <Group className={classes.icon} />
        <Typography className={classes.text}>
          <h3>
            Niños
          </h3>
        </Typography>
      </LinkAux>
    </Container>
  );
};

export default Leftbar;

const LinkAux = styled(Link)`
  margin-left: 1%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: black;
  text-decoration:none;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.5rem;
    margin-top: 3%;
  }
`;