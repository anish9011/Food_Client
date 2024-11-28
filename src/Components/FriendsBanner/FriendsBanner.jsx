import React from 'react'
import Styles from './FriendsBanner.module.css'
export default function FriendsBanner() {
  return (
    <>
    <div className={Styles.container}>
        <div className={Styles.leftContainer}>
            <img src="friends.svg" alt="friends_image"/>
        </div>
        <div className={Styles.rightContainer}>
            <div className={Styles.logo}>
            <img src="LOGO 1.svg" alt="logo"/>
            <h1>ing is more </h1></div>
            <div className={Styles.text}>
                <h1>Personalised </h1><span>&nbsp;& Instant</span>
            </div>
            <div className={Styles.content}>
              <h1>Download the Order.uk app for faster ordering</h1>
            </div>
            <div className={Styles.imageContent}>
              <img src="app-store.svg" alt="appstore"/>
            </div>
        </div>
    </div>
    <div class={Styles.imageFlex}>
      <img src="man1.svg" alt="man1"/>
      <img src="man2.svg" alt="man2"/>
    </div>
    </>
  )
}
