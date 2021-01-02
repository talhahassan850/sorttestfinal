import React from "react";
import "../index.css"
const pro = (props) => {
    var pri=props.price<1200?"green":"orange";
   //<h1>{title (inside return)}</h1>
    return ( 
        <div>
            <h1 class="a3">{props.title}</h1>
            <p className={pri}>{props.price}</p>
            <h3>{props.count}</h3>
        <p className="green">This is another component</p>
        <button onClick={()=>
        {
            props.addToCart(props.title);
        }
        }>Add to cart</button>
        <hr />
        </div>
     );
}
 
export default pro;
 