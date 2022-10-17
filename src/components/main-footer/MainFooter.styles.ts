import styled from "styled-components";

const MainFooterBody = styled.footer`
  position: relative;

  inline-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-inline: 1rem;
  padding-block: 1rem 0.8rem;

  @media screen and (max-width: 255px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
  }
`;

const ClearCompletedButton = styled.button`
  outline: none;
  border: none;

  font-size: 0.7rem;
  font-weight: 700;

  cursor: pointer;
  background-color: transparent;

  color: ${({ theme }) => theme.colors.wrd600};

  &:hover {
    color: ${({ theme }) => theme.colors.wrd700};
  }

  &:active {
    color: ${({ theme }) => theme.colors.acc};
  }
`;

const ItemsRemainingSpan = styled.span`
  font-size: 0.7rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.wrd600};

  &:hover {
    color: ${({ theme }) => theme.colors.acc};
  }
`;

export { ClearCompletedButton, ItemsRemainingSpan, MainFooterBody };
