export default function Footer() {
  return (
    <footer className="bg-brand-blue">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1">
            <h3 className="text-xl text-white-800 font-bold leading-none mb-3">
              Service Areas:
            </h3>
            <p>Gaines County</p>
            <p>Andrews County</p>
            <p>Midland County</p>
            <p>Yoakum County</p>
            <p>Dawson County</p>
            <p>Terry County</p>
          </div>
          <div className="flex-1">
            <div className="flex flex-col contact-info">
              <h3 className="uppercase text-xl text-white-800 font-bold leading-none mb-3">
                Jake&apos;s Steamer
              </h3>
              <address>606 SE 4th St, Seminole, TX 79360</address>
              <a className="" href="tel:+14328474600">
                432-847-4600
              </a>
              <a href="mailto:jakessteamer@gmail.com">jakessteamer@gmail.com</a>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="uppercase text-xl text-white-800 font-bold leading-none mb-3">
              Social
            </h3>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.facebook.com/jakessteamer01/"
                  className="no-underline hover:underline text-white-800 hover:text-pink-500"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="hours-of-operation">
              <h3 className="uppercase text-xl text-white-800 font-bold leading-none mb-3">
                Hours:
              </h3>
              <p>Sunday: Closed</p>
              <p>Monday - Friday: 8:00AM-6:00PM</p>
              <p>Saturday: Saturday 8:00AM-12:00AM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
