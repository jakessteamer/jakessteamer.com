/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function CTA() {
    return (
        <section className="mx-auto text-center py-6 bg-brand-blue">
            <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                Call Jake's for Your Mistakes!
            </h1>
            <div className="w-full mb-4">
                <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
            </div>
            <h2 className="my-4 font-bold leading-tight text-5xl">
                <a className="" href="tel:+14328474600">
                    432-847-4600
                </a>
            </h2>
            {/* <!-- <button
  class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
>
  Action!
</button> --> */}
        </section>
    );
}
