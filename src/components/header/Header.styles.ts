import styled from "styled-components";

const HeaderBody = styled.header``;

const HeaderBar = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  inline-size: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    font-size: 1.8rem;
    color: #ffff;
    letter-spacing: 1rem;
  }
`;

export { HeaderBar, HeaderBody };
