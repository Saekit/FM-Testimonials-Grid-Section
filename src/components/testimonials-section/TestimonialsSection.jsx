import { Section } from "./TestimonialsSection.styles";
import testimonials from "../../data/testimonials";
import TestimonialCard from "../testimonial-card/TestimonialCard";

const TestimonialsSection = () => (
  <Section>
    {testimonials.map((testimonial, idx) => (
      <TestimonialCard key={idx} testimonial={testimonial} />
    ))}
  </Section>
);
export default TestimonialsSection;
