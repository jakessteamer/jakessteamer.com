import Image from 'next/image';
import { PageSeo } from '../components/SEO';
import siteMetadata from '../data/siteMetadata.json';

export default function StainAndOdorRemoval() {
    return (
        <>
            <PageSeo
                title="Stain and Odor Removal"
                description="Jake's Steamer sanitizes and deodorizes carpets and upholstered furniture to completely eliminate stains and urine odors. Jake’s freshens the carpet by treating pet odors and restoring the original freshness and texture."
                url={`${siteMetadata.siteUrl}/StainAndOdorRemoval`}
            />
            <div className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
                <header>
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
                        Stain and Odor Removal
                    </h1>
                </header>

                <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <Image
                        alt="Mountains"
                        className="rounded"
                        src="/images/stain-and-odor-removal.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <main className="prose dark:prose-dark max-w-none w-full mt-12">
                    <p>
                        For many dog and cat owners, pet odor removal from carpets is an unfortunate
                        fact of life. Puppies and kittens have a tendency to mess up flooring quite
                        a bit before they are properly trained, and by the time they’re going
                        outside or in the litter box, the floor may resemble a warzone. There are,
                        however, a few ways a homeowner can wipe out the smells and stains that
                        animals leave behind. In some cases, a professional may be needed to handle
                        a particularly difficult and soiled situation.
                    </p>
                    <p>
                        The first thing to do when attempting pet odor removal is to locate the
                        problem area on the carpet. This is often easier said than done, as dark
                        flooring can make the area practically invisible. If finding the spot is too
                        hard to do with the naked eye, illuminate the area with a black light. This
                        type of bulb will highlight areas where Fluffy or Spot have been doing their
                        business and will make give a starting spot when it comes to tackling the
                        problem. Another way to track down soiled spots is to watch how other
                        animals track through the home. If there are multiple dogs or cats in the
                        house, they will stop and thoroughly investigate and sniff any area where
                        other animals have evacuated. Animals have a tendency to use the bathroom
                        where they detect the scent of urine or feces, so the problem could snowball
                        and training the pup or kitten will be that much more difficult.
                    </p>
                    <p>
                        Pet odor removal must also be done immediately because if the soiled patch
                        of carpet is allowed to sit for too long, it will require more dramatic
                        methods to get rid of it. If the animals are allowed to soil the flooring
                        for weeks at a time, and the fabric is not cleaned thoroughly every time,
                        the carpet may need to be replaced.The best way to approach pet odor removal
                        is to clean from the outside of the stain in. Starting from the center may
                        push the stain out further and deeper into the flooring. Scrub inward with a
                        bristle brush and paper towels. Use the paper towels to absorb liquid, and
                        don’t scrub with them, as they may tear and get intertwined with carpet
                        fibers. Urine odor removal requires six separate steps in order to ensure
                        successful and complete removal. Three of these steps involve odor control
                        chemicals and three involve rinsing and removing liquids.
                    </p>
                    <h1>
                        These steps must be completed in the order written and ALL steps must be
                        done to ensure that you have broken down and removed the all of the
                        different sources of the odor involved in urine.
                    </h1>
                    <ol>
                        <li>
                            1.Totally saturate the area with a Preconditioner to break down the uric
                            salts. Allow at least 10 minutes of dwell time to completely dissolve
                            the salts.
                        </li>
                        <li>
                            2.Apply the Water Claw to the area and vacuum the liquid out. While the
                            vacuum is running, flush a bucket of warm water around the claw to flush
                            excess salt residues away.
                        </li>
                        <li>
                            3.Totally saturate the area with Odor Eliminator. Allow 45 minutes of
                            dwell time, giving the enzymes time to fully digest the proteins and the
                            lipids (fats and oils) involved in the urine deposit.{' '}
                        </li>
                        <li>
                            4.Apply the Water Claw to the area and vacuum the liquid out. While the
                            vacuum is running, flush a bucket of warm water around the claw to flush
                            out the enzymes
                        </li>
                        <li>
                            5.Totally saturate the area with Fresh Wave Air and Surface Liquid.
                            Allow 5 minutes dwell time.
                        </li>
                        <li>
                            6.Apply the Water Claw to the area and remove as much liquid as possible
                            until no more moisture is visible through the sight plastic.
                        </li>
                    </ol>
                </main>
            </div>
        </>
    );
}
