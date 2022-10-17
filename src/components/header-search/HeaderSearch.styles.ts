import styled from "styled-components";

const HeaderInput = styled.input`
  width: 100%;
  height: 100%;

  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) =>
    theme.title === "dark" ? theme.colors.wrd400 : theme.colors.wrd800};

  &::placeholder {
    color: ${({ theme }) => theme.colors.wrd600};
  }
`;

const HeaderIconCheck = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3rem;
  border-radius: 100vw;
  outline: 0.07rem solid ${({ theme }) => theme.colors.wrd700};
`;

const HeaderIcon = styled.img`
  width: 0.6rem;
  opacity: 0;
`;

const HeaderInputBody = styled.div`
  background-color: ${({ theme }) => theme.colors.bg400};
  display: flex;
  align-items: center;

  gap: 1rem;
  padding-inline: 1rem;
  height: 3rem;

  border-radius: 0.2rem;

  &:not(:has(:placeholder-shown)) {
    ${HeaderIcon} {
      opacity: 1;
    }

    ${HeaderIconCheck} {
      cursor: pointer;
      background-image: ${({ theme }) => theme.gradient.blueToPurple};

      &::after {
        display: none;
      }
    }
  }

  &:focus-within,
  &:hover {
    ${HeaderIconCheck} {
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

export { HeaderInput, HeaderIcon, HeaderIconCheck, HeaderInputBody };
