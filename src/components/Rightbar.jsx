import {

  Avatar,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    backgroundColor:'#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Mis hijos
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          
        />
        <Avatar
          alt="Travis Howard"
        
        />
        <Avatar
          alt="Cindy Baker"
  
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
         
        />
        <Avatar
          alt="Trevor Henderson"
         
        />
        <Avatar
          alt="Trevor Henderson"
        />
      </AvatarGroup>


    </Container>
  );
};

export default Rightbar;
