import {useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Add from "./Add";
import Feed from "./Feed";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
const useStyles = makeStyles((theme) => ({
    right: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
        backgroundColor:'#fff',
    },
}));

const Index = () => {

    const classes = useStyles();
    const [userdata, setUserdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/users/userByMail', {
            method: 'POST',
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify
                ({ email: localStorage.getItem('email') })
        })
            .then((res) => res.json())
            .then((data) => {
               setUserdata(data.data.docs)
            })
  },[])
    return (
        <div>
            <Navbar userdata={userdata}/>
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Leftbar />
                </Grid>
                <Grid item sm={10} xs={10}>
                    <Feed style={{ zIndex: '10' }} />
                </Grid>
            </Grid>
            <Add />
        </div >
    );
};

export default Index;