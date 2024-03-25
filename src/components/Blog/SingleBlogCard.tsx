import React from 'react'
import TagIcon from '../TagIcon'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import Header from '../Header'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helper-functions'
import { ArticlePropsType } from '@/interface'
export default function SingleBlogCard({ data }: { data: ArticlePropsType }) {

    return (
        <div className="relative col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-2 xl:col-span-3">
            <Header />
            <Link href={`/post/${data?.slug}`}>

                <img
                    src={data?.urlToImage && data.urlToImage}
                    className="object-cover aspect-video mb-5 bg-center w-full"
                    alt={data?.title && data.title}
                    loading="lazy"
                />
            </Link>
            <div className='pb-4 md:absolute bottom-0 bg-gradient-to-b  from-transparent via-black to-black w-full'>
                <div className='px-4 mx-auto max-w-7xl'>
                    <h2 className="mb-2 text-2xl md:text-4xl font-bold leading-snug text-gray-900">
                        <Link href={`/post/${data?.slug}`} className="text-gray-100 hover:text-primary border-b ">
                            {data?.title && data.title}
                        </Link>
                    </h2>
                    <div className='flex items-center justify-between my-4'>
                        <TagIcon text={data?.author ?? ''} />
                        <span className="text-sm text-white/50 text-right flex items-center gap-2">
                            <CalendarDaysIcon className='size-4 text-white/50' />
                            {formatPublishDate(data?.publishedAt)}
                        </span>
                    </div>
                    <p className="mb-4 text-sm font-normal text-white/80">
                        {data?.description && data.description}
                    </p>
                </div>
            </div>
        </div>

    )
}
