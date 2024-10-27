import { Outlet } from "react-router";
import "../css/filemanager.css";
import Side from "./sidebar";

function File_Manager() {
  return (
    <div className="file-manager">
      <Side></Side>
      <div className="main-content">
        <div className="sales-container ">
          <header className="header">
            <div className="header-left">
              <h1>Dashboard</h1>
              <div className="filters">
                <input type="date" className="date-range" />
              </div>
            </div>
            <div className="header-right">
              <button className="help-line">Help Line: +123 456 78</button>
              <div className="tax-estimate">
                <p>Estimated tax for this year</p>
                <button className="activate-now">Activate Now</button>
              </div>
            </div>
          </header>

          <div className="stats-cards">
            <div className="card">
              <img
                src={require("../images/orders.png")}
                alt="Total Orders Icon"
                className="card-icon"
              />
              <h2>Total Orders</h2>
              <p className="value">687.3k</p>
              <p className="change">9.19% ↓ Since last month</p>
            </div>
            <div className="card">
              <img
                src={require("../images/boxes.png")}
                alt="Total Returns Icon"
                className="card-icon"
              />
              <h2>Total Returns</h2>
              <p className="value">9.62k</p>
              <p className="change">26.87% ↑ Since last month</p>
            </div>
            <div className="card">
              <img
                src={require("../images/earn.png")}
                alt="Sales Earnings Icon"
                className="card-icon"
              />
              <h2>Avg. Sales Earnings</h2>
              <p className="value">$98.24 USD</p>
              <p className="change">3.51% ↑ Since last month</p>
            </div>
            <div className="card">
              <img
                src={require("../images/views.png")}
                alt="Visits Icon"
                className="card-icon"
              />
              <h2>Number of Visits</h2>
              <p className="value">87.94M</p>
              <p className="change">1.05% ↓ Since last month</p>
            </div>
          </div>

          <div className="overview">
            <h2>Overview</h2>
            <div className="overview-content">
              <div className="revenue">
                <p>Revenue: $29.5k</p>
                <p>Expenses: $15.07k</p>
                <p>Investment: $3.6k</p>
                <p>Savings: $6.9k</p>
              </div>
              <div className="chart-placeholder">
                <img
                  src={require("../images/overview.jpg")}
                  alt="Overview Chart"
                  className="chart-img"
                />
              </div>
            </div>
          </div>

          <div className="traffic">
            <h2>Top Traffic by Source</h2>
            <div className="chart-placeholder">
              <img
                src={require("../images/traffic.jpg")}
                alt="Traffic Chart"
                className="chart-img"
              />
            </div>
            <div className="traffic-details">
              <div className="traffic-item">
                <img
                  src={require("../images/blue.png")}
                  alt="Direct"
                  className="traffic-circle"
                />{" "}
                Direct
                <span className="value">965</span>
              </div>
              <div className="traffic-item">
                <img
                  src={require("../images/purple.png")}
                  alt="Marketing"
                  className="traffic-circle"
                />{" "}
                Marketing
                <span className="value">102</span>
              </div>
              <div className="traffic-item">
                <img
                  src={require("../images/green.png")}
                  alt="Social"
                  className="traffic-circle"
                />{" "}
                Social
                <span className="value">75</span>
              </div>
              <div className="traffic-item">
                <img
                  src={require("../images/pink.png")}
                  alt="Affiliates"
                  className="traffic-circle"
                />{" "}
                Affiliates
                <span className="value">96</span>
              </div>
            </div>
          </div>

          <div className="recent-orders">
            <h2>Recent Orders</h2>
            <ul>
              <li>
                <img
                  src={require("../images/1.jpg")}
                  alt="The Ancient Drama"
                  className="order-img"
                />
                The Ancient Drama - $29.99 x 1 = $29.99{" "}
                <span className="sold">Sold</span>
              </li>
              <li>
                <img
                  src={require("../images/2.jpg")}
                  alt="Peaceful Ancient Village"
                  className="order-img"
                />
                Peaceful Ancient Village - $9.99 x 3 = $29.97{" "}
                <span className="sold">Sold</span>
              </li>
              <li>
                <img
                  src={require("../images/3.jpg")}
                  alt="Travel And Living"
                  className="order-img"
                />
                Travel And Living - $49.99 x 1 = $49.99{" "}
                <span className="return">Return</span>
              </li>
              <li>
                <img
                  src={require("../images/4.jpg")}
                  alt="The Architecture And City"
                  className="order-img"
                />
                The Architecture And City - $39.99 x 1 = $39.99{" "}
                <span className="sold">Sold</span>
              </li>
              <li>
                <img
                  src={require("../images/5.jpg")}
                  alt="Ancient Official Meeting"
                  className="order-img"
                />
                Ancient Official Meeting - $12.99 x 4 = $51.96{" "}
                <span className="return">Return</span>
              </li>
            </ul>
          </div>

          <div className="top-selling-products">
            <div className="sales-header">
              <h2>Top Selling Products</h2>
              <div className="actions">
                <button className="import-btn">Import</button>
                <button className="export-btn">Export</button>
              </div>
            </div>
            <table className="product-table">
              <thead>
                <tr>
                  <th>Product</th> <th>Price</th> <th>Quantity</th>{" "}
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={require("../images/5.jpg")}
                      className="product-image"
                      alt=""
                    />
                    <div className="product-details">
                      <span className="product-name">
                        Ancient Official Meeting
                      </span>
                      <span className="product-date">07 April 2024</span>
                    </div>
                  </td>
                  <td>$79.49</td> <td>82</td> <td>$6,518.18</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../images/3.jpg")}
                      className="product-image"
                      alt=""
                    />
                    <div className="product-details">
                      <span className="product-name">Travel And Living</span>
                      <span className="product-date">25 March 2024</span>
                    </div>
                  </td>
                  <td>$128.50</td>
                  <td>37</td>
                  <td>$4,754.50</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../images/6.jpg")}
                      className="product-image"
                      alt=""
                    />
                    <div className="product-details">
                      <span className="product-name">Nature And The Art</span>
                      <span className="product-date">17 March 2024</span>
                    </div>
                  </td>
                  <td>$39.99</td> <td>64</td> <td>$2,559.36</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../images/7.jpg")}
                      className="product-image"
                      alt=""
                    />
                    <div className="product-details">
                      <span className="product-name">The Village Treasure</span>
                      <span className="product-date">12 March 2024</span>
                    </div>
                  </td>{" "}
                  <td>$20.00</td> <td>184</td> <td>$3,680.00</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../images/2.jpg")}
                      className="product-image"
                      alt=""
                    />
                    <div className="product-details">
                      <span className="product-name">
                        Peaceful Ancient Village
                      </span>
                      <span className="product-date">05 March 2024</span>
                    </div>
                  </td>{" "}
                  <td>$28.49</td> <td>69</td> <td>$1,965.81</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <span>Showing 5 of 10 Results</span>
              <div className="page-buttons">
                <button className="page-btn">1</button>
                <button className="page-btn">2</button>
              </div>
            </div>
          </div>
          {/* <Outlet></Outlet> */}
        </div>
      </div>
    </div>
  );
}

export default File_Manager;
