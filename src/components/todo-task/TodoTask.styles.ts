import styled from "styled-components";

const TaskIconBody = styled.div`
  position: relative;

  width: 1.1rem;
  height: 1.1rem;

  border-radius: 100vw;
  outline: 0.07rem solid ${({ theme }) => theme.colors.wrd700};

  cursor: pointer;
`;

const TaskIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 0.6rem;
  opacity: 0;
`;

const TaskMessage = styled.p`
  flex: 1;

  font-size: 0.9rem;
  color: ${({ theme }) =>
    theme.title === "dark" ? theme.colors.wrd400 : theme.colors.wrd800};
`;

const TaskClearButton = styled.button`
  padding: 0.5rem;
  border-radius: 100vw;

  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: transform 200ms ease-in;
  display: none;

  &:hover {
    transform: rotate(90deg);
  }
`;

const TaskClearButtonIcon = styled.img`
  width: 1rem;
`;

const TaskBody = styled.div`
  background-color: ${({ theme }) => theme.colors.bg400};
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;

  padding: 0.5rem 1rem;
  min-height: 3rem;

  border-bottom: 1px solid
    ${({ theme }) =>
      theme.title === "dark" ? theme.colors.wrd900 : theme.colors.wrd400};

  &[data-done="true"] {
    ${TaskIconBody} {
      background-image: ${({ theme }) => theme.gradient.blueToPurple};
      &::after {
        opacity: 0;
      }
    }

    ${TaskIcon} {
      opacity: 1;
    }

    ${TaskMessage} {
      text-decoration: line-through;
      color: ${({ theme }) =>
        theme.title === "dark" ? theme.colors.wrd700 : theme.colors.wrd400};
    }
  }

  &:focus-within,
  &:hover {
    ${TaskIconBody} {
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

    ${TaskClearButton} {
      display: block;
    }
  }
`;

export {
  TaskBody,
  TaskIcon,
  TaskIconBody,
  TaskClearButton,
  TaskClearButtonIcon,
  TaskMessage,
};
