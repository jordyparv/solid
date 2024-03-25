import React from 'react'
import { FaceBookIcon, TwitterIcon, WhatsappIcon } from '@/assets/icons';
import { formatPublishDate } from '@/utils/helper-functions';
import { ArticlePropsType } from '@/interface';
import TagIcon from '@/components/TagIcon';
import Comments from '@/components/comments';
import { getPostBySlug } from '@/controller/getData';

export default async function Page({ params }: { params: { title: string } }) {
    const { title } = params
    const postSlug = decodeURIComponent(title)
    const { data } = await getPostBySlug(postSlug)
    return (
        <article
            className='px-4 mx-auto'
            itemID='#'
        >
            <div className='w-full mx-auto mb-12 text-left relative'>

                <img
                    src={data?.urlToImage}
                    className='object-cover w-full h-96 bg-center rounded-lg aspect-video'
                    alt={data?.title}
                />
                <div className='my-2 flex gap-3 text-right justify-end items-end'>
                    <span className='text-white/60'>Share</span>
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
                    <div className='flex justify-between items-end'>
                        <div>
                            <p className='text-sm text-white/50'>Source: <span className='text-white/70 font-medium'>

                                {data?.source?.name}
                            </span>
                            </p>
                        </div>
                        <div>
                            <p className='text-sm text-white/50 text-right'>Author: <span className=''>
                                {data?.author}
                            </span>
                            </p>
                            <p className='text-right text-sm text-white/50'>Published: {formatPublishDate(data?.publishedAt)}</p>
                        </div>
                    </div>
                    <h1
                        className='mb-3 text-3xl font-bold leading-tight md:text-4xl mt-6 border-l-8 border-l-yellow-500 pl-2'
                        itemProp='headline'
                        title={data?.title}
                    >
                        {data?.title}
                    </h1>
                </div>
                <div className='mb-6  flex flex-wrap gap-2'>
                    {data?.keywords && data?.keywords.length > 0 && data.keywords.map((item: string, idx: number) =>
                        <TagIcon text={item} key={item + idx} />
                    )}
                </div>
            </div>

            <div className='w-full mx-auto'>
                <div className='text-justify text-white/60'>
                    {data?.description}
                </div>
                <div className='text-lg  !text-white/90 mt-10'>
                    <div className='rsw-ce !px-0 !mx-0' dangerouslySetInnerHTML={{ __html: data?.html_content ? data.html_content : data?.content || '' }} />
                </div>
            </div>
            <Comments post={data} />
        </article >
    )
}
