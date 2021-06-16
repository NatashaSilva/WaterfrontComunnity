import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import Register from './pages/Register/Register'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/register' component={Register}/>
          {/* <Route path='/user/:userId' component={}/>
          <Route path='/user/:userId/skills' component={}/>
          <Route path='/user/:userId/activities' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
