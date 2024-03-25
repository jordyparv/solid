import React from 'react'
import ArticleCard from './ArticleCard'
import Card from '../Blog/Card'
import { ArticlePropsType } from '@/interface'
import { getArticles } from '@/controller/getData'

export default async function Article({ data, title, cardData }: {
    data: ArticlePropsType[],
    cardData: ArticlePropsType[], title?: string
}) {

    return (
        <div className='mb-10 mx-auto max-w-7xl'>
            {title &&
                <div className='bg-black/30 backdrop-blur sticky top-0 z-50'>
                    <h2 className="uppercase font-extrabold border-l-4 border-l-primary pl-2 flex text-white items-center gap-2 px-4 mx-auto max-w-7xl py-4 text-2xl leading-tight md:text-4xl">
                        {title}
                    </h2>
                </div>
            }
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-8 px-4 py-4 md:py-14  pb-10">
                <div className="w-full xl:w-5/6">
                    <div className="flex flex-col space-y-16">
                        {data?.length > 0 && data.map((item: ArticlePropsType) =>
                            item?.description && item?.urlToImage && <ArticleCard key={item._id} data={item} />
                        )}

                    </div>
                    {/* <div className="pt-10 mt-10 border-t border-slate-900">
                        <Link href="/#" className="w-full border border-yellow-500 p-3 hover:bg-primary hover:text-black transition-all md:w-auto">
                            Load More
                        </Link>
                    </div> */}

                </div>
                <div className='hidden md:block space-y-4'>
                    <p className='text-base uppercase text-right'>Other post</p>
                    {cardData?.length > 0 && cardData?.map((item: ArticlePropsType) =>
                        <Card key={item._id} data={item} />
                    )}
                </div>
            </section>
        </div>
    )
}
