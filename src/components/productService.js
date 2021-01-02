import GenericService from "./genericService";
class ProductsService extends GenericService {
  constructor(props) {
    super();
  }
  addProduct = (data) => this.post("product", data);
  deleteProduct = (_id) => this.delete("product/" + _id);
  updateProduct = (_id, data) => this.put("product/" + _id, data);
 
  getProducts = (page = 1, perPage = 10) =>
  this.get("product?page=" + page + "&perPage=" + perPage);
  getSingleProduct = (id) => this.get("product/" + id);
}

let productService = new ProductsService();
export default productService;