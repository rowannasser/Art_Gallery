import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../css/detailproducts.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "../rdx/productscart";
import Alert from "react-bootstrap/Alert";

function Details_Product(props) {
  let [image, changeimgae] = useState(props.product.main_photo);
  let dispatch = useDispatch();

  let [quantitystate, changequantity] = useState(props.product.quantity || 1);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="details-product row">
          <div className="image col-xl-6 col-md-10 col-sm-10">
            <div className="main-image">
              <img src={image} alt="IMAGE"></img>
            </div>
            <div className="image-option">
              <img
                src={props.product.main_photo}
                onClick={() => changeimgae(props.product.main_photo)}
              ></img>
              <img
                src={props.product.img_1}
                onClick={() => changeimgae(props.product.img_1)}
              ></img>
              <img
                src={props.product.img_2}
                onClick={() => changeimgae(props.product.img_2)}
              ></img>
            </div>
          </div>
          <div className="content col-xl-6 col-md-10 col-sm-10">
            <h4>{props.product.title} </h4>
            <h5> {props.product.category} </h5>
            <p className="category">{props.product.description}</p>
            <p className="price"> $ {props.product.price} </p>
            <input
              type="number"
              placeholder="1"
              className="quantity-input"
              onChange={(e) => changequantity(+e.target.value)}
            ></input>
            <div
              className="btn btn-cart"
              onClick={() => {
                console.log({ ...props.product, quantity: quantitystate });
                dispatch(
                  addproduct({ ...props.product, quantity: quantitystate })
                );
              }}
            >
              <i className="fa-solid fa-cart-shopping me-2"></i> Add To Cart
            </div>
            <img
              src={require("../images/shop-payment.png")}
              alt="brands"
              className="brands"
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details_Product;
