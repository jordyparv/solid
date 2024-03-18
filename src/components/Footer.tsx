import React from 'react'

export default function Footer() {
    return (
        <div className='border-t border-t-gray-900 bg-black text-white'>
            <footer className="px-4 py-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
                    <div className="col-span-3">
                        <a href="#" title="Hellon   ext Home Page" className="flex items-center">
                            <span className="font-extrabold text-2xl">Jordan</span>
                        </a>
                        <p className="my-4 text-xs leading-normal text-gray-300">
                            Hosted in the IN 🇮🇳, with <strong>no user tracking</strong> scripts.
                        </p>
                    </div>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Product
                        </p>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Features
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Pricing
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Feedback
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            FAQs
                        </a>
                    </nav>
                    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Support
                        </p>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Chat
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            {" "}
                            Email Support{" "}
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            GDPR
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            {" "}
                            Help{" "}
                        </a>
                    </nav>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Resources
                        </p>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Blog
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            {" "}
                            Twitter{" "}
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Alternatives
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Why feature vote?
                        </a>
                    </nav>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Company
                        </p>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            About Us
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Privacy
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Terms
                        </a>
                        <a
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-yellow-500"
                            href="#"
                        >
                            Status
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                    <p className="mb-2 text-xs text-left text-gray-300 md:mb-0">
                        Built by Product Managers, for Product Managers.
                    </p>
                    <p className="mb-0 text-xs text-left text-gray-300 md:mb-0">
                        Copyright © 2024 JORDAN
                    </p>
                </div>
            </footer>
        </div>
    )
}
