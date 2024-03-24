import React from 'react'
import Card from './Blog/Card'
import SingleBlogCard from './Blog/SingleBlogCard'
import Header from './Header'

export default function Blogs({ data }: { data: { [key: string]: any } }) {

    return (

        <section className="px-4 mx-auto max-w-7xl mb-20 border-b border-b-white/50 pb-20">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight">
                New
            </h2>
            {/* <p className="mb-20 text-lg">
                Comes directly from the desk of engineers, creators and managers at Skcript.
            </p> */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {data?.length > 0 && data.map((item: any) =>
                    <Card key={item._id} data={item} />
                )}

            </div>

        </section>

    )
}
