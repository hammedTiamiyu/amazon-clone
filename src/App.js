import React, {useEffect} from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Orders from "./Orders";
import Checkout from "./Checkout.js"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="App">
     <Router>
       <Switch>
        <Route path="/orders" >
          <Header />
          <Orders />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
        </Route>
        <Route path="/" >
          <Header />
          <Home />
        </Route>                         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
