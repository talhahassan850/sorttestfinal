import GenericService from "./genericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor(props) {
    super();
  }
  login = (email, password) =>
  new Promise((resolve, reject) => {
    this.post("users/login", { email, password })
      .then((token) => {
        localStorage.setItem("token", token);
        resolve(token);
      })
      .catch((err) => {
        reject(err);
      });
  });
  register = (name, email, password) =>
    this.post("users/register", { password, email, name });
  logout = () => {
    localStorage.removeItem("token");
  };
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
  //if (this.getLoggedInUser().role == "admin") return true;
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().name === "admin") return true;
      else return false;
    } else return false;
  };
  isUser = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().name === "user") return true;
      else return false;
    } else return false;
  };

}

let userService = new UserService();
export default userService