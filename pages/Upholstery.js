/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Container from '../components/Container';

export default function CarpetsAndUpholstery() {
  return (
    <Container>
      <article className="flex flex-col justify-center w-9/12 mx-auto mb-16 items-start mt-15vh">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight my-12 text-black dark:text-white">
          Upholstery Cleaning
        </h1>
        <div style={{ position: 'relative', width: '100%', height: '640px' }}>
          <Image
            alt="Mountains"
            className="rounded"
            src="/images/upholstery/upholstery-sp1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="prose dark:prose-dark max-w-none w-full mt-12">
          <h1>Taking Care of your Upholstery </h1>
          <p>
            Since your upholstered furniture generally cost money, they can be
            considered as great investments that add to a household. Like any
            other investment, they should be taken cared of, since they will
            only remain beautiful as long as we do our part in making sure that
            they remain beautiful.
          </p>
          <h1>
            Here are tips to make sure that your upholstery remains clean and
            beautiful.
          </h1>
          <p>
            Prevention is always the best maintenance for anything, and that
            includes upholstery! Keep it safe from any spills or sharp objects.
            When you are sitting or lying down on your upholstered furniture,
            remember to refrain from doing any motion that can stretch the
            fabric, such as sudden stretching or kicking.
          </p>
        </div>
      </article>
    </Container>
  );
}
