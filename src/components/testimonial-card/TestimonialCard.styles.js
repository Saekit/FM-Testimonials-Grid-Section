import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-evenly;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const AvatarImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: ${(props) => props.$avatarBorder};
  margin-right: 15px;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNameText = styled.p`
  color: ${(props) => props.$headlineFontColor};
  font-size: 1rem;
  margin: 0;
`;

export const VerifiedGradText = styled.p`
  color: ${(props) => props.$verifiedFontColor};
  font-size: 0.8rem;
  margin: 0;
`;

export const HeadlineText = styled.h1`
  color: ${(props) => props.$headlineFontColor};
  font-size: 1.25rem;
`;

export const BodyText = styled.p`
  color: ${(props) => props.$bodyFontColor};
  font-size: 1rem;
  margin: 0;
`;
