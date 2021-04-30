/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { PageSeo } from '../components/SEO';
import siteMetadata from '../data/siteMetadata.json';

export default function WaterDamageRestoration() {
    return (
        <>
            <PageSeo
                title="Water Damage Restoration"
                description="Every so often, leaks can cause floods. It’s important to call a professional water damage restoration specialist immediately. We can help you get back on track and offer the most comprehensive cleanup services in West Texas."
                url={`${siteMetadata.siteUrl}/WaterDamageRestoration`}
            />
            <article className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
                    Water Damage Restoration
                </h1>
                <div style={{ position: 'relative', width: '100%', height: '320px' }}>
                    <Image
                        alt="Water Damage"
                        className="rounded"
                        src="/images/water-damage-restoration/water-damage-restoration-600x600.jpg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="prose dark:prose-dark max-w-none w-full mt-12">
                    <h1>WATERPROOFING | 24/7 WATER DAMAGE EXPERTS</h1>
                    <p>
                        Jake's Steamer The Carpet Cleaner waterproofing services are committed to
                        providing you with true one-stop emergency water damage cleanup &
                        remediation services. Over the years we have developed protocol and
                        procedures that ensure that our response time is quick, and the work we
                        perform restores your property to better than pre-incident condition. We
                        happily serve both commercial and residential clients 24/7. Questions?
                        Please call.
                    </p>
                    <h1>LET US HANDLE YOUR INSURANCE ADJUSTER | QUESTIONS? CALL</h1>
                    <ul>
                        <li>Water proofing damage experts</li>
                        <li>Water extraction & remediation</li>
                        <li>Complete drying services</li>
                        <li>Carpet re-installation</li>
                        <li>Dry wall re-installation</li>
                        <li>Carpentry</li>
                        <li>Sheet rock re-installation</li>
                        <li>Base boards re-installation</li>
                        <li>Insulation re-installation</li>
                    </ul>
                </div>
            </article>
        </>
    );
}
