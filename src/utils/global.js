import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    font-size: 16px;
    box-sizing: border-box;
  }


   *, *::before, *::after {
    box-sizing: inherit;
   }

   body {
     margin: 0;
     font-family: ${primaryFont}
   }

   main {
     width: 90%;
     margin: 0 auto;
   }
`;
