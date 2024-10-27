import { Link } from "react-router-dom";

function Side() {
  return (
    <div className="side">
      <ul id="menu">
        <li>
          <Link to="/sales" href="#sale">
            Sale
          </Link>
        </li>
        <li>
          <Link to="sales" href="#product">
            Product
          </Link>
        </li>
        <li>
          <Link to="/sales/addproduct" href="#add-product">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/sales/filemanager" href="#file-manager">
            File Manager
          </Link>
        </li>
        <li>
          <Link to="/sales/category" href="#category">
            Category
          </Link>
        </li>
        <li>
          <a href="#customers">Customers</a>
        </li>
      </ul>
    </div>
  );
}

export default Side;
