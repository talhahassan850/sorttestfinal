import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

import productService from './productService';
import Auth from './auth/Auth';
const NewProducts = (props) => {
  const [prName, setName] = React.useState("");
  const [prCategory, setCategory] = React.useState("");
  const [prPrice, setPrice] = React.useState(0);
  const [prDetail, setDetail] = React.useState("");
  const [prImage, setImage] = React.useState("");
    return ( 
      <Auth>
        <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
      <TextField
          label="Name"
          fullWidth
          value={prName}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="category"
          fullWidth
          value={prCategory}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <TextField
          label="price"
          fullWidth
          value={prPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          label="Detail"
          fullWidth
          value={prDetail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <TextField
          label="Image"
          fullWidth
          value={prImage}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ prName,prCategory, prPrice, prDetail,prImage })
              .then((data) => {
                console.log(data);
                props.history.push("/product");
              })
              .catch((err) => {
                console.log(err);  
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
    </Auth>
     );
}
 
export default NewProducts;