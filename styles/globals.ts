"use client";

import { createGlobalStyle } from "styled-components";

interface IGlobalStyles {}

export const GlobalStyle = createGlobalStyle<IGlobalStyles>`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #000000
  }
`;
