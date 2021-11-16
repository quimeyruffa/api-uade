import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Index from './components/Index';
import Calendario from "./components/Kids/calendar/Calendario";
import CollapsibleTable from "./components/Kids/controls/Controles";
import IndexKids from "./components/Kids/IndexKids";
import IndexProfile from "./components/Profile/IndexProfile";
import Login from "./components/SignIn/Login";


const App = () => {
  return (
    <Router >
        <Routes>
            <Route exact path='/login' element={ <Login />}></Route>
            <Route exact path='/profile' element={ <IndexProfile />}></Route>
            <Route exact path="/children" element={ <IndexKids />}> </Route>
            <Route exact path="/calendar" element={ <Calendario/>}> </Route>
            <Route exact path="/controls" element={ <CollapsibleTable/>}> </Route>
            <Route exact path='/home' element={ <Index />}></Route>
        </Routes>
    </Router >
  );
};

export default App;
