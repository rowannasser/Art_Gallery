import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import "../css/about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Video from "../contact-section.mp4";

function About() {
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const feedbackRef = useRef([]);

  // Handle showing feedback based on index
  useEffect(() => {
    const feedbacks = feedbackRef.current;
    feedbacks.forEach((feedback, i) => {
      if (i === currentFeedback) {
        feedback.classList.add("active");
      } else {
        feedback.classList.remove("active");
      }
    });
  }, [currentFeedback]);

  // Function to show the previous feedback
  const prevFeedback = () => {
    setCurrentFeedback((prev) =>
      prev === 0 ? feedbackRef.current.length - 1 : prev - 1
    );
  };

  // Function to show the next feedback
  const nextFeedback = () => {
    setCurrentFeedback((prev) =>
      prev === feedbackRef.current.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="about">
      <section className="about-section">
        <div className="banner">
          <div className="overlay-text">
            <h1>ABOUT</h1>
            <p>Home / About</p>
          </div>
        </div>

        <div className="main-content">
          <h2>
            Best Time To Explore Our Art Collections 🎨 At Our Online Gallery 🖼️
            The Place Where You Can Buy Affordable Art & Paintings 🖌️ Of Famous
            Artist
          </h2>

          <div className="about-features">
            <div className="about-feature">
              <img
                src={require("../icons/virtual-store.png")}
                alt="3D Virtual Store"
              />
              <p>3D Virtual Store</p>
            </div>
            <div className="about-feature">
              <img
                src={require("../icons/premium-arts.png")}
                alt="Premium Arts"
              />
              <p>Premium Arts</p>
            </div>
            <div className="about-feature">
              <img
                src={require("../icons/art-collection.png")}
                alt="Art Collections"
              />
              <p>Art Collections</p>
            </div>
            <div className="about-feature">
              <img
                src={require("../icons/discover.png")}
                alt="Discover Artist"
              />
              <p>Discover Artist</p>
            </div>
            <div className="about-feature">
              <img src={require("../icons/quote.png")} alt="Get Free Quote" />
              <p>Get Free Quote</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-card">
          <img src={require("../icons/returns-icon.png")} alt="Free Returns" />
          <h3>Get Assured 30 Days Free Returns</h3>
          <p>
            Tellus molestie nunc non blandit massa enim nec. Sed id semper risus
            in.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="feature-card">
          <img src={require("../icons/globe.png")} alt="Global Delivery" />
          <h3>Explore Our Global Delivery Locations</h3>
          <p>
            Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Orci
            sagittis.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="feature-card">
          <img
            src={require("../icons/delivery-icon.png")}
            alt="Global Shipping"
          />
          <h3>We Ship Globally To 250+ Destinations</h3>
          <p>
            Hac habitasse platea dictumst quisque sagittis purus sit amet
            volutpat.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="feature-card">
          <img src={require("../icons/email.png")} alt="Sign Up" />
          <h3>Sign Up For Emails & Get An Extra 15% Off</h3>
          <p>
            Ultrices dui sapien eget mi. Mattis aliquam faucibus purus in massa.
          </p>
          <a href="#">Learn More</a>
        </div>
      </section>

      <section className="carousel">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper3"
        >
          {[
            {
              img: require("../images/1.jpg"),
              title: "The Ancient Drama",
              artist: "Eget lobortis",
              artistImg: require("../images/a1.jpg"),
            },
            {
              img: require("../images/2.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            {
              img: require("../images/3.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            {
              img: require("../images/4.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            {
              img: require("../images/5.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            {
              img: require("../images/6.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            {
              img: require("../images/7.jpg"),
              title: "Peaceful Ancient Village",
              artist: "Massa tincidunt",
              artistImg: require("../images/a2.jpg"),
            },
            // Add more cards as needed...
          ].map((card, index) => (
            <SwiperSlide key={index}>
              <div className="about-card">
                <div className="image">
                  <img src={card.img} alt={card.title} />
                </div>
                <div className="about-card-details">
                  <h3>{card.title}</h3>
                  <p>Artist: {card.artist}</p>
                  <div className="artist-profile">
                    <img src={card.artistImg} alt="Artist Image" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="hero">
        <video autoPlay muted loop className="video-background">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="blur">
          <div className="about-content">
            <h1>Uniquely Vibrant Delight For The Eyes</h1>
            <p>
              Rhoncus est pellentesque elit ullamcorper dignissim. Vulputate mi
              sit amet mauris commodo. In aliquam sem fringilla ut morbi
              tincidunt. Ac tincidunt vitae semper quis lectus nulla at
              volutpat.
            </p>

            {/* <!-- Statistics Section --> */}
            <div className="stats">
              <div className="stat-item">
                <h2>40</h2>
                <p>Exhibition</p>
              </div>
              <div className="stat-item">
                <h2>120</h2>
                <p>Gallery</p>
              </div>
              <div className="stat-item">
                <h2>+L1</h2>
                <p>Art</p>
              </div>
              <div className="stat-item">
                <h2>K5</h2>
                <p>Artist</p>
              </div>
            </div>

            <a href="#" className="about-button">
              Know More
            </a>
          </div>
        </div>
      </section>

      {/* <section className="feed">
        <div className="slider-container">
          <div className="arrow left-arrow" onClick={() => prevFeedback()}>
            &#8592;
          </div>

          <div className="feedback-content">
            <div className="feedback" id="feedback-1">
              <h2 className="Feedback-h">Know Our Customer Feedback</h2>
              <div className="user-info">
                <img
                  src={require("../images/u1.jpeg")}
                  alt="User 1"
                  className="user-photo"
                />
                <p className="user-name">James Anderson</p>
                <p className="user-role">Manager</p>
              </div>
              <p className="feedback-text">
                "The quality of service and products is exceptional. I am so
                pleased with the attention to detail, and I always look forward
                to trying new items!"
              </p>
              <p className="Feedback-rating">★★★★★</p>
              <div className="Feedback-product">
                <p>Watercolor Dreams Set</p>
                <p>
                  <strike>$59.99</strike> <strong>$49.99</strong>
                </p>
              </div>
            </div>

            <div className="feedback" id="feedback-2">
              <h2 className="Feedback-h">Know Our Customer Feedback</h2>
              <div className="user-info">
                <img
                  src={require("../images/u2.jpeg")}
                  alt="User 2"
                  className="user-photo"
                />
                <p className="user-name">John Doe</p>
                <p className="user-role">Software Developer</p>
              </div>
              <p className="feedback-text">
                "I’ve been using these products for a few months now, and I can
                confidently say that they’ve exceeded my expectations. Highly
                recommend it!"
              </p>
              <p className="Feedback-rating">★★★★☆</p>
              <div className="Feedback-product">
                <p>Pro Artist Sketching Kit</p>
                <p>
                  <strike>$69.99</strike> <strong>$59.99</strong>
                </p>
              </div>
            </div>

            <div className="feedback" id="feedback-3">
              <h2 className="Feedback-h">Know Our Customer Feedback</h2>
              <div className="user-info">
                <img
                  src={require("../images/u3.jpeg")}
                  alt="User 3"
                  className="user-photo"
                />
                <p className="user-name">Sophia Lee</p>
                <p className="user-role"> Photographer</p>
              </div>
              <p className="feedback-text">
                "I was impressed with how user-friendly and professional the
                products were. Perfect for both beginners and experienced users
                alike. Great value for money!"
              </p>
              <p className="Feedback-rating">★★★★☆</p>
              <div className="Feedback-product">
                <p>Professional Photography Toolkit</p>
                <p>
                  <strike>$120.00</strike> <strong>$99.00</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="arrow right-arrow" onClick={() => nextFeedback()}>
            &#8594;
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
