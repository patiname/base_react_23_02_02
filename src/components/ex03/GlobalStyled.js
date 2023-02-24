import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyeld = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: #1d1d1d;
    }

    /* body{
        background-color: #333;
    } */
`;
