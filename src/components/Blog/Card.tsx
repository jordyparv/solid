import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import TagIcon from '../TagIcon'
import Link from 'next/link'
import { formatPublishDate } from '@/utils/helper-functions'
import { ArticlePropsType } from '@/interface'
export default function Card({ data }: { data: ArticlePropsType }) {

    // let publishedAt = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`

    return <div className={`relative rounded group aspect-square bg-cover bg-no-repeat bg-center transition-all hover:brightness-125`}
        style={{
            backgroundImage: `url(${data?.urlToImage ? data?.urlToImage : 'http://placehold.co/400'})`
        }}
    >
        <Link href={`/post/${data?.slug}`}>
            <div className="absolute z-0 size-full bg-gradient-to-b from-transparent to-black  flex flex-col justify-end px-2">
                <h2 className="text-md text-white group-hover:text-primary font-medium line-clamp-2">
                    {data?.title && data.title}
                </h2>
                <div className="flex gap-2 items-end justify-between flex-wrap text-xs mt-1">
                    {data.keywords && data?.keywords?.length > 0 && data?.keywords?.slice(0, 1).map((item: any, idx: number) =>
                        <TagIcon text={item} key={item + idx} />
                    )}
                    <p className='text-white/50'>{data?.author?.concat(' - ') ?? ''}
                        {formatPublishDate(data?.publishedAt)}
                    </p>
                </div>
            </div>
        </Link>
    </div>

}
