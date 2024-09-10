import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-evenly;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 10px;
`;

export const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${(props) => props.$avatarBorder};
  margin-right: 10px;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNameText = styled.p`
  color: ${(props) => props.$headlineFontColor};
  font-size: 1rem;
`;

export const VerifiedGradText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
  font-size: 0.8rem;
`;

export const HeadlineText = styled.h1`
  color: ${(props) => props.$headlineFontColor};
`;

export const BodyText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
  `}
  font-size: 1rem;
`;
