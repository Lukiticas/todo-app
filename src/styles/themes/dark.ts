import { DefaultTheme } from "styled-components";

export default {
  title: "dark",
  colors: {
    bg400: "hsl(235, 24%, 19%)",
    bg500: "hsl(235, 21%, 11%)",
    wrd400: "hsl(236, 33%, 92%)",
    wrd500: "hsl(234, 39%, 85%)",
    wrd600: "hsl(234, 11%, 52%)",
    wrd700: "hsl(233, 14%, 35%)",
    wrd800: "hsl(235, 19%, 35%)",
    wrd900: "hsl(237, 14%, 26%)",
    acc: "hsl(220, 98%, 61%)",
  },
  gradient: {
    blueToPurple: `linear-gradient(
        120deg,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      )`,
  },
  font: {
    family: "'Josefin Sans', sans-serif",
  },
} as DefaultTheme;
