import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { HeroImg } from "./Background.styles";

import heroMBDark from "/images/bg-mobile-dark.jpg";
import heroDskDark from "/images/bg-desktop-dark.jpg";
import heroDskLight from "/images/bg-desktop-light.jpg";
import heroMBLight from "/images/bg-mobile-light.jpg";

const Background = () => {
  const { title } = useContext(ThemeContext);

  const mbHero = title === "dark" ? heroMBDark : heroMBLight;
  const deskHero = title === "dark" ? heroDskDark : heroDskLight;

  return (
    <HeroImg>
      <source srcSet={mbHero} media="(max-width: 700px)" />
      <img src={deskHero} alt="" />
    </HeroImg>
  );
};

export default Background;
