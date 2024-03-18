import React from 'react'
import TagIcon from '../TagIcon'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

export default function ArticleCard({ data }: { data: { [key: string]: any } }) {
    let date = new Date(data?.publishedAt).toLocaleString('in-en')?.split(',')[0]
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <img
                src={data?.urlToImage ? data.urlToImage : ''}
                className="object-cover aspect-video col-span-1 bg-center rounded"
                alt={data?.title && data.title}
                loading="lazy"
            />
            <div className="col-span-1 ">

                <h2 className="mb-2 text-xl font-extrabold leading-snug line-clamp-3">
                    <a href="#" className="hover:text-yellow-500">
                        {data?.title && data.title}
                    </a>
                </h2>
                <div className='mb-2 flex items-center gap-2'>
                    <TagIcon text={data?.author ?? ''} />
                    <span className="text-sm font-normal text-white/50 flex items-center gap-2">
                        <CalendarDaysIcon className='size-4 text-white/50' />
                        {date}
                    </span>
                </div>
                <p className="text-sm font-normal text-white/50 text-justify line-clamp-3">
                    {data?.description && data.description}
                </p>
                <a href="#" className="w-full z-0 text-sm hover:text-yellow-500 md:w-auto font-medium">
                    Read More
                </a>
            </div>
        </div>
    )
}
