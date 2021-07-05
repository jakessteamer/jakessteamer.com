/* eslint-disable react/no-unescaped-entities */
import { LocalBusinessJsonLd } from "next-seo";
import ImageGallery from "../components/ImageGallery";
// import HomepageBanner from "../components/HomepageBanner";
import HomeHero from "../components/Homepage/HomeHero";
import { PageSeo } from "../components/SEO";
import siteMetadata from "../data/siteMetadata.json";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import AboutUs from "../components/AboutUs";
import SVGWaveDivider from "../components/SVGWaveDivider";
import Services from "../components/Homepage/Services";

export default function Index() {
  return (
    <>
      <PageSeo
        title="Jake's Steamer The Carpet Cleaner"
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <LocalBusinessJsonLd
        type="LocalBusiness"
        id={`${siteMetadata.siteUrl}/#organization`}
        name="Jake's Steamer The Carpet Cleaner"
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
        telephone={siteMetadata.telephone}
        address={{
          streetAddress: `${siteMetadata.streetAddress}`,
          addressLocality: `${siteMetadata.addressLocality}`,
          addressRegion: `${siteMetadata.addressRegion}`,
          postalCode: `${siteMetadata.postalCode}`,
          addressCountry: `${siteMetadata.addressCountry}`,
        }}
        geo={{
          latitude: `${siteMetadata.latitude}`,
          longitude: `${siteMetadata.longitude}`,
        }}
        images={[
          "https://jakessteamer.com/images/jake-steamer-van-large.jpg",
          "https://jakessteamer.com/images/logos/jakessteamer-logo-1200w600h.png",
          "https://jakessteamer.com/iicrc-certification.png",
        ]}
        openingHours={[
          {
            opens: "08:00",
            closes: "16:00",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            validFrom: "2021-01-01",
            validThrough: "2030-01-01",
          },
          {
            opens: "8:00",
            closes: "12:00",
            dayOfWeek: "Saturday",
            validFrom: "2021-01-01",
            validThrough: "2030-01-01",
          },
        ]}
        areaServed={[
          {
            geoMidpoint: {
              latitude: "32.923226",
              longitude: "-102.152285",
            },
            geoRadius: "131967.54",
          },
        ]}
      />
      <HomeHero />
      <Services />
      <SVGWaveDivider />
      <Testimonials />
      <ImageGallery />
      {/* <AboutUs /> */}
    </>
  );
}
