import Navber from "./Navber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './Home';
// import Registration from "./Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Navber />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration">
            {/* <Registration /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
