import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    list-style: none;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root { 
    height: 100%;
  }

  body {
    background: #a8c0ff; 
    background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);
    background: linear-gradient(to right, #3f2b96, #a8c0ff);
  }

  .selected {
    background: #bdc3c7;
    background: -webkit-linear-gradient(to right, transparent, #bdc3c7);
    background: linear-gradient(to right, transparent, #bdc3c7);
  }
`;
