import React from 'react'
import Styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={Styles.footerBanner}>
        <div className={Styles.firstFlex}>
            <img src='LOGO 2.svg' alt="logo2_image"/>
            <div className={Styles.badges}>
                <img src="app-store.svg" alt="app-store_image"/>
            </div>
            <p>Company / 490039-445, Registered with <p>House of companies.</p></p>
        </div>
        <div className={Styles.secondFlex}>
            <p>Get Exclusive Deals in your Inbox</p>
            <input
            className={Styles.input}
            type="email"
            placeholder="youremail@gmail.com"
            />
            <button className={Styles.button}>Subscribe</button>
            <p className={Styles.spam}>we wont spam, read our <a href="url">email policy</a></p>
            <div className={Styles.social}>
                <div><img src="Facebook.svg" alt="facebook" /></div>
                <div><img src="Instagram.svg" alt="instagram" /></div>
                <div><img src="Snapchat.svg" alt="snapchat" /></div>
                <div><img src="Tiktok.svg" alt="Tiktok" /></div>
            </div>
        </div>
        <div className={Styles.thirdFlex}>
            <h1>Legal Pages</h1>
            <ul>
            <li><a href="/">Terms and conditions</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Cookies</a></li>
            <li><a href="/">Modern Slavery Statement</a></li>
            </ul>
        </div>
        <div className={Styles.fourthFlex}>
            <h1>Important Links</h1>
            <ul>
            <li><a href="/">Get help</a></li>
            <li><a href="/">Add your restaurant</a></li>
            <li><a href="/">Sign up to deliver</a></li>
            <li><a href="/">Create a business account</a></li>
            </ul>
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.flexOne}>
          <h1>Order.uk Copyright 2024, All Rights Reserved.</h1>
        </div>
        <div className={Styles.flexTwo}>
          <h1>Privacy Policy </h1>         
          <h1>Terms</h1>          
          <h1>Pricing</h1>           
          <h1>Do not sell or share my personal information</h1>
        </div>
      </div>
    </>
  )
}
