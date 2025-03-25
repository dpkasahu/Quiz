import { Form, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { motion } from "framer-motion";
import "./Register.css";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);
      dispatch(HideLoading());

      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="register-container">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="register-box"
      >
        <h1 className="register-title">
          QUIZ - REGISTER <i className="ri-user-add-line"></i>
        </h1>
        <Form layout="vertical" className="register-form" onFinish={onFinish}>
          <Form.Item name="name" label="Name" className="register-input">
            <input type="text" className="input-field" />
          </Form.Item>
          <Form.Item name="email" label="Email" className="register-input">
            <input type="text" className="input-field" />
          </Form.Item>
          <Form.Item name="password" label="Password" className="register-input">
            <input type="password" className="input-field" />
          </Form.Item>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="register-button"
          >
            Register
          </motion.button>

          <div className="login-link">
            <Link to="/login">Already a member? Login</Link>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}

export default Register;
