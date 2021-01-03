import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SingleProduct from './productFromApi'
import Pagination from '@material-ui/lab/Pagination';
import Jumbotron from 'react-bootstrap/Jumbotron'
import "../App.css";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Grid } from "@material-ui/core";
import productService from "./productService";
import userService from "./userService";
import Menu from "./menu";
const UseStyles = makeStyles((theme) => ({
    addBtn: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  //{name:"talha",price:"12"}
const Pro = (props) => {
    const [products, setProducts] = React.useState([]);
    const classes = UseStyles();
    const page = props.match.params.page? props.match.params.page:1;
    const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    productService
    //.getProducts()
      .getProducts(page,perPage)
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, [page, perPage]);
  const handleNewProductClick = () => {
    //console.log(props);
    props.history.push("/product/new");
  };
  React.useEffect(getData, []);
  //console.log("inside products");
    return ( 
        <div>
          <div style={{paddingLeft:"4rem", paddingRight:"4rem"}}>
          <Jumbotron fluid style={{background:"lightgary"}}>
  <h1 style={{paddingLeft:"40%"}}>Seller</h1>
  <hr/>
    </Jumbotron>
    <Menu />    </div>

          <br/>
          <div style={{paddingLeft:"4rem"}}>
      Records Per Page:{" "} <br/>
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="4">Four</option>
        <option value="6">Six</option>
        <option value="8">Eight</option>
      </select> </div>
      {userService.isLoggedIn() && (
        <Fab 
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/product/" + value);
            //props.history.push("/products/" + value);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + products.length}
      </Grid>
    </div>
        );
}
 
export default Pro;