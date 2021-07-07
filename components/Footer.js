/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1">
            <p className="text-xl text-white font-bold leading-none mb-3">
              Service Areas:
            </p>
            <div className="h-1 w-1/2 bg-blue-500 rounded h-underline mb-8" />
            <p className="leading-relaxed text-xl text-white">Gaines County</p>
            <p className="leading-relaxed text-xl text-white">Andrews County</p>
            <p className="leading-relaxed text-xl text-white">Midland County</p>
            <p className="leading-relaxed text-xl text-white">Yoakum County</p>
            <p className="leading-relaxed text-xl text-white">Dawson County</p>
            <p className="leading-relaxed text-xl text-white">Terry County</p>
          </div>
          <div className="flex-1">
            <div className="flex flex-col contact-info">
              <p className="uppercase text-xl text-white font-bold leading-none mb-3">
                Jake's Steamer
              </p>
              <address className="leading-relaxed text-xl">
                606 SE 4th St, Seminole, TX 79360
              </address>
              <a className="leading-relaxed text-xl" href="tel:+14328474600">
                432-847-4600
              </a>
              <a
                href="mailto:jakessteamer@gmail.com"
                className="leading-relaxed text-xl">
                jakessteamer@gmail.com
              </a>
            </div>
          </div>
          <div className="flex-1">
            <p className="uppercase text-xl text-white font-bold leading-none mb-3">
              Social
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/jakessteamer01/"
                  className="leading-relaxed text-xl no-underline hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="hours-of-operation">
              <p className="uppercase text-xl text-white font-bold leading-none mb-3">
                Hours:
              </p>
              <p className="leading-relaxed text-xl text-white">
                Sunday: Closed
              </p>
              <p className="leading-relaxed text-xl text-white">
                Monday - Friday: 8:00AM-6:00PM
              </p>
              <p className="leading-relaxed text-xl text-white">
                Saturday: Saturday 8:00AM-12:00AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
