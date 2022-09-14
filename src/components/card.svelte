
<div 
    class="pricing-card"
    data-sal="slide-up"
    data-sal-delay={`${150 * idx}`}
    data-sal-duration="500"
    data-sal-easing="ease-out-back"
>
    <h1 class="service-title" style="border-bottom: 8px solid {borderColor}">{title}</h1>
    <p class="service-description">{description}</p>
    <div class="price-container">
    <div class="car-price">
        <Fa icon={faCarSide} />
        <p>Cars</p>
        <p>${price.car}</p>
    </div>
    <div class="truck-price">
        <Fa icon={faTruckPickup} />
        <p>Trucks</p>
        <p>${price.truck}</p>
    </div>
    <div class="van-price">
        <Fa icon={faShuttleVan} />
        <p>Suvs/Vans</p>
        <p>${price.van}</p>
    </div>
    </div>
</div>
<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faCarSide, faTruckPickup, faShuttleVan } from '@fortawesome/free-solid-svg-icons/index.js';

    export let borderColor, title, description, price, idx;
</script>

<style lang="scss">
    p {
    font-family: 'Lato', sans-serif;
    }

    .pricing-card {
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: #333435;
    border-radius: 1%;
    height: 500px;
    max-width: 500px;
    padding: 2.5rem;
    margin: 3rem 1rem;
    color: #ffffff;
    box-shadow: 2.8px 0 2.2px rgba(0, 0, 0, 0.02),
        6.7px 0 5.3px rgba(0, 0, 0, 0.028), 12.5px 0 10px rgba(0, 0, 0, 0.035),
        22.3px 0 17.9px rgba(0, 0, 0, 0.042), 41.8px 0 33.4px rgba(0, 0, 0, 0.05),
        100px 0 80px rgba(0, 0, 0, 0.07);
    .service-title {
        margin-bottom: 1rem;
    }
    .service-description {
        // max-width: 500px;
        padding: 0;
    }
    .price-container {
        display: flex;
        justify-content: space-evenly;
    }

    .car-price,
    .truck-price,
    .van-price {
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
        p {
        font-size: 1rem;
        margin: 0.25rem 0;
        }
    }
    }

</style>