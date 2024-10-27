import { Outlet } from "react-router";
import "../css/add-product.css";
import Side from "./sidebar";

function Add_Product() {
  return (
    <div className="add-product">
      <Side></Side>
      <div className="form-container">
        <h2>Add Products</h2>
        <p className="form-info">
          Product information encompasses all data within an organization
          pertaining to the product it manufactures, procures, sells, or
          distributes.
        </p>

        <form action="/submit-product" method="POST">
          <div className="form-row">
            {/* <!-- Product Name --> */}
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                placeholder="Enter product name"
                required
              />
            </div>

            {/* <!-- SKU ID --> */}
            <div className="form-group">
              <label htmlFor="sku">SKU ID</label>
              <input
                type="text"
                id="sku"
                name="sku"
                placeholder="#SKU ID"
                required
              />
            </div>
          </div>

          {/* <!-- Product Description --> */}
          <div className="form-group">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              id="productDescription"
              name="productDescription"
              placeholder="Short description about the product"
              required
            ></textarea>
          </div>

          <div className="form-row">
            {/* <!-- Product Code --> */}
            <div className="form-group">
              <label htmlFor="productCode">Product Code</label>
              <input
                type="text"
                id="productCode"
                name="productCode"
                placeholder="Enter product code"
                required
              />
            </div>

            {/* <!-- Product Category --> */}
            <div className="form-group">
              <label htmlFor="productCategory">Product Category</label>
              <select id="productCategory" name="productCategory" required>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            {/* <!-- Product Type --> */}
            <div className="form-group">
              <label htmlFor="productType">Product Type</label>
              <select id="productType" name="productType" required>
                <option value="">Select Type</option>
              </select>
            </div>

            {/* <!-- Product Brand --> */}
            <div className="form-group">
              <label htmlFor="productBrand">Product Brand</label>
              <select id="productBrand" name="productBrand" required>
                <option value="">Select Brand</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            {/* <!-- Status --> */}
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" required>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            {/* <!-- Visibility --> */}
            <div className="form-group">
              <label htmlFor="visibility">Visibility</label>
              <select id="visibility" name="visibility" required>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            {/* <!-- Publish Date & Time --> */}
            <div className="form-group">
              <label htmlFor="publishDate">Publish Date & Time</label>
              <input
                type="datetime-local"
                id="publishDate"
                name="publishDate"
                required
              />
            </div>

            {/* <!-- Price --> */}
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter product price"
                required
              />
            </div>
          </div>

          <div className="form-row">
            {/* <!-- Discounts -->  */}
            <div className="form-group">
              <label htmlFor="discount">Discount (%)</label>
              <input
                type="number"
                id="discount"
                name="discount"
                placeholder="Enter discount percentage"
              />
            </div>

            {/* <!-- Tax --> */}
            <div className="form-group">
              <label htmlFor="tax">Tax (%)</label>
              <select id="tax" name="tax" required>
                <option value="">Select Tax</option>
              </select>
            </div>
          </div>

          {/* <!-- Product Size --> */}
          <div className="form-row">
            <div className="form-group">
              <label>Length</label>
              <input
                type="number"
                id="length"
                name="length"
                placeholder="0.00 cm"
                required
              />
            </div>
            <div className="form-group">
              <label>Breadth</label>
              <input
                type="number"
                id="breadth"
                name="breadth"
                placeholder="0.00 cm"
                required
              />
            </div>
            <div className="form-group">
              <label>Width</label>
              <input
                type="number"
                id="width"
                name="width"
                placeholder="0.00 cm"
                required
              />
            </div>
          </div>

          {/* <!-- Colors --> */}
          <div className="form-group" id="color">
            <label id="colors">Colors</label>
            <div className="color-options">
              <span
                className="color-circle"
                style={{ backgroundColor: "green" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "yellow" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "blue" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "red" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "black" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "orange" }}
              ></span>
              <span
                className="color-circle"
                style={{ backgroundColor: "purple" }}
              ></span>
            </div>
          </div>

          {/* <!-- Submit Button --> */}
          <div className="form-group">
            <button type="submit" className="submit-btn">
              Add Product
            </button>
          </div>
        </form>
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
}

export default Add_Product;
