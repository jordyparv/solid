import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'
import TagIcon from '../TagIcon'

export default function BlogCard({ data }: { data: { [key: string]: any } }) {
    let date = new Date(data?.publishedAt).toLocaleString('in-en')?.split(',')[0]
    return (
        <div className='aspect-video'>
            <a href="#">
                <div className='w-full mb-5 overflow-hidden'>
                    <img
                        src={data?.urlToImage ? data.urlToImage : ''}
                        className="object-cover bg-center rounded"
                        alt={data?.title && data.title}
                        loading="lazy"
                    />
                </div>
            </a>
            <h2 className="mb-2 text-md font-semibold ">
                <a href="#" className=" hover:text-yellow-500">
                    {data?.title && data.title}
                </a>
            </h2>
            <p className="mb-3 text-sm font-normal text-white/50 line-clamp-3">
                {data?.description && data.description}
            </p>
            <p className="mb-3 text-sm font-normal text-white/50 flex gap-2 items-center">
                <TagIcon text={data?.author ?? ''} />
                <CalendarDaysIcon className='w-4 h-4 text-white/50' />
                {date}
            </p>
        </div>
    )
}
