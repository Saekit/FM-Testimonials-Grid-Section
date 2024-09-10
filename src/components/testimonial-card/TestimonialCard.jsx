import {
  AvatarImg,
  BodyText,
  CardContainer,
  CardHead,
  HeaderTextContainer,
  HeadlineText,
  UserNameText,
  VerifiedGradText,
} from "./TestimonialCard.styles";
import { defaultTheme } from "../../themes/default";

const TestimonialCard = ({ testimonial }) => {
  const {
    userName,
    verifiedGraduate,
    headline,
    body,
    avatar,
    hasAvatarBorder,
    backgroundColor,
    headlineFontColor,
  } = testimonial;

  return (
    <CardContainer $backgroundColor={backgroundColor}>
      <CardHead>
        <AvatarImg
          src={avatar}
          alt={userName + "'s avatar"}
          $avatarBorder={
            hasAvatarBorder
              ? `3px solid ${defaultTheme.colors.lighterViolet}`
              : "none"
          }
        />
        <HeaderTextContainer>
          <UserNameText $headlineFontColor={headlineFontColor}>
            {userName}
          </UserNameText>
          <VerifiedGradText>
            {verifiedGraduate && "Verified Graduate"}
          </VerifiedGradText>
        </HeaderTextContainer>
      </CardHead>
      <HeadlineText $headlineFontColor={headlineFontColor}>
        {headline}
      </HeadlineText>
      <BodyText>{body}</BodyText>
    </CardContainer>
  );
};
export default TestimonialCard;
