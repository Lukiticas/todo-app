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

  min-width: 1.1rem;
  min-height: 1.1rem;

  border-radius: 100vw;
  outline: 0.07rem solid ${({ theme }) => theme.colors.wrd700};
`;

const HeaderIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
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
    ${HeaderIconCheck}:hover ${HeaderIcon} {
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
        inset: 0.1rem;
      }
    }
  }
`;

export { HeaderInput, HeaderIcon, HeaderIconCheck, HeaderInputBody };
