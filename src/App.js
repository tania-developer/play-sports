
import './App.css';
import Banner from './Components/Banner/Banner';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
