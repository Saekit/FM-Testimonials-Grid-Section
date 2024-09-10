import styled from "styled-components";
import { CardContainer } from "../testimonial-card/TestimonialCard.styles";
import quotationMark from "../../assets/images/bg-pattern-quotation.svg";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & ${CardContainer}:first-child {
    background-image: url(${quotationMark});
    background-repeat: no-repeat;
    background-position: top;
    background-position-x: 80%;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    max-width: 80%;

    & ${CardContainer}:nth-child(1) {
      grid-column: span 2 / span 2;
    }
    & ${CardContainer}:nth-child(2) {
      grid-column-start: 3;
    }
    & ${CardContainer}:nth-child(3) {
      grid-column-start: 1;
      grid-row-start: 2;
    }
    & ${CardContainer}:nth-child(4) {
      grid-column: span 2 / span 2;
      grid-column-start: 2;
      grid-row-start: 2;
    }
    & ${CardContainer}:nth-child(5) {
      grid-column: span 3 / span 3;
      grid-row-start: 3;
    }
  }

  /* desktop */
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    max-width: 80%;

    & ${CardContainer}:nth-child(1) {
      grid-column: span 2 / span 2;
    }
    & ${CardContainer}:nth-child(2) {
      grid-column-start: 3;
    }
    & ${CardContainer}:nth-child(3) {
      grid-column-start: 1;
      grid-row-start: 2;
    }
    & ${CardContainer}:nth-child(4) {
      grid-column: span 2 / span 2;
      grid-column-start: 2;
      grid-row-start: 2;
    }
    & ${CardContainer}:nth-child(5) {
      grid-row: span 2 / span 2;
      grid-column-start: 4;
      grid-row-start: 1;
    }
  }

  /* very large screens */
  @media (min-width: 2000px) {
    max-width: 50%;
  }
`;
