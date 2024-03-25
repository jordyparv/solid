import React from 'react'
import Card from './Blog/Card'
import SingleBlogCard from './Blog/SingleBlogCard'
import Header from './Header'
import { ArticlePropsType } from '@/interface'
import Link from 'next/link'

export default function Blogs({ data, title }: { data: ArticlePropsType[], title?: string }) {

    return (

        <section className="px-4 mx-auto max-w-7xl mb-10">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight">
                {title ?? ''}
            </h2>
            {/* <p className="mb-20 text-lg">
                Comes directly from the desk of engineers, creators and managers at Skcript.
            </p> */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {data?.length > 0 && data.map((item: any) =>
                    <Card key={item._id} data={item} />
                )}
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/card/post'} className='btn btn-lg text-primary'>Load More</Link>
            </div>
        </section>

    )
}
