/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import { PageSeo } from '../components/SEO';
import siteMetadata from '../data/siteMetadata.json';

export default function CarpetCleaning() {
    return (
        <>
            <PageSeo
                title={`${siteMetadata.openGraphTitle}`}
                description={`${siteMetadata.description}`}
                url={`${siteMetadata.siteUrl}/CarpetCleaning`}
            />
            <article className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
                    Carpet Cleaning
                </h1>
                <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <Image
                        alt="Mountains"
                        className="rounded"
                        src="/images/carpets/carpet-5-640x640-md.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="prose dark:prose-dark max-w-none w-full mt-12">
                    <p>
                        The first important professional method to clean your carpet is Steam
                        cleaning. Here we are using the steam of detergent solution to clean the
                        carpets. To employ Steam cleaning method we need to have a truck mount unit
                        that has rotary brushes which apply hot steam in to the carpet and remove
                        dust and soil. The success of steam cleaning rely on the technicians
                        experience and skill with the quality of truck mount machine.The machine
                        should keep the detergent solution in a proper temperature to get steam
                        continuously and the pressure of steam spraying should be controllable at
                        any time. When the hot steam applied on the carpet the soil and dust
                        particles on the carpet will be removed. It is very easy to clean the
                        removed soil particle from the carpet.
                    </p>
                    <p>
                        Although regular vacuuming can remove dry soil and debris from your
                        carpeting, it leaves behind oily soils and particles that are produced from
                        cooking vapors, pets, and dirt tracked in from outside the home. These oily
                        contaminants that are left behind can cause your carpet to dull and fade. As
                        the contaminants build up they become more difficult to remove. Regular deep
                        cleaning of the carpet can prevent the excessive build up of contaminants
                        and keep your carpets looking fresh and clean. Regular cleaning of your
                        carpets also helps improve the air quality in your home by removing pet
                        hair, dust mites, and other allergens that thrive deep in the carpet.
                    </p>
                    <h1>WHAT CAN YOU DO TO PREPARE FOR YOUR CARPET CLEANING:</h1>
                    <p>
                        Move small items and breakables from the area to be cleaned. Get ready to be
                        amazed by the Rotovac.
                    </p>
                    <h1>WHAT YOU CAN EXPECT YOUR CLEANING TECHNICIAN TO DO:</h1>
                    <p>
                        <b>Pre-inspection:</b> We will evaluate your carpet’s needs. Every carpet
                        must be treated differently. We will decide what will be the best method for
                        cleaning your carpet. You will know up front what we can and can’t do. This
                        way there are no surprises.
                    </p>
                    <p>
                        <b>Moving Furniture:</b> When necessary we will move and replace small
                        furniture in its original position.
                    </p>
                    <p>
                        <b>Pre-treatment:</b> We treat spots and stains as necessary and apply a
                        cleaning solution to the entire carpet.
                    </p>
                    <p>
                        <b>Cleaning:</b> We use our state-of-the-art Rotovac equipment for a fast
                        and thorough deep cleaning of your carpet.
                    </p>
                    <p>
                        <b>Post-inspection:</b> Once the project is completed, we re-inspect the
                        carpet with you to ensure that all the work was done to your satisfaction.
                    </p>
                    <p>
                        <b>Protect & Groom:</b> When necessary we will place blocks or foil under
                        furniture legs to protect them during the drying process and groom the
                        carpet for a clean inviting look.
                    </p>
                    <p>
                        <b>What you should do after the carpet cleaning:</b> To decrease drying time
                        try to keep the room temperature about 72 degrees and use fans to circulate
                        the air around the cleaned carpet.
                    </p>
                </div>
            </article>
        </>
    );
}
