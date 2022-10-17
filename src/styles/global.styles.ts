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
  margin-top: 1.3rem;
  inline-size: 100%;

  background-color: ${({ theme }) => theme.colors.bg400};

  border-radius: 0.2rem;
  box-shadow: ${({ theme }) =>
      theme.title === "dark" ? theme.colors.bg500 : "rgba(100, 100, 111, 0.2)"}
    0px 7px 29px 0px;
`;

const TodoList = styled.div`
  inline-size: 100%;
`;

const TodoIconCheck = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3rem;
  border-radius: 100vw;
  outline: 0.07rem solid ${({ theme }) => theme.colors.wrd700};
`;

const CheckIcon = styled.img`
  width: 0.6rem;
  opacity: 0;
`;

const TodoCrossIcon = styled.img`
  width: 1rem;
`;

const CancelTodoButton = styled.button`
  opacity: 0;

  outline: none;
  border: none;
  margin-inline-start: auto;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.3rem;
  border-radius: 100vw;
  background-color: transparent;
  transition: opacity 100ms ease-in, transform 500ms ease;

  &:hover {
    transform: rotate(180deg);
  }
`;

const TodoItemBody = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;

  min-height: 3.3rem;
  padding-inline: 1rem;

  cursor: pointer;

  border-bottom: 0.08rem solid ${({ theme }) => theme.colors.wrd700};

  p {
    color: ${({ theme }) =>
      theme.title === "dark" ? theme.colors.wrd400 : theme.colors.wrd800};
    font-size: 0.9rem;
  }

  &:hover {
    ${CancelTodoButton} {
      opacity: 1;
    }

    ${TodoIconCheck} {
      outline: none;
      background-image: ${({ theme }) => theme.gradient.blueToPurple};

      &::after {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.bg400};
        border-radius: 100vw;
        inset: 8%;
      }
    }
  }
`;

export {
  GlobalStyle,
  TodoCrossIcon,
  TodoIconCheck,
  TodoItemBody,
  CheckIcon,
  TodoList,
  MainApp,
  MainContent,
  CancelTodoButton,
};
