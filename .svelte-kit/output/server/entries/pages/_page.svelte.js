import { c as create_ssr_component, f as add_attribute, e as escape, h as add_styles, i as each, v as validate_component } from "../../chunks/index.js";
import "../../chunks/ScrollTo.js";
import "sal.js";
import "../../chunks/index2.js";
const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'p.svelte-1pv91cc.svelte-1pv91cc{font-family:"Lato", sans-serif}.pricing-card.svelte-1pv91cc.svelte-1pv91cc{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr 1fr;background-color:#333435;border-radius:1%;height:450px;max-width:500px;padding:2rem;margin:3rem 0;color:#ffffff;box-shadow:2.8px 0 2.2px rgba(0, 0, 0, 0.02), 6.7px 0 5.3px rgba(0, 0, 0, 0.028), 12.5px 0 10px rgba(0, 0, 0, 0.035), 22.3px 0 17.9px rgba(0, 0, 0, 0.042), 41.8px 0 33.4px rgba(0, 0, 0, 0.05), 100px 0 80px rgba(0, 0, 0, 0.07)}.pricing-card.svelte-1pv91cc .service-title.svelte-1pv91cc{margin-bottom:1rem}.pricing-card.svelte-1pv91cc .service-description.svelte-1pv91cc{padding:0}.pricing-card.svelte-1pv91cc .price-container.svelte-1pv91cc{display:flex;justify-content:space-evenly}.pricing-card.svelte-1pv91cc .car-price.svelte-1pv91cc,.pricing-card.svelte-1pv91cc .truck-price.svelte-1pv91cc,.pricing-card.svelte-1pv91cc .van-price.svelte-1pv91cc{font-size:2rem;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem 1rem}.pricing-card.svelte-1pv91cc .car-price p.svelte-1pv91cc,.pricing-card.svelte-1pv91cc .truck-price p.svelte-1pv91cc,.pricing-card.svelte-1pv91cc .van-price p.svelte-1pv91cc{font-size:1rem;margin:0.25rem 0}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { borderColor, title, description, price, idx } = $$props;
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0)
    $$bindings.idx(idx);
  $$result.css.add(css$1);
  return `<div class="${"pricing-card svelte-1pv91cc"}" data-sal="${"slide-up"}"${add_attribute("data-sal-delay", `${150 * idx}`, 0)} data-sal-duration="${"500"}" data-sal-easing="${"ease-out-back"}"><h1 class="${"service-title svelte-1pv91cc"}" style="${"border-bottom: 8px solid " + escape(borderColor, true)}">${escape(title)}</h1>
    <p class="${"service-description svelte-1pv91cc"}">${escape(description)}</p>
    <div class="${"price-container svelte-1pv91cc"}"><div class="${"car-price svelte-1pv91cc"}"><p class="${"svelte-1pv91cc"}">Cars</p>
        <p class="${"svelte-1pv91cc"}">$${escape(price.car)}</p></div>
    <div class="${"truck-price svelte-1pv91cc"}"><p class="${"svelte-1pv91cc"}">Trucks</p>
        <p class="${"svelte-1pv91cc"}">$${escape(price.truck)}</p></div>
    <div class="${"van-price svelte-1pv91cc"}"><p class="${"svelte-1pv91cc"}">Suvs/Vans</p>
        <p class="${"svelte-1pv91cc"}">$${escape(price.van)}</p></div></div>
</div>`;
});
const PRICING_DATA = [
  {
    title: "Exterior Detail",
    description: "Hand wash wheel wells, clean wheels, dress tires, clay bar and road tar removal, light buff with polish and wax, vacuum, windows in/out, wipe door jams.",
    price: {
      car: 150,
      truck: 175,
      van: 200
    },
    id: 1,
    border: "#FC4445"
  },
  {
    title: "Interior Detail",
    description: "Hand wash, clean wheels, dress tires, shampoo mats/carpets, clean all upholstery(leather or cloth), clean doors/dash/headliner/compartments, vacuum trunk, windows in/out, wipe door jams.",
    price: {
      car: 125,
      truck: 150,
      van: 175
    },
    id: 2,
    border: "#3FEEE6"
  },
  {
    title: "Pearl Package",
    description: "Hand wash & wax, Clay bar, road tar removal + interior detail.",
    price: {
      car: 200,
      truck: 240,
      van: 275
    },
    id: 3,
    border: "#3500D3"
  },
  {
    title: "Diamond Package",
    description: "Interior detail, exterior detail & steam clean motor",
    price: {
      car: 250,
      truck: 300,
      van: 350
    },
    id: 4,
    border: "#F64C72"
  },
  {
    title: "Paint/Int Sealants",
    description: "Add to any package",
    price: {
      car: 50,
      truck: 60,
      van: 70
    },
    id: 5,
    border: "#5CDB95"
  },
  {
    title: "Quick Clean",
    description: "Hand wash, clean wheels, dress tires, vacuum, windows in/out, wipe door jams, wipe dash.",
    price: {
      car: 45,
      truck: 55,
      van: 65
    },
    id: 6,
    border: "orange"
  },
  {
    title: "Wash & Wax",
    description: "Hand wash, hand wax/orbital wax, clean wheels, dress tires, vacuum, windows in/out, wipe door jams.",
    price: {
      car: 105,
      truck: 110,
      van: 120
    },
    id: 7,
    border: "#116466"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.site-bg.svelte-1h080ke.svelte-1h080ke{background:url("/images/oneguyintropic.jpeg");background-size:cover;background-position:center;position:fixed;top:0;left:0;height:100vh;width:100vw}.intro-container.svelte-1h080ke.svelte-1h080ke{position:relative;height:100vh;width:100%}.intro-container.svelte-1h080ke.svelte-1h080ke:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.1);z-index:1}.intro-container.svelte-1h080ke .gradient-fade-up.svelte-1h080ke{position:absolute;top:100;left:0;width:100%;height:100%;background-image:linear-gradient(to top, rgb(0, 0, 0), rgba(248, 20, 20, 0))}.intro-container.svelte-1h080ke .logo-container.svelte-1h080ke{display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:999;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.intro-container.svelte-1h080ke .svg-logo-container.svelte-1h080ke{display:flex;justify-content:center;margin-bottom:1rem;width:300px;height:auto;z-index:9999}.intro-container.svelte-1h080ke .statement.svelte-1h080ke{display:block;width:100%;color:#fff;text-align:center}.pricing-gallery-container.svelte-1h080ke.svelte-1h080ke{position:relative;background-color:black;display:grid;grid-template-columns:1fr;grid-template-rows:repeat(5, 1fr)}@media only screen and (min-width: 1000px){.pricing-gallery-container.svelte-1h080ke.svelte-1h080ke{grid-template-columns:1fr 1fr;grid-template-rows:repeat(4, 1fr)}}.slide-container.svelte-1h080ke.svelte-1h080ke{margin:auto}.footer-container.svelte-1h080ke.svelte-1h080ke{position:relative;height:100vh;padding:3rem;color:#ffffff;display:flex;background-position:bottom;background-size:cover;justify-content:center;flex-direction:column;align-items:center}.footer-container.svelte-1h080ke.svelte-1h080ke:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:rgba(0, 0, 0, 0.5);z-index:1}.footer-container.svelte-1h080ke .content-box.svelte-1h080ke{padding:2rem;border:1px solid #ffffff;z-index:9999}.footer-container.svelte-1h080ke .content-box a.svelte-1h080ke{text-decoration:none;appearance:none;color:#ffffff}.footer-container.svelte-1h080ke .content-box .footer-title.svelte-1h080ke{margin-bottom:3rem}.footer-container.svelte-1h080ke .gradient-fade-down.svelte-1h080ke{position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to bottom, rgb(0, 0, 0), rgba(248, 20, 20, 0))}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scroll;
  $$result.css.add(css);
  return `
<main><div class="${"site-bg svelte-1h080ke"}"></div>
    <div class="${"intro-container svelte-1h080ke"}"><div class="${"gradient-fade-up svelte-1h080ke"}"></div>
            <div class="${"logo-container svelte-1h080ke"}" id="${"logo-container"}"${add_styles({
    "margin-top": `${scroll / 1.5}px`,
    "opacity": `${1 - scroll / 175}`
  })}><div class="${"svg-logo-container svelte-1h080ke"}"><svg width="${"215.217391304"}" height="${"150"}" viewBox="${"0 0 132 92"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M69 5C62.2168 1.49456 54.6478 0 45.5717 0C36.7822 0 28.9003 1.91576 21.926 5.74729C15.0472 9.57881 9.64934 14.9592 5.73228 21.8886C1.91076 28.8179 0 36.7663 0 45.7337C0 54.9457 1.86299 62.894 5.58898 69.5788C9.4105 76.1821 14.7129 81.2364 21.4961 84.7418C28.3748 88.2473 36.3522 90 45.4283 90C54.2179 90 62.052 88.0842 68.9307 84.2527C75.905 80.4212 81.3029 75.0408 85.1244 68.1114C89.0415 61.1821 91 53.2337 91 44.2663C91 35.0543 89.0892 27.1467 85.2677 20.5435C82.6571 15.8599 79.2727 11.9566 75.1145 8.83369C71.9447 11.0255 70.7701 12.0278 68.4208 15.0347C69.8649 16.8582 71.3751 20.0648 72.3701 22.3777C75.2362 28.8179 76.6693 36.2772 76.6693 44.7554C76.6693 53.1522 75.3795 60.6114 72.8 67.1331C70.316 73.6549 66.7333 78.75 62.052 82.4185C57.4661 86.0054 52.116 87.7989 46.0016 87.7989C40.0782 87.7989 34.7281 86.0462 29.9512 82.5408C25.1743 79.0353 21.3528 74.0625 18.4866 67.6223C15.716 61.1821 14.3307 53.7228 14.3307 45.2446C14.3307 36.8478 15.5727 29.3886 18.0567 22.8668C20.6362 16.3451 24.2189 11.2908 28.8047 7.70381C33.4861 4.03533 38.884 2.20109 44.9984 2.20109C50.9218 2.20109 56.2719 3.95381 61.0488 7.45924C61.4003 7.71716 62.5 8.5 62.5 8.5C64.3689 7.0259 66 6 69 5Z"}" fill="${"#ffffff"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M70.7122 83.9906C69.8718 84.523 69.0064 85.0315 68.116 85.5159C67.1478 86.0499 66.1614 86.5476 65.1571 87.009C72.2342 90.3363 80.6707 92 90.4667 92C94.9046 92 98.9084 91.4293 102.478 90.288C106.144 89.2283 109.666 87.5978 113.042 85.3967C114.489 84.5 115.502 83.9293 116.081 83.6848C116.66 83.4402 117.239 83.3179 117.818 83.3179C118.976 83.3179 119.892 84.0924 120.567 85.6413C121.243 87.1087 121.629 88.6576 121.725 90.288H124.62V66.0761C124.62 62.9783 124.764 60.7364 125.054 59.3505C125.44 57.9647 126.115 57.0272 127.08 56.538C128.141 56.0489 129.781 55.7228 132 55.5598V53.1141C128.527 53.3587 123.51 53.481 116.95 53.481C108.363 53.481 101.562 53.3587 96.5447 53.1141V55.5598C100.886 55.7228 104.022 56.0897 105.951 56.6603C107.881 57.231 109.231 58.2908 110.003 59.8397C110.775 61.3886 111.161 63.875 111.161 67.2989V79.038C111.161 80.6685 110.872 81.9728 110.293 82.9511C109.81 83.8478 108.701 84.7853 106.964 85.7636C102.719 88.2908 97.7024 89.5543 91.9138 89.5543C83.1278 89.5543 76.0606 87.6998 70.7122 83.9906Z"}" fill="${"#ffffff"}"></path><path d="${"M89.5984 2C95.2905 2 99.9696 2.69294 103.636 4.07881C107.302 5.38316 111.306 7.33968 115.647 9.94838C116.901 10.7636 117.866 11.1712 118.541 11.1712C120.375 11.1712 121.58 8.68479 122.159 3.71196H125.488C125.102 9.01088 124.909 18.3859 124.909 31.837H121.58C120.712 27.5163 119.796 23.9701 118.831 21.1984C117.866 18.3451 116.371 15.8587 114.345 13.7391C111.547 10.8043 107.881 8.48098 103.346 6.76903C98.9084 5.05707 94.2293 4.20109 89.3089 4.20109C82.9415 4.20109 77.3458 5.95381 72.5219 9.45924C67.6981 12.9647 63.9837 17.9783 61.3789 24.5C58.774 30.9402 57.4715 38.481 57.4715 47.1223C57.4715 60.5466 59.1621 72.6485 64.5 78.5C64.5 78.5 62 81.5 59 83C54.9591 79.9702 51.1867 76.2308 48.6439 71.8234C44.8813 65.3016 43 57.5163 43 48.4674C43 39.1739 44.9778 31.0217 48.9333 24.0109C52.9854 16.9185 58.5328 11.4973 65.5756 7.74729C72.6184 3.91576 80.626 2 89.5984 2Z"}" fill="${"#ffffff"}"></path></svg></div>
            <div class="${"statement svelte-1h080ke"}"><h1>One Guys Auto Detail</h1></div></div></div>

    <div class="${"pricing-gallery-container svelte-1h080ke"}">${each(PRICING_DATA, (service) => {
    return `<div class="${"slide-container svelte-1h080ke"}">${validate_component(Card, "PriceCard").$$render(
      $$result,
      {
        title: service.title,
        price: service.price,
        description: service.description,
        idx: service.id,
        borderColor: service.border
      },
      {},
      {}
    )}
        </div>`;
  })}</div>

    <div class="${"footer-container svelte-1h080ke"}"><div class="${"gradient-fade-down svelte-1h080ke"}"></div>
        <div class="${"content-box svelte-1h080ke"}" data-sal="${"slide-up"}" data-sal-delay="${"200"}" data-sal-duration="${"350"}" data-sal-easing="${"ease-out-back"}"><h1 class="${"footer-title svelte-1h080ke"}">Contact</h1>
            <h3>Address:</h3>
            <a href="${"https://www.google.com/maps/dir//5016+208th+St+SW,+Lynnwood,+WA+98036/@47.8098618,-122.3036468,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x54900551dbd45ceb:0xf54b2f702ad1ddca!2m2!1d-122.3014581!2d47.8098618!3e0"}" target="${"_blank"}" class="${"svelte-1h080ke"}"><h4>5016 208th St. SW Lynnwood, WA 98036</h4></a>
            <h3>Phone:</h3>
            <a href="${"tel:206-591-4707"}" class="${"svelte-1h080ke"}"><h4>Shop : 206-591-4707</h4></a>
            <a href="${"tel:206-422-9317"}" class="${"svelte-1h080ke"}"><h4>Cell : 206-422-9317</h4></a></div></div>
</main>`;
});
export {
  Page as default
};
