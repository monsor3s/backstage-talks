import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

:root {
    --blue-light: #00c1b5;
    --yellow: #ffbe00;
    --red: #e30512;
    --orange: #ff651a;
    --purple: #1d3fbb;
}
`;

export default GlobalStyle;