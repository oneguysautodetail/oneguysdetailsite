<header>
    <div class="spacer"></div>
        <Banner />
        <div class="links-container" >
        <h4>
           <a use:scrollTo={'footer'}>
               Contact
           </a>
        </h4>
    </div>
</header>
<slot></slot>

<script>
    import { scrollTo } from 'svelte-scrolling';
    import Banner from "../components/banner.svelte";
</script>
<style lang="scss" global>
    @import "../styles/main.scss";

    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99999;
        display: flex !important;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(180deg, rgba(0,0,0,0.9850533963585434) 83%, rgba(252,252,252,0) 100%);
        margin: 0 auto;
        opacity: 0;
        animation-name: fadein;
        animation-duration: 1s;
        animation-delay: 500ms;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        }
        .spacer {
            flex-basis: 0;
            @media only screen and (min-width: 1000px) {
                flex-basis: 20%;
            }
        }
        .links-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0 0 2rem 0;
            opacity: 0;
            flex-basis: auto;
            animation-name: fadein;
            animation-duration: 1s;
            animation-delay: 500ms;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
        @media only screen and (min-width: 1000px) {
            justify-content: flex-end;
            width: auto;
            flex-basis: 20%;
            padding: 1rem 0;
        }

            h4 {
                z-index: 9999;
                margin: 1.5rem .25rem;
                a {
                    transition: all 250ms ease-in-out;
                    color: #ffffff;
                    text-decoration: none;
                    margin: 0 1rem;
                    padding: 0.75rem 1.25rem;
                    border: solid 1px #ffffff;
                }
                &:hover {
                    a {
                        background: #ffffff;
                        color: #000000;
                    }
                }
            }
        }
        @keyframes fadein {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
</style>