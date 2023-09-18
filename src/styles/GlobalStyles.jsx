import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
    --font-family: 'Manrope', sans-serif;

    --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
    
    --color-bg: #040C18;
    --color-footer : #031B34;
    --color-blog: #042c54;
    --color-text: #81AFDD;
    --color-subtext: #FF8A71;
    --color-subtext-variation: #71E5FF;
    --color-text-basic: #ffffff;
    --color-btn-bg: #FF4820;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        transition: filter .2s ease-in-out;
    }

    body {
        background: var(--color-bg);
    }

    a {
        color: unset;
        text-decoration: none;
        font-family: var(--font-family);
    }

    li {
        list-style: none;
    }

    button {
        cursor: pointer;
        font: inherit;
        border: none;
        outline: none;
        line-height: 0;
        background: none;
        color: inherit;
        font-family: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: var(--font-family);
        overflow-wrap: break-word;
        hyphens: auto;
    }
`;

export default GlobalStyles;
