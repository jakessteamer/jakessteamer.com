/* eslint-disable react/no-unescaped-entities */
import Services from '@components/Services';
import Container from '../components/Container';
import Hero from '../components/Hero';

import ImageGallery from '../components/ImageGallery';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import AboutUs from '../components/AboutUs';
import SVGDivider from '../components/SVGDivider';
import SVGWaveDivider from '../components/SVGWaveDivider';

export default function Home() {
    return (
        <Container>
            <Hero />
            <div className="text-center text-4xl">
                <h1 className="font-bold leading-tight hero-headline">Call Jake's Steamer!</h1>
                <a
                    className="font-bold leading-tight hero-headline brand-blue"
                    href="tel:+14328474600">
                    432-847-4600
                </a>
            </div>
            <Services />
            <ImageGallery />
            <SVGWaveDivider />
            <Testimonials />
            <CTA />
            <AboutUs />
        </Container>
    );
}
