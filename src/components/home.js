import "../css/home.css";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import UIkit from "uikit";

// Import UIkit CSS
import "uikit/dist/css/uikit.min.css";
// Import UIkit JS
import "uikit/dist/js/uikit.min.js";

import img1 from "../images/q1.jpeg";
import img2 from "../images/q2.jpeg";
import img3 from "../images/q3.jpeg";
import img4 from "../images/q4.jpeg";
import img5 from "../images/q5.jpeg";
import img6 from "../images/q6.jpeg";

function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Initialize UIkit components
    UIkit.util.on(document, "DOMContentLoaded", () => {
      // This will ensure UIkit is initialized properly
    });
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect to run the interval when the component mounts
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the currentIndex
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change photo every 3 seconds

    // // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]); // Only run when the component mounts

  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What Are Your Gallery Opening Hours?",
      answer: "Our gallery is open from 9 AM to 6 PM, Monday to Friday.",
    },
    {
      question: "What Is Your Visiting Hours?",
      answer: "We welcome visitors from 10 AM to 7 PM on all working days.",
    },
    {
      question: "Is Your Business Open On Bank Holidays?",
      answer: "No, we are closed on public bank holidays.",
    },
    {
      question: "Who Is Responsible For Stolen Arts?",
      answer:
        "The gallery is not responsible for stolen items; please ensure your belongings are secure.",
    },
    {
      question: "Who Owns The Copyright Of My Art Work?",
      answer:
        "The artist retains full copyright of their work unless stated otherwise in a contract.",
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="home-page">
      <section id="#home" className="home">
        <div className="imgtext">
          <h3>Shaping your vision of ART</h3>
          <p>
            Commodo nulla facilisi nullam vehicula ipsum. Eget nunc lobortis
            mattis aliquam facibbus
            <br />
            Convallis tellus id interdum loarreet id donec ultrices. fusce ut
            placerate orci
          </p>
          <button>
            <a href="gallary">Vew all collection</a>
          </button>
        </div>

        {/* <!-- <button className="uk-button uk-button-primary">Vew all collection</button> --> */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-1.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-2.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-4.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-5.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-1.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-1.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-2.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-4.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-5.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-2.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-container">
              <img
                src={require("../images/slider-2-1.jpg.crdownload")}
                alt="slider"
                className="slider-image"
              />
              {/* <div className="overlay"></div> */}
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className="gemy uk-box-shadow-medium uk-padding"
          style={{ backgroundColor: "#fff6e4" }}
        >
          <ul data-uk-accordion="multiple: true" style={{ color: "grey" }}>
            <li className="uk-open">
              <a
                className="uk-accordion-title"
                style={{
                  color: "#2F6776",
                  marginBottom: "30px",
                  fontFamily: "cursive",
                  fontSize: "2em",
                }}
                href="/#"
              >
                Canvas Paintings
              </a>
              <div className="uk-accordion-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </li>
            <li>
              <a
                className="uk-accordion-title"
                style={{
                  color: "#2F6776",
                  marginBottom: "30px",
                  fontFamily: "cursive",
                  fontSize: "2em",
                }}
                href="/#"
              >
                Paper Paintings
              </a>
              <div className="uk-accordion-content">
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor reprehenderit.
                </p>
              </div>
            </li>
            <li>
              <a
                className="uk-accordion-title"
                style={{
                  color: "#2F6776",
                  fontFamily: "cursive",
                  fontSize: "2em",
                }}
                href="/#"
              >
                Oil Paintings
              </a>
              <div className="uk-accordion-content">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat proident.
                </p>
              </div>
            </li>
            <li>
              <a
                className="uk-accordion-title"
                style={{
                  color: "#2F6776",
                  marginBottom: "30px",
                  fontFamily: "cursive",
                  fontSize: "2em",
                }}
                href="/#"
              >
                Acrylic Paintings
              </a>
              <div className="uk-accordion-content">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat proident.
                </p>
              </div>
            </li>
            <div className="text">
              <p>
                Egestas congue quisque egestas diam. Eget magna fermentum
                iaculis eu non diam phasellus vestibulum. Sed blandit libero
                volutpat sed cras
              </p>
              <button className="btn">
                <a href="gallry">View all collection</a>
              </button>
            </div>
          </ul>

          <div
            className="uk-position-relative uk-light"
            style={{ width: "50%" }}
            data-uk-slideshow="true"
          >
            <div
              className="uk-slideshow-items"
              style={{ width: "50%", height: "90vh" }}
            >
              <div>
                <img
                  src={require("../images/Home-2-Catergory-01.jpg")}
                  alt=""
                  data-uk-cover
                />
              </div>
              <div>
                <img
                  src={require("../images/Home-2-Catergory-02.jpg")}
                  alt=""
                  data-uk-cover
                />
              </div>
              <div>
                <img
                  src={require("../images/Home-2-Catergory-03.jpg")}
                  alt=""
                  data-uk-cover
                />
              </div>
              <div>
                <img
                  src={require("../images/Home-2-Catergory-04.jpg")}
                  alt=""
                  data-uk-cover
                />
              </div>
            </div>
            <div className="uk-position-bottom-center uk-position-small">
              <ul className="uk-dotnav">
                <li data-uk-slideshow-item="0">
                  <a href="/#">Item 1</a>
                </li>
                <li data-uk-slideshow-item="1">
                  <a href="/#">Item 2</a>
                </li>
                <li data-uk-slideshow-item="2">
                  <a href="/#">Item 3</a>
                </li>
                <li data-uk-slideshow-item="3">
                  <a href="/#">Item 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="home">
          <section className="booking-section">
            <div className="home-container">
              <h1 className="booking-head">Book Your Event</h1>
              <p className="booking-p">
                Secure your spot by filling out the form below and be part of an
                inspiring experience.
              </p>
              <form className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      id="phone"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Date *</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Time *</label>
                    <input type="time" name="time" id="time" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="adults">Adults</label>
                    <input
                      name="adults"
                      type="number"
                      id="adults"
                      placeholder="Adults"
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="children">Child</label>
                    <input
                      name="children"
                      type="number"
                      id="children"
                      placeholder="Child"
                      min="0"
                    />
                  </div>
                </div>
                <button type="submit" className="book-btn">
                  Book Now
                </button>
              </form>
            </div>
          </section>

          <section className="faq-section">
            <div className="faq">
              <h2>Frequently Asked Questions</h2>

              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleItem(index)}
                >
                  <div className="question">
                    <span>{item.question}</span>
                    <span className="arrow">
                      {activeIndex === index ? (
                        <i className="fa-solid fa-sort-down"></i>
                      ) : (
                        <i className="fa-solid fa-sort-up"></i>
                      )}
                    </span>
                  </div>
                  <div
                    className="answer"
                    style={{
                      display: activeIndex === index ? "block" : "none",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>

            <div className="photo-section">
              <img
                id="photo"
                src={images[currentIndex]} // Use the imported image paths
                alt="Artist working"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </section>

          <div className="testimonial-section">
            <h2>Our Happy Art Lovers</h2>
            <p className="testimonial-description">
              Real stories from our artists, collectors, and gallery visitors
              about their experience with us
            </p>

            <div className="testimonial-grid">
              <div className="testimonial-item">
                <span className="testimonial-rating">★★★★★</span>
                <p className="booking-p">
                  The creativity and attention to detail in this digital art
                  platform are outstanding! I've discovered so many incredible
                  artists here, and the support from the community is amazing.
                </p>
                <div className="author-info">
                  <img
                    className="author-img"
                    src={require("../images/t1.jpeg")}
                    alt="Person 1"
                  />
                  <p className="booking-a">Manager - HENDRY</p>
                </div>
              </div>
              <div className="testimonial-item">
                <span className="testimonial-rating">★★★★★</span>
                <p className="booking-p">
                  As an artist myself, this platform has provided me with a
                  great space to showcase my work. It's easy to use, and I love
                  the feedback system that connects artists with potential
                  buyers.
                </p>
                <div className="author-info">
                  <img
                    className="author-img"
                    src={require("../images/t2.jpeg")}
                    alt="Person 2"
                  />
                  <p className="booking-a">Student - ANDRIA</p>
                </div>
              </div>
              <div className="testimonial-item">
                <span className="testimonial-rating">★★★★★</span>
                <p className="booking-p">
                  This is the best place to find unique and inspiring art
                  pieces. I've purchased several artworks, and the quality is
                  always top-notch. The customer service is very responsive too.
                </p>
                <div className="author-info">
                  <img
                    className="author-img"
                    src={require("../images/t3.jpeg")}
                    alt="Person 3"
                  />
                  <p className="booking-a">President - JACK</p>
                </div>
              </div>
              <div className="testimonial-item">
                <span className="testimonial-rating">★★★★★</span>
                <p className="booking-p">
                  I love the way this platform
                  <br /> celebrates emerging artists. It's a wonderful
                  opportunity
                  <br /> young talents to be seen and appreciated
                  <br />. I recommend it to all art !
                </p>
                <div className="author-info">
                  <img
                    className="author-img"
                    src={require("../images/t4.jpeg")}
                    alt="Person 4"
                  />
                  <p className="booking-a">Architect - HELLEN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- houda start --> */}

      <section id="Painting">
        <div className="container" style={{ backgroundColor: "#fff6e4" }}>
          <div className="text">
            <div className="title">
              <h1>Painting & Art Blog</h1>
              <p>
                Vulputate enim nulla aliquet porttitor. Gravida quis blandit
                turpis
                <br /> cursus in hac habitasse platea dictumst ...Libero justo
                laoreet sit amet cursus
              </p>
            </div>
          </div>
          <div className="Painting-items row">
            <div className="card col-xl-3 col-md-10" id="card-1">
              <div className="img">
                <img src={require("../images/Blog-01.jpg")} alt="painting" />
              </div>
              <div className="content">
                <h3>
                  Art Gallery & Museum:
                  <br />
                  Colors, Stories, And Inspiration
                </h3>
                <p>
                  Vulputate enim nulla aliquet porttitor. Gravida quis blandit
                  turpis cursus in hac habitasse platea dictumst. ...Libero
                  justo laoreet sit amet cursus
                </p>
                <button>
                  <a href="/#" className="btn">
                    Read More
                  </a>
                </button>
              </div>
            </div>
            <div className="card col-xl-3 col-md-10" id="card-2">
              <div className="img">
                <img src={require("../images/Blog-02.jpg")} alt="painting" />
              </div>
              <div className="content">
                <h3>
                  Oil And Canvas Painting:
                  <br />
                  Where Imagination Meets Reality
                </h3>
                <p>
                  Dolor sit amet consectetur adipiscing. Arcu bibendum at varius
                  vel. Porta non pulvinar neque laoreet ...suspendisse interdum
                  consectetur. Vel eros donec
                </p>
                <button>
                  <a href="/#" className="btn">
                    Read More
                  </a>
                </button>
              </div>
            </div>
            <div className="card col-xl-3 col-md-10" id="card-3">
              <div className="img">
                <img src={require("../images/Blog-03.jpg")} alt="painting" />
              </div>
              <div className="content">
                <h3>
                  Brush Mastery Unleashed: <br />
                  Insights From The Artist View
                </h3>
                <p>
                  Quam lacus suspendisse faucibus interdum posuere. Adipiscing
                  at in tellus integer feugiat. Purus viverra accumsan in nisi.
                  Non tellus orci ac
                </p>
                <button>
                  <a href="/#" className="btn">
                    Read More
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container" style={{ backgroundColor: "#2F6776" }}>
          <div className="text">
            <h2>BAGALIA</h2>
          </div>
          <div className="gallery-items">
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-01.jpg")}
                alt="img1"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-02.jpg")}
                alt="img2"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-03.jpg")}
                alt="img3"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-04.jpg")}
                alt="img4"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-05.jpg")}
                alt="img5"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-06.jpg")}
                alt="img6"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-07.jpg")}
                alt="img7"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-08.jpg")}
                alt="img8"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-09.jpg")}
                alt="img9"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="img">
              <img
                src={require("../images/Home-2-Gallery-10.jpg")}
                alt="img10"
              />
              <div className="lr">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // <!------ Rowan ------> */}
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
    </div>
  );
}

export default Home;
