import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SingUp/SignUp';
import Home from './components/pages/Home/Home';
function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <Navbar />
        <Switch>
          <Route exact path='/signIn' >
            <SignIn />
          </Route>
          <Route exact path='/signUp' >
            <SignUp />
          </Route>
          <Route exact path='/' >
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
