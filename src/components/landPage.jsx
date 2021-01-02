import React from "react";
//import { Link, Menu } from "@material-ui/core";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
//import { Button, Image, Navbar,Col,Row, Container } from 'react-bootstrap';
import Menu from "./menu";
import Search from "./search";
import Collection from "./collection";
import Carasol from "./carasol";
import Sale from "./glass";
import Brand from "./brand"
import Footer from "./footer";
/*<Menu />
      <Search /> */
const landPage = () => {
    return ( 
      <div>
       <Menu />
      <Search />
      <Carasol />
      <Collection />
      <Sale />
      <Brand />
      <Footer />

      </div>
        
     );
}
 
export default landPage;