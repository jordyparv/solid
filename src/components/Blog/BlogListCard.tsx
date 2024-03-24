import React, { useState } from 'react'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helper-functions'
import TagIcon from '../TagIcon'
import { ArticlePropsType } from '@/interface'
export default function BlogListCard({ data }: { data: ArticlePropsType }) {
    return (
        <div>

            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-100 md:text-3xl">
                <Link href={`/post/${data?.slug}`} className="text-gray-100 hover:text-primary">
                    {data?.title}
                </Link>
            </h2>
            <p className="mb-3 text-md font-normal text-gray-500 text-right">
                <span className='text-md'>
                    {data?.author?.concat(' - ') ?? ''}
                </span>
                {formatPublishDate(data?.publishedAt)}
            </p>
            <div className='flex gap-2 flex-wrap'>
                {data.keywords && data.keywords?.length > 0 && data.keywords?.map((item, idx) =>
                    <TagIcon text={item} key={item + idx} />)}
            </div>
            <p className={`text-justify mb-4 text-md font-normal text-white/50 line-clamp-2`}>
                {data?.description}
            </p>


            <p className={`text-justify mb-4 text-lg font-normal text-white line-clamp-4`}>
                {data?.content}
            </p>
            <Link className="btn btn-light btn-sm" href={`/post/${data?.slug}`}
            >
                Continue Reading
            </Link>
        </div >
    )
}
