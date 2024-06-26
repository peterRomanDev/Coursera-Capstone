// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Section from "../components/Section";

// context
import { usePageContent } from "../hooks/usePageContent";
import useScrollToSection from "../hooks/useScrollTo";

export default function ConfirmedBooking() {
  // a booking confirmation page
  
  const { sections, infoCards } = usePageContent();

  // scroll to top when loaded
  useScrollToSection();
  
  return (
    <>
      <Header />
      <Main>
        <Section section={sections.bookingConfirmed}>
          <InfoCard infoCard={infoCards && infoCards.bookingConfirmed} />
        </Section>
      </Main>
      <Footer />
    </>
  );
}