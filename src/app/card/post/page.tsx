import React from 'react'
import Card from '@/components/Blog/Card'
import { getArticles } from '@/controller/getData'
import { ArticlePropsType } from '@/interface'

export default async function Page() {
    const { data } = await getArticles({ post_type: 'card' })
    return (

        <section className="px-4 mx-auto max-w-7xl mb-20">
            <h2 className="mb-6 text-3xl font-extrabold leading-tight">
                {'Latest Posts'}
            </h2>
            {/* <p className="mb-20 text-lg">
                Comes directly 
            </p> */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                {data?.length > 0 && data.map((item: ArticlePropsType) =>
                    <Card key={item._id} data={item} />
                )}
            </div>
            {/* <div className='mt-10 text-center'>
                <button className='btn hover:bg-primary border border-primary text-white btn-lg rounded-full hover:text-gray-900'>Load More</button>
            </div> */}
        </section>

    )
}
