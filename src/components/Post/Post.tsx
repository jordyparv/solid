
import React from 'react'
import TagIcon from '../TagIcon'
import { FaceBookIcon, ShareIcon, TwitterIcon, WhatsappIcon } from '@/assets/icons';
import Comments from '../comments';
import { formatPublishDate } from '@/utils/helperfunctions';

export default function Post({ data }: { data: { [key: string]: any } }) {
    let date = formatPublishDate(data?.publishedAt)
    return (
        <article
            className='px-4 mx-auto'
            itemID='#'
        >
            <div className='w-full mx-auto mb-12 text-left relative'>

                <img
                    src={data?.urlToImage}
                    className='object-cover w-full h-64 bg-center rounded-lg aspect-video'
                    alt={data?.title}
                />
                <div className='my-2 flex gap-3'>
                    <button className='size-10'>
                        <span className=''>
                            <FaceBookIcon />
                        </span>
                    </button>
                    <button className='size-10'>
                        <span className='size-10'>
                            <TwitterIcon />
                        </span>
                    </button>
                    <button className='size-10'>
                        <span className='size-10'>
                            <WhatsappIcon />
                        </span>
                    </button>
                </div>
                <div className=''>
                    <div className='flex gap-2 items-center'>
                        <TagIcon text={data?.author} />
                        <p className='text-sm text-white/50'>{date}</p>
                    </div>
                    <h1
                        className='mb-3 text-3xl font-bold leading-tight md:text-4xl mt-6 border-l-8 border-l-yellow-500 pl-2'
                        itemProp='headline'
                        title={data?.title}
                    >
                        {data?.title}
                    </h1>
                </div>
                <div className='flex mb-6 space-x-2'>
                    <TagIcon text='CSS' />
                    <TagIcon text='Tailwind' />
                    <TagIcon text='AlpineJS' />
                </div>
            </div>

            <div className='w-full mx-auto'>
                <div className='text-justify text-white/60'>
                    {data?.description}
                </div>
                <div className='text-lg text-justify text-white/90 mt-10'>
                    {data?.content}
                </div>
            </div>
            <Comments post={{ id: data?._id, title: data?.title }} />
        </article >
    );
}
