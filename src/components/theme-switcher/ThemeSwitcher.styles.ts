import styled from "styled-components";

const ThemeSwitcherButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;

  cursor: pointer;
  transition: transform 100ms ease-in;

  &:hover > * {
    transform: rotate(30deg);
  }
`;

const ThemeSwitcherIcon = styled.img`
  width: 1.2rem;
`;

export { ThemeSwitcherButton, ThemeSwitcherIcon };
