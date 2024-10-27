import { Outlet } from "react-router";
import "../css/sales.css";
import Side from "./sidebar";

function Sales() {
  return (
    <div className="sales">
      <div className="main-container">
        <Side></Side>

        <div className="content">
          <div className="section">
            <div className="bord">
              <div className="img">
                <img
                  src={require("../images/avatar-1.jpg")}
                  alt="User Avatar"
                />
                <div className="img-title">
                  <h4>Chris K</h4>
                  <p>Welcome!</p>
                  <button className="btn">Create Now +</button>
                  <div className="icon-slide">
                    <div className="file">
                      <i className="fa-regular fa-folder"></i>
                      <p>My files</p>
                    </div>
                    <div className="drive">
                      <i className="fa-brands fa-google-drive"></i>
                      <p>Google Drive</p>
                    </div>
                    <div className="drive">
                      <i className="fa-solid fa-share"></i>
                      <p>Share with Me</p>
                    </div>
                    <div className="drive">
                      <i className="fa-regular fa-clock"></i>
                      <p>Recent</p>
                    </div>
                    <div className="drive">
                      <i className="fa-regular fa-star"></i>
                      <p>Starred</p>
                    </div>
                    <div className="drive">
                      <i className="fa-solid fa-trash-can"></i>
                      <p>Deleted Files</p>
                    </div>
                  </div>{" "}
                  {/* End of icon-slide */}
                </div>{" "}
                {/* End of img-title */}
              </div>{" "}
              {/* End of img */}
            </div>{" "}
          </div>
          <div className="section">
            <div className="card-4 col-8">
              <h2>Quick Access</h2>
              <div className="items">
                <div className="card-r">
                  <div className="imgcard">
                    <img
                      className="img"
                      src={require("../images/digital-ocean.jpg")}
                      alt=""
                    />
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="texts">
                    <h3>Google Media</h3>
                    <p>38 Files</p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="card-r">
                  <div className="imgcard">
                    <img
                      className="img"
                      src={require("../images/google-cloud.jpg")}
                      alt=""
                    />
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="texts">
                    <h3>Google Drive</h3>
                    <p>42 Files</p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="card-r">
                  <div className="imgcard">
                    <img
                      className="img"
                      src={require("../images/dropbox.jpg")}
                      alt=""
                    />
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="texts">
                    <h3>Dropbox</h3>
                    <p>98 Files</p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="card-r">
                  <div className="imgcard">
                    <img
                      className="img"
                      src={require("../images/slack.jpg")}
                      alt=""
                    />
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="texts">
                    <h3>Cloud Storage</h3>
                    <p>56 Files</p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tabl">
                <h3 className="recent">Recent</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Uploaded By</th>
                      <th scope="col">Size</th>
                      <th scope="col">Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Dashboard-requirements.docx <br />
                        <small>12 Docx</small>
                      </td>
                      <td>
                        <img
                          className="img-table"
                          src={require("../images/avatar-1.jpg")}
                          alt=""
                        />{" "}
                        Mark
                      </td>
                      <td>128 MB</td>
                      <td>April 25, 2023</td>
                    </tr>
                    <tr>
                      <td>
                        ocen-dashboard.pdf <br />
                        <small>18 Pdf</small>
                      </td>
                      <td>
                        <img
                          className="img-table"
                          src={require("../images/avatar-2.jpg")}
                          alt=""
                        />{" "}
                        Jacob
                      </td>
                      <td>521 MB</td>
                      <td>April 28, 2023</td>
                    </tr>
                    <tr>
                      <td>
                        Dashboard tech requirements <br />
                        <small>12 File</small>
                      </td>
                      <td>
                        <img
                          className="img-table"
                          src={require("../images/avatar-3.jpg")}
                          alt=""
                        />{" "}
                        Larry the Bird
                      </td>
                      <td>7.2 MB</td>
                      <td>May 1, 2024</td>
                    </tr>
                    <tr>
                      <td>
                        dashboard.jpg <br />
                        <small>172 Jpg Photo</small>
                      </td>
                      <td>
                        <img
                          className="img-table"
                          src={require("../images/avatar-4 (1).jpg")}
                          alt=""
                        />{" "}
                        Henry
                      </td>
                      <td>54.2 MB</td>
                      <td>May 2, 2024</td>
                    </tr>
                    <tr>
                      <td>
                        admin-hospital.zip <br />
                        <small>admin-hospital.zip</small>
                      </td>
                      <td>
                        <img
                          className="img-table"
                          src={require("../images/avatar-5.jpg")}
                          alt=""
                        />{" "}
                        Maryam
                      </td>
                      <td>8.3 MB</td>
                      <td>May 6, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Sales;
