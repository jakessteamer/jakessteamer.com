/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-const */

export default function Nav() {
    return (
        <nav
            id="site-navigation"
            className="top-0 z-50 bg-white flex-grow fixed w-screen  flex flex-nowrap items-center justify-between bg-transparent px-4">
            <a className="flex-shrink-0" href="#">
                <img src="/images/logos/jakessteamer-company-logo-variant-1-150w-50h.png" alt="" />
            </a>

            <div id="navMenu" className="hidden lg:flex justify-center">
                <ul className="flex flex-grow text-xl leading-6 font-medium ">
                    <li className="flex items-center lg:px-1">
                        <a className="hover:text-gray-600 transition-colors duration-200 py-2 px-2" href="#">
                            <span className="block">Carpet</span>
                            <span className="block">Cleaning</span>
                        </a>
                    </li>
                    <li className="flex items-center lg:px-1">
                        <a className="flex-grow hover:text-gray-600 transition-colors duration-200 py-2 px-2" href="#">
                            <span className="block">Air Duct</span>
                            <span className="block">Cleaning</span>
                        </a>
                    </li>
                    <li className="flex items-center lg:px-1">
                        <a className="hover:text-gray-600 transition-colors duration-200 py-2 px-4" href="#">
                            <span className="block">Emergency</span>
                            <span className="block">Flood</span>
                        </a>
                    </li>
                    <li className="flex items-center lg:px-1">
                        <a className="hover:text-gray-600 transition-colors duration-200 py-2 px-2" href="#">
                            <span className="block">Pet Stain</span>
                            <span className="block">Odor Removal</span>
                        </a>
                    </li>
                    <li className="flex items-center lg:px-1">
                        <a className="hover:text-gray-600 transition-colors duration-200 py-2 px-2" href="#">
                            <span className="block">Tile & Grout</span>
                            <span className="block">Cleaning</span>
                        </a>
                    </li>
                    <li className="flex items-center lg:px-1">
                        <a className="hover:text-gray-600 transition-colors duration-200 py-2 px-2" href="#">
                            <span className="block">Upholstery</span>
                            <span className="block">Cleaning</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <a
                    href="https://book.housecallpro.com/book/Jakes-Steamer/e5fb241079164c83aa85e58e9aa1b12b"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                    className="flex no-wrap scheduleNowBtn lg:mr-6 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600">
                    <span>Schedule</span>
                    <span>Now!</span>
                </a>
            </div>
        </nav>
    );
}
