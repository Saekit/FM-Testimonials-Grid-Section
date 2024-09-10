import styled, { css } from "styled-components";

const MainWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGrayishBlue};
  `}
  margin: 0;
  padding: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default MainWrapper;
