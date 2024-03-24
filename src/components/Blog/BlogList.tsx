import React from 'react'
import BlogListCard from './BlogListCard'
import { ArticlePropsType } from '@/interface'
import Link from 'next/link'

export default function BlogList({ data, title, Element }: { data: ArticlePropsType[], title?: string, Element?: React.FunctionComponent<any> }) {


    return (
        <section className="w-full px-4 mx-auto max-w-7xl">
            <h1 className='my-10 text-2xl md:text-4xl font-extrabold'>{title && title}</h1>
            <div className="flex flex-col space-y-12 mb-10">
                {data?.length > 0 && data.map((item: any) => {
                    return Element && <Element data={item} key={item._id} />
                }
                )}
            </div>
            {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <Link href="#" className="w-full rounded-full btn bg-light btn-xl md:w-auto">
                    Previous Page
                </Link>
                <Link href="#" className="w-full rounded-full btn btn-primary btn-xl text-gray-900 md:w-auto">
                    Next Page
                </Link>
            </div> */}
        </section>

    )
}
