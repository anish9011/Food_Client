import React from 'react'
import Styles from './SignUp.module.css'
export default function SignUp() {
  return (
    <div>
      <div className={Styles.mainBanner}>
        <div className={Styles.bannerOne}>
          <div><img src="LOGO 1.svg" alt="logo_image"/></div>
          <div className={Styles.secImg}><img src="Hand.png" alt="hand_image"/></div>
          <p>Today is a new day. It's your day. You shape it. 
          <h1>Sign in to start ordering.</h1></p>
          <div className={Styles.emailContainer}>
          <label for="email" className={Styles.emailLabel}>Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Example@email.com" 
          class={Styles.emailInput} 
          />
          </div>
          <div className={Styles.passwordContainer}>
          <label for="password" className={Styles.passwordLabel}>Email</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="At least 8 characters" 
          class={Styles.passwordInput} 
          />
          </div>
          <div className={Styles.forgotPassword}>
          <h1>Forgot Password?</h1>
          </div>
          <button>Sign In</button>
        </div>
        <div className={Styles.bannerTwo}>
        <img src="Art.svg" alt="art_image"/>
        </div>
      </div>
    </div>
  )
}
