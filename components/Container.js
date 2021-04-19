/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { useRouter } from 'next/router';
import FabIcon from '@components/FabIcon';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Container(props) {
    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: "Jake's Steamer",
        description:
            "Jake's Steamer is a certified, licensed, and insured carpet cleaning company. Call 432-847-4600 for carpet, upholstery, tile, air duct, area rug, water damage services. Jake's steamer is based in Seminole, Texas. We proudly serve Seminole and the surrounding counties.",
        image: 'https://jakessteamer.com/images/logos/jakessteamer-company-logo-square.png',
        type: 'website',
        ...customMeta
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://jakessteamer.com${router.asPath}`} />
                <link rel="canonical" href={`https://jakessteamer.com${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Jake's Steamer" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && <meta property="article:published_time" content={meta.date} />}
                {/* prettier-ignore */}
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(
            {
              "@context" : "http://schema.org",
              "@type" : "LocalBusiness",
              "@id": "https://jakessteamer.com",
              "name" : "Jake's Steamer",
              "image" : "https://www.jakessteamer.com/images/logos/jakessteamer-company-logo-square.png",
              "telephone" : "432-847-4600",
              "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "606 SE 4th St",
                "addressLocality" : "Seminole",
                "addressRegion" : "TX",
                "postalCode" : "79360",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "08:00",
                  "closes": "16:00"
                }
              ,
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "8:00",
                  "closes": "12:00"
                }
              ],
            }
          ) }}
        />
            </Head>
            <Navbar />
            <main>{children}</main>
            <FabIcon />
            <Footer />
        </>
    );
}
