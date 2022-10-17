import styled from "styled-components";

const HeroImg = styled.picture`
  position: absolute;
  left: 0;
  z-index: -1;

  width: 100vw;
  height: 13rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export { HeroImg };
