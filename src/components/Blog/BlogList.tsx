import React from 'react'
import BlogListCard from './BlogListCard'

export default function BlogList() {
    return (
        <section className="w-full px-4 mx-auto max-w-7xl">
            <h1 className='mt-10 text-2xl font-extrabold'>Related </h1>
            <div className="flex flex-col space-y-12 divide-y divide-gray-200 mb-10">
                <BlogListCard />
                <BlogListCard />
                <BlogListCard />
            </div>
            {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
                <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
                    Previous Page
                </a>
                <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
                    Next Page
                </a>
            </div> */}
        </section>

    )
}
