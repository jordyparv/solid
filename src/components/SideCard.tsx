import React from 'react'
import Link from 'next/link'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import TagIcon from './TagIcon'
import { formatPublishDate } from '@/utils/helper-functions'

export default function SideCard({ data }: { data: { [key: string]: any } }) {

    return (
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
            <Link href={`/post/${data?.slug}`}>

                <img
                    src={data?.urlToImage ? data.urlToImage : ''}
                    className="object-cover aspect-video mb-5 bg-center w-full rounded"
                    alt={data?.title && data.title}
                    loading="lazy"
                />
            </Link>

            <div className='mx-auto max-w-7xl '>
                <h2 className="mb-2 font-bold leading-snug text-gray-900 text-md md:text-xl">
                    <Link href={`/post/${data?.slug}`} className="text-gray-100 hover:text-primary border-b">
                        {data?.title && data.title}
                    </Link>
                </h2>
                <div className='flex flex-wrap gap-2'>
                    {data.keywords && data.keywords?.length > 0 && data.keywords.slice(0, 2).map((item: string, idx: number) =>
                        <TagIcon text={item} key={item + idx} />
                    )}
                </div>
                <div className='flex items-center justify-between my-4'>
                    <span className="text-sm text-white/50 text-right flex items-center gap-2">
                        <CalendarDaysIcon className='size-4 text-white/50' />
                        {formatPublishDate(data?.publishedAt)}
                    </span>
                </div>
                <p className="mb-4 text-sm font-normal text-white/50 line-clamp-2">
                    {data?.description && data.description}
                </p>
            </div>
        </div>

    )
}
