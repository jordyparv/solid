import React from 'react'
import Card from './Blog/Card'
import SingleBlogCard from './Blog/SingleBlogCard'
import Header from './Header'

export default function Blogs({ data }: { data: { [key: string]: any } }) {
    // console.log('dsaf', { data })
    return (

        <section className="px-4 mx-auto max-w-7xl mb-20 border-b border-b-white/50 pb-20">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight">
                Trending
            </h2>
            {/* <p className="mb-20 text-lg">
                    Comes directly from the desk of engineers, creators and managers at Skcript.
                </p> */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {data?.length > 0 && data.map((item: any) =>
                    <Card key={item._id} data={item} />
                )}

            </div>
            {/* <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
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
