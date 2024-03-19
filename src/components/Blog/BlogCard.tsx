import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'
import TagIcon from '../TagIcon'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helperfunctions'
export default function BlogCard({ data }: { data: { [key: string]: any } }) {

    return (
        <div className='aspect-video'>
            <Link href="#">
                <div className='w-full mb-5 overflow-hidden'>
                    <img
                        src={data?.urlToImage ? data.urlToImage : ''}
                        className="object-cover bg-center rounded"
                        alt={data?.title && data.title}
                        loading="lazy"
                    />
                </div>
            </Link>
            <h2 className="mb-2 text-md font-semibold ">
                <Link href="#" className=" hover:text-yellow-500">
                    {data?.title && data.title}
                </Link>
            </h2>
            <p className="mb-3 text-sm font-normal text-white/50 line-clamp-3">
                {data?.description && data.description}
            </p>
            <p className="mb-3 text-sm font-normal text-white/50 flex gap-2 items-center">
                <TagIcon text={data?.author ?? ''} />
                <CalendarDaysIcon className='w-4 h-4 text-white/50' />
                {formatPublishDate(data?.publishedAt)}
            </p>
        </div>
    )
}
