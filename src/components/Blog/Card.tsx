import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import TagIcon from '../TagIcon'

export default function Card({ data }: CardType) {
    let date = new Date(data?.publishedAt).toLocaleString('in-en')?.split(',')[0]
    // let publishedAt = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`

    return <div className={`relative rounded group aspect-square bg-cover bg-no-repeat bg-center`}
        style={{
            backgroundImage: `url(${data?.urlToImage ? data?.urlToImage : 'http://placehold.co/400'})`
        }}
    >
        <a href={`/post/${data?.title}`}>
            <div className="absolute z-0 size-full bg-gradient-to-b from-transparent to-black flex flex-col justify-end px-2">
                <h2 className="text-md text-white group-hover:text-yellow-500 font-medium line-clamp-2">
                    {data?.title && data.title}
                </h2>
                <div className="mt-2 flex gap-2 items-end justify-between pb-2 text-xs">
                    <TagIcon text={data?.author ?? ''} />
                    <span className="text-white/50 flex items-center gap-2">
                        <CalendarDaysIcon className='size-4 text-white/50' />
                        {date ?? ''}
                    </span>
                </div>
            </div>
        </a>
    </div>

}
interface CardType {
    [key: string]: any
}
