import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './pages/Home/Home'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home}/>
          {/* <Route path='/signIn' component={}/>
          <Route path='/logIn' component={}/>
          <Route path='/user/:userId' component={}/>
          <Route path='/user/:userId/skills' component={}/>
          <Route path='/user/:userId/activities' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
