import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Navbar from './components/Navbar'
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SingUp/SignUp';
import Home from './components/pages/Home/Home';
import Profile from './components/pages/Profile/Profile';
function App() {
  const [token] = useState(localStorage.getItem('token'))
  const [email, setEmail] = useState('')
  const history = createBrowserHistory();
  return (
    <Router history={history} >
      <div className='container-fluid'>
        <Navbar />
        <Switch>
          <Route exact path='/signIn'  >
            {token === '' ? <Redirect to="/" /> : <SignIn   email={email} setEmail={setEmail}/>}
          </Route>
          <Route exact path='/signUp' >
            <SignUp />
          </Route>
          <Route exact path='/profile' >
            <Profile token={token} email={localStorage.getItem('email')}/>
          </Route>
          <Route exact path='/' >
            {token !== '' ? <Home /> : <SignIn  email={email} setEmail={setEmail}/>}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
