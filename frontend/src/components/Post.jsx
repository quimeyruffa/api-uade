import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    zIndex:5,
    background:'linear-gradient(55deg, #E2E7FF 30%, #008CFF 90%)',
    cursor: 'inherit'
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
    cursor: 'inherit'
  },
  component:{
    background:'white',
    cursor: 'inherit'
  },
  size:{
    height: 350,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'inherit'
  }
}));

const Post = ({ img, title, text, component, state }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{cursor: 'inherit'}}>
      <CardActionArea>
        <CardMedia className={classes.size} >  {component} </CardMedia>
        <CardContent className={classes.component}>
          <Typography gutterBottom variant="h5">
           <Title> {title} </Title>
          </Typography>
          <Typography variant="body2">
          {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      {state ?
      
      <CardActions className={classes.component}>
        <Button size="small" color="primary">
          Ver mas
        </Button>
        
      </CardActions>
      :''
    }
    </Card>
  );
};

export default Post;
const Title = styled.div`
  font-family:'Lato';
  font-weight: bold;

`