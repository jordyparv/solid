import BlogList from '@/components/Blog/BlogList'
import Card from '@/components/Blog/Card'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getArticles } from '@/controller'
import React from 'react'
export default async function layout({ children }: { children: React.ReactNode }) {
    const articles = await getArticles()
    return (
        <div>
            <Header />
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-2 px-4 py-4 md:py-14 mx-auto max-w-7xl  border-b border-b-white/50 pb-20">
                <div className="w-full">
                    {children}
                    <BlogList data={articles.slice(0, 8)} />
                </div>
                <div className='hidden md:block'>
                    <h4 className='text-2xl mb-4 text-white/70 font-medium'>Fresh</h4>
                    {articles?.length > 0 && articles?.slice(8, 4).map((item: any) =>
                        <Card data={item} key={item._id} />
                    )}
                    <Card />
                </div>
            </section>
            <div className='my-6'>
                {/* <Blogs /> */}
            </div>
            <Footer />
        </div>
    )
}
