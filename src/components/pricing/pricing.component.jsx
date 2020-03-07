import React from 'react';

import PriceGallery from "../price-slide-gallery/price-slide-gallery.component";

import './pricing.styles.scss';

const Pricing = () => (
    <div className="pricing-container" id="pricing">
        <h1 className="section-title">Services & Pricing</h1>
        <PriceGallery />
    </div>
)

export default Pricing;