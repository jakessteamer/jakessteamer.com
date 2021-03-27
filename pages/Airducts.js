import Image from 'next/image';
import Container from '../components/Container';

export default function Airducts() {
  return (
    <Container>
      <article className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
          Air Duct Cleaning
        </h1>
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Clean Carpet"
              layout="fill"
              src="/images/carpets/carpet-5-640x640-md.jpg"
            />
          </div>
        </div> */}
        <div style={{ position: 'relative', width: '100%', height: '640px' }}>
          <Image
            alt="Mountains"
            className="rounded"
            src="/images/airducts/airduct.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="prose dark:prose-dark max-w-none w-full mt-12">
          <h1>Air Duct Cleaning Inspection</h1>
          <p>
            A successful air duct cleaning requires an air duct inspection. Our
            air duct cleaning inspection determines if cleaning is needed and to
            what extent. An air duct leakage test is a foundational step for
            proper air duct cleaning. We report back to you before moving
            forward with a cleaning. The air duct cleaning inspection ensures
            your air ducts are properly cleaned. Dirty ducts can cost you in
            additional repair, maintenance, and early replacement of air
            conditioning and heating system.
          </p>
          <h1>Cleaning</h1>
          <p>
            Clean & healthy air quality require air duct cleaning. Our air duct
            cleaning take advantage proper cleaning methods that include an
            anti-bacterial coating. We use patented equipment to ensure every
            part of your duct system is cleaned properly. All contaminants
            collected are disposed of safely. We use an EPA registered biocide
            fog agent to destroy bacteria, germs, mold, and mildew spores. A
            sealant and an odor kill deodorizer is also applied. Before the air
            duct cleaning is finished, your filters will be replaced and the
            registers and the blower unit will be cleaned.
          </p>
          <h1>Air Duct Cleaning</h1>
          <p>
            According to the EPA, dust in your ventilation systems can lead to
            your indoor air quality being 70 to 100 times more polluted than
            outdoors. Contaminants that can find their way into your ductwork
            are: bacteria, chemical residue, dust, mildew, pollen, viruses, and
            other airborne contaminants. Americans spend 90% of their time
            indoors (American Lung Association). Allergies, asthma, respiratory
            illnesses, or even frequent cold symptoms could be the result of a
            dirty duct system. Have you had your air ducts cleaned recently? If
            not schedule a cleaning today!
          </p>
        </div>
      </article>
    </Container>
  );
}
