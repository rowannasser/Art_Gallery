import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const SignInSignUp = () => {
  const mainRef = useRef(null);

  const handleSignUp = () => {
    if (mainRef.current) {
      mainRef.current.classList.add("right-panel-active");
    }
  };

  const handleSignIn = () => {
    if (mainRef.current) {
      mainRef.current.classList.remove("right-panel-active");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle_SignIn = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if password is '123'
    if (password === "123456") {
      // Redirect to the dashboard
      navigate("/sales");
    } else {
      // Redirect to the welcome page
      navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="container" id="main" ref={mainRef}>
        {/* Sign Up Form */}
        <div className="sign-up">
          <form action="/#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="/#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p>or use your email for registration</p>
            <input type="text" name="txt" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="sign-in">
          <form action="/#" onSubmit={handle_SignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="/#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p>or use your account</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/#">Forget your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay Section */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us, please log in with your personal info
              </p>
              <button id="signIn" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button id="signUp" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
