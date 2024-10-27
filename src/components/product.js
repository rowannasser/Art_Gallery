import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Details_Product from "./productdetail";
import { Link } from "react-router-dom";

function Product_Component(props) {
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="product-content">
      <div className="image">
        <div className="icons">
          {" "}
          <i className="fa-solid fa-cart-shopping"></i>{" "}
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-eye" onClick={() => setModalShow(true)}></i>
          <Details_Product
            product={props.product}
            show={modalShow}
            onHide={() => setModalShow(false)}
          ></Details_Product>
        </div>
        <img src={props.product.main_photo} alt="Photo-product"></img>
      </div>
      <div className="info">
        <p className="category">{props.product.category}</p>
        <p className="title"> {props.product.title} </p>
        <p className="price"> ${props.product.price} </p>
      </div>
    </div>
  );
}

export default Product_Component;
