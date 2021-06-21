import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
