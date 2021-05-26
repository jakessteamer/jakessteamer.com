/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { PageSeo } from '../components/SEO';
import siteMetadata from '../data/siteMetadata.json';

export default function TileAndGroutCleaning() {
    return (
        <>
            <PageSeo
                title="Tile and Grout Cleaning"
                description="Clean, seal and protect your tile and grout. For over 20 years, we have been providing the best floor cleaning services for any types of stone, ceramic, marble or other tile floors and that includes grout."
                url={`${siteMetadata.siteUrl}/TileAndGroutCleaning`}
            />
            <article className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
                    Tile and Grout Cleaning
                </h1>

                <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <Image
                        alt="Mountains"
                        className="rounded"
                        src="/images/tile/tile-cleaning.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="prose dark:prose-dark max-w-none w-full mt-12">
                    <p className="mb-4">
                        Tile and grout are notoriously difficult to clean. Every homeowner (and
                        business owner!) knows that regular mopping, home tile cleaners and home
                        grout cleaning methods just don't do the trick, especially if you're trying
                        to eliminate stubborn dirt that has settled on tile surfaces or deep into
                        grout lines. Call Jake’s Steamer and we'll come to the rescue! Jake’s
                        Steamer Professional Tile Cleaning and Grout Cleaning process will keep your
                        tile surfaces, grout lines and countertops clean and fresh. We can boldly go
                        where bottled cleaners and household mops have never gone before!
                    </p>
                    <p className="mb-4">
                        What makes tile cleaning and grout cleaning so difficult? Dirt and
                        contaminants build up over time, making your tiles look dull, and causing
                        grout to darken and appear discolored. Home cleaning methods simply can't
                        get at the built-up, ground-in dirt that has settled in hard-to-reach
                        places. Dirt trapped in the pores of tile and grout is especially difficult
                        to remove with traditional cleaning solutions. Thankfully, Jake’s Steamer
                        powerful truck-mounted cleaning system safely cleans floors, showers, and
                        countertops by quickly removing dirt and contaminants. Our Tile Cleaning and
                        Grout Cleaning process uses heat, a specialized cleaning solution, and
                        vacuum power to remove the dirt that homeowners can't.
                    </p>
                    <p className="mb-4">
                        We complete the job with a high-pressure rinse.After cleaning your tile and
                        grout, our professional technicians will apply a penetrating sealer to
                        protect grout against mildew and staining for up to two years. And basic
                        Grout Cleaning isn't the only service we provide. If you have colored grout
                        in your kitchen or bathroom or between other tile surfaces, Jake’s steamer
                        Tile Cleaning service will safely get ceramic and porcelain tiled surfaces
                        sparkling again! And if your tile is made of natural material such as
                        granite, marble, slate, travertine or Saltillo, no problem!
                    </p>
                </div>
            </article>
        </>
    );
}
