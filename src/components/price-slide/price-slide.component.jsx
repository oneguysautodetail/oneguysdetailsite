import React from "react"
import ScrollReveal from "../scroll-reveal/scroll-reveal.component"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./price-slide.styles.scss"

const PriceSlide = ({ title, price, description, idx, borderColor }) => (
  <ScrollReveal index={idx} triggerOnce="true" threshold={.25}>
    <div className="pricing-slide" key={idx}>
      <h1 className="service-title" style={{borderBottom: `8px solid ${borderColor}`}}>{title}</h1>
      <p className="service-description">{description}</p>
      <div className="price-container">
        <div className="car-price">
          <FontAwesomeIcon icon="car-side" />
          <p>Cars</p>
          <p>${price.car}</p>
        </div>
        <div className="truck-price">
          <FontAwesomeIcon icon="truck-pickup" />
          <p>Trucks</p>
          <p>${price.truck}</p>
        </div>
        <div className="van-price">
          <FontAwesomeIcon icon="shuttle-van" />
          <p>Suvs/Vans</p>
          <p>${price.van}</p>
        </div>
      </div>
    </div>
  </ScrollReveal>
)

export default PriceSlide
