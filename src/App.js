import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.css";  //to import only bootstrap
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import LandingPage from './components/landPage'
import Products from './components/pro'
import NotFound from './components/notfound'
import NewProducts from "./components/addNewProduct";
import updateProducts from "./components/updateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
  return(
    <Router>
    <div>
    <ToastContainer />
   

      <div className="">
      <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />      
          <Route path="/product/new" component={NewProducts} />
          <Route path="/product/update/:id" component={updateProducts} />
          <Route path="/product/:page?" component={Products} />      
          <Route path="/product" component={Products} />      
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Products} />
          <Redirect to="/not-found" />
        </Switch>
        </div>
    </div>
    </Router>
  );
}


export default App;
