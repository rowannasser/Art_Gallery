import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/contact.css";

function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for error message
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.trim(),
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = formData;

    // Check for empty required fields
    if (!firstName || !lastName || !email || !phone) {
      setErrorMessage(
        "One or more fields have an error. Please check and try again."
      );
      return; // Prevent form submission
    }

    // If valid, proceed and clear the error message
    setErrorMessage("");
    console.log("Form submitted:", formData);
    // Here you would send formData to your server or API
  };

  return (
    <div className="contact">
      <div className="banner">
        <div className="overlay-text">
          <h1>CONTACT</h1>
          <p>Home / Contact</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-description">
            We value your inquiries and are here to assist. Whether you need
            help with our services or have a question, feel free to get in touch
            using the options below.
          </p>
          <div className="contact-services">
            <div className="service-item">
              <img
                src={require("../icons/email-icon.png")}
                alt="Email Support"
              />
              <h3>Email Support</h3>
              <p>
                Reach out to us via email. We’ll respond to your inquiries as
                quickly as possible.
              </p>
            </div>
            <div className="service-item">
              <img src={require("../icons/chat-icon.png")} alt="Chat Support" />
              <h3>Chat Support</h3>
              <p>
                Connect with our team through live chat for immediate
                assistance.
              </p>
            </div>
            <div className="service-item">
              <img
                src={require("../icons/delivery-icon.png")}
                alt="Fast Delivery"
              />
              <h3>Fast Delivery</h3>
              <p>
                Enjoy fast and reliable delivery services directly to your
                doorstep.
              </p>
            </div>
            <div className="service-item">
              <img
                src={require("../icons/shipping-icon.png")}
                alt="International Shipping"
              />
              <h3>International Shipping</h3>
              <p>
                We offer shipping services to a variety of international
                locations.
              </p>
            </div>
            <div className="service-item">
              <img
                src={require("../icons/returns-icon.png")}
                alt="Easy Returns"
              />
              <h3>Easy Returns</h3>
              <p>
                Hassle-free returns for any items that don’t meet your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-support-section">
        <div className="support-container">
          {/* Left Column: Contact Support Form */}
          <div className="contact-form">
            <h1>Contact Support</h1>
            <p>
              Please fill out the form below and our support team will get back
              to you as soon as possible.
            </p>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter Your First Name*"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Your Last Name*"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Here*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <textarea
                id="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
              ></textarea>
              <div className="service-options">
                <p>Select Any Of The Services Below</p>
                <div className="checkbox-group">
                  <label>
                    <input type="checkbox" /> Canvas
                  </label>
                  <label>
                    <input type="checkbox" /> Oil Painting
                  </label>
                  <label>
                    <input type="checkbox" /> Acrylic
                  </label>
                  <label>
                    <input type="checkbox" /> Paper Art
                  </label>
                  <label>
                    <input type="checkbox" /> Other
                  </label>
                </div>
              </div>
              <button type="submit">Submit Query</button>
            </form>
            {errorMessage && (
              <div className="error-message" style={{ color: "red" }}>
                <p>{errorMessage}</p>
              </div>
            )}
          </div>

          {/* Right Column: Contact Info */}
          <div className="contact-info">
            <h1>Reach Us</h1>
            <p>
              Feel free to get in touch with us using the information below.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>456789 123-000</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Locate Us</h3>
                  <p>No: 58 A, East Madison Street</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <h3>Website</h3>
                  <p>www.example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Mail Us At</h3>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
            <video loop autoPlay muted className="contact-video">
              <source
                src={require("../contact-section.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d427.0103293714366!2d30.957493953268813!3d31.10743521414149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1729634618545!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="subscribe">
        <div className="info row">
          <div className="input col-xl-3 col-md-10">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Subscribe
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div className="content col-xl-4 col-md-10">
            <h1>Subscribe Today</h1>
            <p>
              Lobortis mattis aliquam faucibus purus. Pellentesque habitant
              morbi tristique habitant morbi senectus
            </p>
          </div>
          <div className="image col-xl-3 col-md-10">
            <img
              src={require("../images/contact-newsletter-img01.png")}
              alt="images/contact"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
