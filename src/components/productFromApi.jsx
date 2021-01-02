import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import productService from "./productService";
import { withRouter } from "react-router";
import userService from "./userService";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import "../App.css";
const SingleProduct = (props) => {
  const [value, setValue] = React.useState(2);
const { product, onDelete, history } = props;
console.log(props);
  return (
    <Grid item xs={4}>
      <br/>
      <h2>
        <div className="b1">

      <img src={product.prImage } className="a8"/>
      <div className="b2">
      <p style={{fontSize:"1.2rem", color:"darkblue"}}>{product.prName}</p>      
      <p style={{fontSize:"1.2rem", color:"darkblue"}}>{product.prPrice}</p>{" "}
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Button style={{background:"lightblue"}}>Add to cart</Button>
      </div>
      
    <br/>

      {userService.isAdmin() && (
          <>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => {
          console.log("navigate to update");
          history.push("/product/update/" + product._id);
        }}
      >
        Edit
      </Button>{" "}


      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          productService
            .deleteProduct(product._id)
            .then((data) => {
              //console.log(data);
              onDelete();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
       
      >
        Delete
      </Button>
      </>
        )}
        </div>
    </h2>
    
    <hr />
  </Grid>
  );
};

export default  withRouter (SingleProduct);

      