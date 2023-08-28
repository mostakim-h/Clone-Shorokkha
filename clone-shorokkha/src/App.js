import Navber from "./Navber";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navber/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
