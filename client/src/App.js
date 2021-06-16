import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import Register from './pages/Register/Register'
import User from './pages/User/User'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/register' component={Register}/>
          <Route path='/user' component={User}/>
          {/* <Route path='/user/skills' component={}/>
          <Route path='/user/interest' component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
