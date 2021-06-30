import React from "react";

export default function NavMenuOverlay(isNavMenuOpen) {
    return (
        <div
            className={`${
                isNavMenuOpen ? "flex opacity-100 bg-blue-600" : "hidden opacity-0"
            } flex-col h-screen fixed top-0 bottom-0 left-0 right-0 pt-20 overflow-scroll z-40`}>
            <div id="nav-links-content" className="flex flex-col  lg:flex-row  lg:items-center text-white">
                <a href="/" className="text-primary font-semibold px-3 py-4">
                    Home
                </a>
                <a href="/CarpetCleaning" className="text-white px-3 py-4">
                    Carpet&nbsp;Cleaning
                </a>
                <a href="/AirDuctCleaning" className="text-white px-3 py-4">
                    Air&nbsp;Duct&nbsp;Cleaning
                </a>

                <a href="/WaterDamageRestoration" className="text-white px-3 py-4">
                    Emergency&nbsp;Flood
                </a>

                <a href="/StainAndOdorRemoval" className="text-white px-3 py-4">
                    Pet&nbsp;Stain&nbsp;and&nbsp;Odor&nbsp;Removal
                </a>

                <a href="/TileAndGroutCleaning" className="text-white px-3 py-4">
                    Tile&nbsp;and&nbsp;Grout&nbsp;Cleaning
                </a>
                <a href="/UpholsteryCleaning" className="text-white px-3 py-4">
                    Upholstery&nbsp;Cleaning
                </a>
            </div>
        </div>
    );
}
