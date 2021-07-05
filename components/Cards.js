import React from "react";

export default function Cards() {
    return (
        <div className="flex justify-center pt-20">
            <article className="m-2 font-sans leading-normal flex">
                {/* <!-- card container --> */}
                <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
                    <div className="relative h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                        <a href="#">
                            <img
                                alt="kid and mom on clean carpet"
                                sizes="100vw"
                                src="/images/kid-and-mom-on-carpet-high-def.jpg"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-95"
                            />
                        </a>
                    </div>

                    {/* <!-- card-content --> */}
                    <div className="px-6 py-4">
                        <h2 className="mb-2 font-black">Hello Tailwind!</h2>
                        <p className="mb-4 text-grey-dark text-sm">
                            Learning Tailwind is incredibly easy. The team has done a wonderful job with the
                            documentation. This is pretty amazing, I must say.
                        </p>

                        {/* <!-- button --> */}
                        <button
                            type="button"
                            className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                            Hey, click me.
                        </button>
                    </div>
                </div>
            </article>
            <article className="m-2 font-sans leading-normal flex">
                {/* <!-- card container --> */}
                <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
                    <div className="relative h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                        <a href="#">
                            <img
                                alt="kid and mom on clean carpet"
                                sizes="100vw"
                                src="/images/kid-and-mom-on-carpet-high-def.jpg"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-95"
                            />
                        </a>
                    </div>

                    {/* <!-- card-content --> */}
                    <div className="px-6 py-4">
                        <h2 className="mb-2 font-black">Hello Tailwind!</h2>
                        <p className="mb-4 text-grey-dark text-sm">
                            Learning Tailwind is incredibly easy. The team has done a wonderful job with the
                            documentation. This is pretty amazing, I must say.
                        </p>

                        {/* <!-- button --> */}
                        <button
                            type="button"
                            className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                            Hey, click me.
                        </button>
                    </div>
                </div>
            </article>
            <article className="m-2 font-sans leading-normal flex">
                {/* <!-- card container --> */}
                <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
                    <div className="relative h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                        <a href="#">
                            <img
                                alt="kid and mom on clean carpet"
                                sizes="100vw"
                                src="/images/kid-and-mom-on-carpet-high-def.jpg"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover opacity-95"
                            />
                        </a>
                    </div>

                    {/* <!-- card-content --> */}
                    <div className="px-6 py-4">
                        <h2 className="mb-2 font-black">Hello Tailwind!</h2>
                        <p className="mb-4 text-grey-dark text-sm">
                            Learning Tailwind is incredibly easy. The team has done a wonderful job with the
                            documentation. This is pretty amazing, I must say.
                        </p>

                        {/* <!-- button --> */}
                        <button
                            type="button"
                            className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
                            Hey, click me.
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}
