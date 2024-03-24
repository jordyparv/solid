import React from 'react'
import TagIcon from '../TagIcon'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helper-functions'
import { ArticlePropsType } from '@/interface'

export default function ArticleCard({ data }: { data: ArticlePropsType }) {

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
                    <Link href={`/post/${data?.slug}`} className="hover:text-primary">
                        {data?.title && data.title}
                    </Link>
                </h2>
                <div className='mb-2'>
                    <div className='flex flex-wrap gap-2'>
                        {data.keywords && data.keywords?.length > 0 && data.keywords.slice(0, 3).map((item: string, idx: number) =>
                            <TagIcon text={item} key={item + idx} />
                        )}
                    </div>
                    <p className="text-sm font-normal text-white/50 mt-1">
                        {data?.author?.concat(' - ') ?? ''}
                        {formatPublishDate(data?.publishedAt)}
                    </p>
                </div>
                <p className="text-sm font-normal text-white/50 text-justify line-clamp-3">
                    {data?.description && data.description}
                </p>
                <Link href={`/post/${data?.slug}`} className="w-full z-0 text-sm hover:text-primary md:w-auto font-medium">
                    Read More
                </Link>
            </div>
        </div>
    )
}
