import Side from "./sidebar";
import Table from "react-bootstrap/Table";
import "../css/category.css";
import { useEffect } from "react";
// import { fetch_products_dashboard } from "../rdx/dashboard";
import { fetch_products } from "../rdx/allproducts";
import { useDispatch, useSelector } from "react-redux";

function Category() {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.allproducts);

  useEffect(() => {
    dispatch(fetch_products());
  }, []);

  return (
    <div className="category">
      <Side></Side>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={2}>Categories</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selector.map((ele) => {
            return (
              <tr key={ele.id}>
                <td> {ele.id} </td>
                <td> {ele.title} </td>
                <td> {ele.description} </td>
                <td>
                  <i class="fa-solid fa-eye"></i>{" "}
                  <i class="fa-solid fa-trash-can"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Category;
