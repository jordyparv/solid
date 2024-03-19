import React, { useState } from 'react'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helperfunctions'
import TagIcon from '../TagIcon'
export default function BlogListCard({ data }: { data: any }) {
    return (
        <div>
            <p className="pt-12 mb-3 text-sm font-normal text-gray-500 flex gap-2 items-center">

                <TagIcon text={data?.author} />
                {formatPublishDate(data?.publishedAt)}

            </p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-100 md:text-3xl">
                <Link href="#" className="text-gray-100 hover:text-yellow-500">
                    {data?.title}
                </Link>
            </h2>
            <p className={`text-justify mb-4 text-base font-normal text-white/50 line-clamp-1`}>
                {data?.description}
            </p>
            <p className={`text-justify mb-4 text-base font-normal text-white line-clamp-4`}>
                {data?.content}
            </p>
            <Link className="btn btn-light btn-sm" href={`/post/${data?.title}`}
            >
                Continue Reading
            </Link>
        </div>
    )
}
