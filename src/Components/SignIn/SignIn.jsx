import React, { useContext } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from './SignIn.module.css';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:5000/auth/signin', values);
        console.log("The token received is : ", response.data.token);
        
        // Save the token to localStorage
        localStorage.setItem('token', response.data.token);
        console.log("Token saved to localStorage");

        toast.success(response.data.message);
        formik.resetForm();
        navigate('/home');
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      }
    },
  });

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className={Styles.mainBanner}>
        <div className={Styles.bannerOne}>
          <div><img src="LOGO 1.svg" alt="logo_image" /></div>
          <div className={Styles.secImg}><img src="Hand.png" alt="hand_image" /></div>
          <p>Today is a new day. It's your day. You shape it. 
            <h1>Sign in to start ordering.</h1>
          </p>
          
          <form onSubmit={formik.handleSubmit}>
            <div className={Styles.inputContainer}>
              <label htmlFor="email" className={Styles.inputLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Example@email.com"
                className={Styles.emailInput}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className={Styles.inputContainer}>
              <label htmlFor="password" className={Styles.inputLabel}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="At least 8 characters"
                className={Styles.passwordInput}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div className={Styles.forgotPassword}>
              <h1>Forgot Password?</h1>
            </div>

            <button type="submit">Sign In</button>
          </form>

          <div className={Styles.signup}>
            <h1>Don't you have an account? <a href="/signup">Sign up</a></h1>
          </div>
        </div>

        <div className={Styles.bannerTwo}>
          <img src="Art.svg" alt="art_image" />
        </div>
      </div>
    </div>
  );
}
