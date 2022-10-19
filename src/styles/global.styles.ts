import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
import { Fragment } from "react";

const GlobalStyle = createGlobalStyle` 
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        transition: all 50ms ease-in;
        transition: color 100ms ease-in;
        transition: background-color 100ms ease-in;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
    max-width: 100%;
    display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
    font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    :root {
        font-family: ${({ theme }) => theme.font.family};
        font-size: clamp(1.1rem, 2vw, 1.5rem); 

    }

    body {
      overflow-x: hidden;
      max-width: 100vw;
      position: relative;
      background-color: ${({ theme }) => theme.colors.bg500};
    }

    #root {
      min-block-size: 100vh;
      max-inline-size: 100vw;


      display: flex;
      flex-flow: column nowrap;
      align-items: center;

      gap: 2rem;

      @media screen and (max-width: 800px) {
        gap: 0rem;
      }
    }
`;

const MainApp = styled.div`
  inline-size: 100vw;
  max-inline-size: 31rem;

  min-block-size: 100vh;
  padding-inline: 1rem;
`;

const MainContent = styled.main`
  overflow: hidden;

  margin-block: 1.3rem;
  inline-size: 100%;

  background-color: ${({ theme }) => theme.colors.bg400};

  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; ;
`;

const Footer = styled.footer`
  width: 100%;

  font-size: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.title === "dark" ? theme.colors.wrd700 : theme.colors.wrd800};

  & > p {
    text-align: center;
    width: 100%;
  }
`;

export { GlobalStyle, MainApp, MainContent, Footer };
