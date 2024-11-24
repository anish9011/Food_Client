import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(10, 'Password must be exactly 10 characters long') // Password length must be 10
        .required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log(values);
      try {
        const response = await axios.post('http://localhost:5000/auth/signup', values);
        toast.success(response.data.message); // Display success toast
        resetForm(); // Reset the form after successful submission
        navigate('/');
      } catch (err) {
        if (err.response) {
          toast.error(err.response.data.message); // Display error toast from backend
        } else {
          toast.error('Something went wrong. Please try again.'); // Display generic error toast
        }
      } finally {
        setSubmitting(false); // Set submitting to false when done
      }
    },
  });

  // Display validation errors using Toast notifications after submission or when a field is touched
  React.useEffect(() => {
    if (formik.touched.name && formik.errors.name) {
      toast.error(formik.errors.name);
    }
    if (formik.touched.phoneNumber && formik.errors.phoneNumber) {
      toast.error(formik.errors.phoneNumber);
    }
    if (formik.touched.email && formik.errors.email) {
      toast.error(formik.errors.email);
    }
    if (formik.touched.password && formik.errors.password) {
      toast.error(formik.errors.password);
    }
  }, [formik.touched, formik.errors]);


  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className={Styles.mainBanner}>
        <div className={Styles.bannerOne}>
          <div><img src="LOGO 1.svg" alt="logo_image" /></div>
          <div className={Styles.secImg}><img src="Hand.png" alt="hand_image" /></div>
          <p>Today is a new day. It's your day. You shape it. 
          <h1>Sign in to start ordering.</h1></p>

          {/* Form Handling with Formik */}
          <form onSubmit={formik.handleSubmit}>
            <div className={Styles.inputContainer}>
              <label htmlFor="name" className={Styles.inputLabel}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="eg. John A" 
                className={Styles.nameInput} 
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Only trigger the error after blur
              />
            </div>

            <div className={Styles.inputContainer}>
              <label htmlFor="phoneNumber" className={Styles.inputLabel}>Phone Number</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                placeholder="Enter your 10 digit mobile number" 
                className={Styles.phoneInput}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Only trigger the error after blur
              />
            </div>

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
                onBlur={formik.handleBlur} // Only trigger the error after blur
              />
            </div>

            <div className={Styles.inputContainer}>
              <label htmlFor="password" className={Styles.inputLabel}>Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Exactly 10 characters" 
                className={Styles.passwordInput}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Only trigger the error after blur
              />
            </div>

            <button type="submit" disabled={formik.isSubmitting}>Continue</button>
          </form>

          <div className={Styles.signin}>
            <h1>Already have an account? <a href="/">Sign in</a></h1>
          </div>
        </div>

        <div className={Styles.bannerTwo}>
          <img src="Art.svg" alt="art_image" />
        </div>
      </div>
    </div>
  );
}
