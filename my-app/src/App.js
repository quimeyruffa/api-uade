import { useState } from 'react';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from 'react';
import Navbar from './components/Navbar'
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SingUp/SignUp';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';
import  Calendario  from './components/pages/CalendarioVacunacion/Calendario';

function App() {
  useEffect(() => {
    let token = localStorage.getItem('token');
    setToken(token)
    console.log(token)
  }, [])

  const [token, setToken] = useState()
  const [email, setEmail] = useState('')
  const history = createBrowserHistory();
  return (
    <Router history={history} >
      <div className='container-fluid'>
        <Navbar />
        <Switch>
          <Route exact path='/signIn'> <SignIn email={email} setEmail={setEmail} /> </Route>
          <Route exact path='/signUp' > <SignUp /> </Route>
          <Route exact path='/profile' > <Profile token={token} email={localStorage.getItem('email')} /></Route>
          <Route exact path='/calendario'><Calendario/> </Route>
          <Route exact path='/'> <Home /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
