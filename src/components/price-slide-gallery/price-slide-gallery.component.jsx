import React from "react"

import PriceSlide from "../price-slide/price-slide.component"

import "./price-slide-gallery.styles.scss"

import { PRICING_DATA } from "./price-slide-gallery-data.js"

const PriceGallery = () => (
  
    <div className="pricing-gallery-container">
      {PRICING_DATA.map((service, index) => {
        console.log(service.id)
        return (
          <div className="slide-container">
            <PriceSlide
              title={service.title}
              price={service.price}
              description={service.description}
              idx={index}
              key={service.id}
              borderColor={service.border}
            />
          </div>
        )
      })}
    </div>
  
)

export default PriceGallery
