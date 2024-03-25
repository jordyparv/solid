import React from 'react'
import BlogCard from './BlogCard'
import Card from './Card'
import ArticleCard from '../Article/ArticleCard'
import SingleBlogCard from './SingleBlogCard'
import SideCard from '../SideCard'
import { ArticlePropsType } from '@/interface'
import Link from 'next/link'

const getSideCard = (data: ArticlePropsType, type: string) => ({
    'card': <Card data={data} key={data._id} />,
    'sideCard': < SideCard data={data} key={data._id} />,
    'blog': <BlogCard data={data} key={data._id} />
})[type]


export default function BlogContainer({ data, cardsData, title }: { data: ArticlePropsType[], cardsData: ArticlePropsType[], title?: string }) {


    return (
        <div className='mb-10'>
            <div className='bg-black/50 backdrop-blur sticky top-0 z-50 '>
                {title &&
                    <h2 className="uppercase border-l-4 border-l-yellow-500 pl-2 flex text-white/80 items-center gap-2 px-4 mx-auto max-w-7xl py-4 text-2xl font-extrabold leading-tight md:text-4xl">
                        {title}
                    </h2>
                }
            </div>
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-8 px-4 py-4 md:py-14 mx-auto max-w-7xl pb-20">
                <div className="w-full xl:w-5/6">
                    <div className="flex flex-col space-y-16">
                        {data?.length > 0 && data?.map((item: any) =>
                            item?.description && item?.urlToImage ? <BlogCard key={item._id} data={item} /> : null
                        )}
                    </div>
                    <div className="pt-10 mt-10">
                        <Link href="/blogs" className="w-full border border-yellow-500 p-3 hover:bg-primary hover:text-black transition-all md:w-auto">
                            Load More
                        </Link>
                    </div>
                </div>
                <div className='hidden md:block space-y-4'>
                    {/* <h4 className='text-2xl mb-4  text-white/70'></h4> */}
                    {cardsData?.length > 0 && cardsData.map((item: ArticlePropsType) =>
                        getSideCard(item, item?.postType ?? '')
                    )}
                </div>
            </section>
        </div>
    )
}
