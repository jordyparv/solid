import BlogList from '@/components/Blog/BlogList'
import BlogListCard from '@/components/Blog/BlogListCard'
import Card from '@/components/Blog/Card'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideCard from '@/components/SideCard'
import { getArticles, getArticlesByCategory, getCategories, getPostBySlug } from '@/controller/getData'
import { slugMaker } from '@/utils/helper-functions'
import { notFound } from 'next/navigation'
import React from 'react'
import Page from './page'
import { ArticlePropsType } from '@/interface'
export default async function layout({ params, children }: props) {
    const { title } = params
    const postSlug = slugMaker(decodeURIComponent(title))
    const { data } = await getPostBySlug(slugMaker(decodeURIComponent(title)))
    if (!title || !data) {
        notFound()
    }
    const { data: relatedArticles } = await getArticlesByCategory(data.category)
    const { data: articles } = await getArticles({ limit: 12, excludeSlug: postSlug })

    return (
        <div>
            <Header />
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-2 px-4 py-4 md:py-14 mx-auto max-w-7xl  border-b border-b-white/50 pb-20">
                <div className="w-full">
                    <Page data={data} title={title} />
                    <BlogList data={relatedArticles} Element={BlogListCard} title='Relative Posts' />
                </div>
                <div className='hidden md:block space-y-4'>
                    <h4 className='text-2xl mb-4 text-white/70 font-medium'>Fresh</h4>
                    {articles?.length > 0 && articles.slice(0, 4)?.map((item: any) =>
                        <SideCard data={item} key={item._id} />
                    )}
                </div>
            </section>
            <div className='my-6'>
                <Blogs data={articles.slice(4)} />
            </div>
            <Footer />
        </div>
    )
}


type props = {
    params: { title: string }
    children: React.ReactNode
} 