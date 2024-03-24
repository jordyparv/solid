import React from 'react'

export default function Custom404() {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl grid place-items-center min-h-screen">
            <div className="w-full mx-auto text-center lg:w-2/3">
                <h1 className="mb-4 text-6xl font-extrabold text-gray-50">404</h1>
                <p className="mb-3 text-xl font-bold text-gray-300 md:text-2xl">
                    Oh no! We couldn’t find the page you were looking for.
                </p>
                <p className="mb-3 text-lg  text-gray-400">
                    for blogs and the latest happenings, or go back to the
                    <a href="/" className="underline ml-1">
                        homepage
                    </a>
                    .
                </p>
            </div>
        </section>

    )
}
