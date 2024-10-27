import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deleteproduct } from "../rdx/productscart";
import "../css/cart.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Update from "./update";
import { Link } from "react-router-dom";

function Cart() {
  let selector = useSelector((state) => state.poroductscart);
  let dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  let [update, setupdate] = useState("");

  return (
    <div className="cart">
      <main className="row mt-5 ms-md-auto ms-xl-5">
        <div className="table-container col-xl-7">
          <Table striped bordered>
            <thead>
              <tr>
                <th></th>
                <th> Product </th>
                <th>Name</th>

                <th>Quantity</th>
                <th>Price</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {selector !== null
                ? selector.map((ele) => {
                    return (
                      <tr key={ele.id}>
                        <td
                          className="close"
                          onClick={() => dispatch(deleteproduct(ele))}
                        >
                          <i className="fa-solid fa-circle-xmark"></i>
                        </td>
                        <td>
                          <img src={ele.main_photo} alt="photo"></img>{" "}
                        </td>
                        <td> {ele.title} </td>
                        <td> {ele.quantity} </td>
                        <td className="price"> ${ele.price.toFixed(2)}</td>
                        <td>
                          <div
                            className="btn"
                            variant="primary"
                            onClick={() => {
                              setModalShow(true);
                              setupdate(ele);
                            }}
                          >
                            Update
                          </div>
                          <Update
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            product={update}
                          />
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </div>
        <div className="checkout col-xl-3 ms-xl-5">
          <p className="total">Total shopping cart</p>
          <Table>
            <thead>
              <tr>
                <th style={{ backgroundColor: "var(--bage)" }}> Product </th>
                <th style={{ backgroundColor: "var(--bage)" }}>SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {selector.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td style={{ backgroundColor: "var(--bage)" }}>
                      {" "}
                      {ele.title}{" "}
                    </td>
                    <td
                      className="price"
                      style={{
                        color: "var(--red)",
                        backgroundColor: "var(--bage)",
                      }}
                    >
                      {" "}
                      ${(ele.price * ele.quantity).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <p className="price">
            <span> Total Price </span> : $
            {selector
              .reduce((acc, ele) => {
                return acc + ele.price * ele.quantity;
              }, 0)
              .toFixed(2)}
          </p>
          <p className="shipping">
            <span>Shipping</span> : Free
          </p>
          <Link to="checkout" className="btn">Check Out</Link>
        </div>
      </main>
    </div>
  );
}

export default Cart;
