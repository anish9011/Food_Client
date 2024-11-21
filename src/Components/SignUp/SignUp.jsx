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
          <div className={Styles.inputContainer}>
            <label htmlFor="name" className={Styles.inputLabel}>Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="eg. John A" 
              className={Styles.nameInput} 
            />
          </div>
          <div className={Styles.inputContainer}>
          <label for="phone" className={Styles.inputLabel}>Phone Number</label>
          <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Enter your 10 digit mobile number" 
          class={Styles.phoneInput} 
          />
          </div>
          <div className={Styles.inputContainer}>
          <label for="email" className={Styles.inputLabel}>Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Example@email.com" 
          class={Styles.emailInput} 
          />
          </div>
          <div className={Styles.inputContainer}>
          <label for="password" className={Styles.inputLabel}>Email</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="At least 8 characters" 
          class={Styles.passwordInput} 
          />
          </div>
          <button>Continue</button>
          <div className={Styles.signin}>
          <h1>Already have an account? <a>Sign in</a></h1>
          </div>
        </div>
        <div className={Styles.bannerTwo}>
        <img src="Art.svg" alt="art_image"/>
        </div>
      </div>
    </div>
  )
}
