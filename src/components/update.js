import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { updateproduct } from "../rdx/productscart";
import { useState } from "react";

function Update(props) {
  let dispatch = useDispatch();
  let [newquantity, setquantity] = useState(1);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="update"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="number"
          placeholder={props.product.quantity}
          onChange={(e) => setquantity(+e.target.value)}
        ></input>
        <button
          className="btn"
          onClick={() => {
            console.log(props.product);
            dispatch(
              updateproduct({ ...props.product, quantity: newquantity })
            );
          }}
        >
          Update
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Update;
