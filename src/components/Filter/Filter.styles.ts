import styled from "styled-components";

const FooterFilterBody = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-inline: 1rem;

  & > input[type="radio"]:hover + label {
    color: ${({ theme }) => theme.colors.wrd700};
  }

  & > input[type="radio"]:checked + label {
    color: ${({ theme }) => theme.colors.acc};
  }

  transition: transform 300ms ease-in;

  @media screen and (max-width: 630px) {
    position: absolute;
    bottom: 0%;
    left: 50%;

    transform: translateX(-50%) translateY(150%);

    background-color: ${({ theme }) => theme.colors.bg400};
    width: 100%;
    padding-block: 1rem 0.8rem;
    border-radius: 0.2rem;

    justify-content: center;
  }
`;

const FooterFilterLabel = styled.label`
  font-size: 0.7rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.wrd600};
  cursor: pointer;

  transition: color 100ms ease-in;
`;

const FooterFilterRadio = styled.input`
  display: none;
`;

export { FooterFilterBody, FooterFilterLabel, FooterFilterRadio };
