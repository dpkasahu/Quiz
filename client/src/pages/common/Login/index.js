import { Form, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { motion } from "framer-motion";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await loginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="login-box"
      >
        <img
          src="https://source.unsplash.com/300x200/?technology,coding" 
          alt="Login Illustration"
          className="login-image"
        />
        <h1 className="login-title">
          QUIZ - LOGIN <i className="ri-login-circle-line"></i>
        </h1>
        <Form layout="vertical" className="login-form" onFinish={onFinish}>
          <Form.Item name="email" label="Email" className="login-input">
            <input type="text" className="input-field" />
          </Form.Item>
          <Form.Item name="password" label="Password" className="login-input">
            <input type="password" className="input-field" />
          </Form.Item>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="login-button"
          >
            Login
          </motion.button>

          <div className="register-link">
            <Link to="/register">Not a member? Register</Link>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}

export default Login;
