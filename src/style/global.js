import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    html, body, * {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
    }

    * {
        font-family: "Montserrat";
    }

    *::-webkit-scrollbar {
        width: 0.8em;
    }

    *::-webkit-scrollbar-track {
        background-color: rgba(17, 199, 111, 1);
    }

    *::-webkit-scrollbar-thumb {
        background-color: rgba(158, 158, 158, 0.5);
        border-radius: 2em;
    }
`;

export default globalStyle;
