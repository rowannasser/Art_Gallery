function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Join Our Newsletter</h3>
          <form className="newsletter-form">
            <label htmlFor="newsletter-email">
              <a href="/#">join</a>
            </label>
            <input
              name="newsletter-email"
              type="email"
              id="newsletter-email"
              placeholder="Enter Your Mail ID"
              required
            />
            <span>No spam, we hate it more than you do.</span>
          </form>
        </div>
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Email Us</a>
            </li>
            <li>
              <a href="/#">Chat Support</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Order Online</h3>
          <ul>
            <li>
              <a href="/#">Paintings</a>
            </li>
            <li>
              <a href="/#">Book Event</a>
            </li>
            <li>
              <a href="/#">Gift cards</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <address>
            No: 58 A, East Madison Street, <br />
            Baltimore, MD, USA 4508
          </address>
          <p>00123456789</p>
        </div>
        <div className="footer-section">
          <h3>Our Hours</h3>
          <p>
            8AM - 10PM <span>Mon - Fri</span>
          </p>
          <p>
            10AM - 8PM <span>Sat</span>
          </p>
          <p>
            <span>Holiday</span> Sunday
          </p>
        </div>
      </div>

      <div className="footer-social">
        <ul className="social-icons">
          <li>
            <a href="/#">
              <img src={require("../images/pinterest.png")} alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={require("../images/whatsapp.png")} alt="Dribbble" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={require("../images/x.png")} alt="X" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={require("../images/instagram.png")} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="/#">
              <img src={require("../images/facebook.png")} alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>Regalia Site all rights Reserved©</p>
      </div>
      <div className="back-to-top">
        <a href="#top">Top &#8593;</a>
      </div>
    </footer>
  );
}

export default Footer;
