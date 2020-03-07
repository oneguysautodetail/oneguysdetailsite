import React from "react"

import "./footer.styles.scss"

const Footer = () => (
  
  <div className="footer-container" id="footer">
    <div className="gradient-fade-down"></div>
      <div className="content-box">
        <h1 className="footer-title">Contact</h1>
        <h3>Address:</h3>
        <a
          href="https://www.google.com/maps/dir//5016+208th+St+SW,+Lynnwood,+WA+98036/@47.8098618,-122.3036468,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54900551dbd45ceb:0xf54b2f702ad1ddca!2m2!1d-122.3014581!2d47.8098618!3e0"
          target="_blank"
        >
          <h4>5016 208th St. SW Lynnwood, WA 98036</h4>
        </a>
        <h3>Phone:</h3>
        <a href="tel:206-591-4707">
          <h4>Shop : 206-591-4707</h4>
        </a>
        <a href="tel:206-422-9317">
          <h4>Cell : 206-422-9317</h4>
        </a>
      </div>
    </div>
)

export default Footer
