import Services from '@components/Services';
import Container from '../components/Container';
import Hero from '../components/Hero';

import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import AboutUs from '../components/AboutUs';
import SVGDivider from '../components/SVGDivider';

export default function Home() {
  return (
    <Container>
      <Hero />
      <SVGDivider />
      <Services />
      <ImageGallery />
      <Testimonials />
      <CTA />
      <AboutUs />
    </Container>
  );
}
