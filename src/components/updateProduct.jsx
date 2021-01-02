import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
//import { Button } from 'bootstrap';

import productService from './productService';
import Admin from './auth/Admin';
const UpdateProducts = (props) => {
    const [prName, setName] = React.useState("");
    const [prCategory, setCategory] = React.useState("");
    const [prPrice, setPrice] = React.useState(0);
    const [prDetail, setDetail] = React.useState("");
    const [prImage, setImage] = React.useState("");
    const id = props.match.params.id;
    React.useEffect(() => {
      productService.getSingleProduct(id).then((data) => {
        setName(data.prName);
        setCategory(data.prCategory);
        setPrice(data.prPrice);
        setDetail(data.prDetail)
        setImage(data.prImage);
      });
    }, [])
    return ( 
      <Admin>
      <Grid container spacing={3}>
      <Grid item xs={12}>

        <h1 style={{fontSize:"4rem",paddingLeft:"34%"}}>Update Product</h1>
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
              .updateProduct(id, { prName,prCategory, prPrice, prDetail,prImage })
              .then((data) => {
                console.log(data);
                props.history.push("/product");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
    </Admin>
     );
}
 
export default UpdateProducts;