import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_products } from "../rdx/allproducts";
import Product_Component from "./product";
import "../css/product.css";
import { Link, useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Products() {
  let dispatch = useDispatch();
  let selector = useSelector((state) => state.allproducts);
  const { category } = useParams(); // Get category from URL

  useEffect(() => {
    if (selector.length === 0) {
      dispatch(fetch_products());
    }
  }, [dispatch, selector]);

  // Filter products based on category
  const filteredProducts = category
    ? selector.filter((product) => product.category === category)
    : selector;

  function change_image_over(e, ele) {
    e.currentTarget.querySelector(".image img").src = ele.img_1;
  }

  function change_image_out(e, ele) {
    e.currentTarget.querySelector(".image img").src = ele.main_photo;
  }

  return (
    <div className="product-container">
      <div className="btns-filter mt-5">
        <Link to="/products" className="btn">
          All
        </Link>
        <Link to="/products/Oil Paint Art" className="btn">
          Oil Paint Art
        </Link>
        <Link to="/products/Glass Painting" className="btn">
          Glass Painting
        </Link>
        <Link to="/products/Painterly" className="btn">
          Painterly
        </Link>
        <Link to="/products/Photorealism" className="btn">
          Photorealism
        </Link>
      </div>
      <div className="container row">
        {filteredProducts.map((ele) => {
          return (
            <div
              className="product col-xl-3 col-md-5 col-sm-10"
              key={ele.id}
              onMouseOver={(e) => change_image_over(e, ele)}
              onMouseOut={(e) => change_image_out(e, ele)}
            >
              <Product_Component product={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
