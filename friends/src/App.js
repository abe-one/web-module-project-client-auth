import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";

/*
// Wrap everything in Router
// Create Links
// Route links to components
  // according to switch
    // Login
    // FriendList
Build Components
  Login
  FriendList
    FriendForm
      'Add' Functionality
Write axios
  login
  auth
    get login
    post friend
Private Route Protected pages 

  
 */

function App() {
  const logout = () => {
    // req to api re logout
    // remove local token
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/login">Login</Link>
          <Link to="/login" onClick={logout}>
            Logout
          </Link>
          <Link to="/friendslist">Tip Top Secret Friends List</Link>
        </header>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/friendslist" component={FriendsList} />
      </Switch>
    </Router>
  );
}

export default App;
