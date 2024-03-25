import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        //border-t border-t-gray-900
        <div className=' bg-black text-white'>
            <footer className="px-4 py-12 mx-auto max-w-7xl">
                {/* <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
                    <div className="col-span-3">
                        <Link href="#" title="Hellon   ext Home Page" className="flex items-center">
                            <span className="font-extrabold text-2xl">Jordan</span>
                        </Link>
                        <p className="my-4 text-xs leading-normal text-gray-300">
                            Hosted in the IN 🇮🇳, with <strong>no user tracking</strong> scripts.
                        </p>
                    </div>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Product
                        </p>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Features
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Pricing
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Feedback
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            FAQs
                        </Link>
                    </nav>
                    <nav className="col-span-2 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Support
                        </p>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Chat
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            {" "}
                            Email Support{" "}
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            GDPR
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            {" "}
                            Help{" "}
                        </Link>
                    </nav>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Resources
                        </p>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Blog
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            {" "}
                            Twitter{" "}
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Alternatives
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Why feature vote?
                        </Link>
                    </nav>
                    <nav className="col-span-1 md:col-span-1 lg:col-span-2">
                        <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                            Company
                        </p>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            About Us
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Privacy
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Terms
                        </Link>
                        <Link
                            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
                            href="#"
                        >
                            Status
                        </Link>
                    </nav>
                </div> */}
                <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
                    <p className="mb-2 text-xs text-left text-gray-300 md:0">
                        Built by Parveen
                    </p>
                    <p className="text-xs text-left text-gray-300">
                        Copyright © 2024 SOLID
                    </p>
                </div>
            </footer>
        </div>
    )
}
