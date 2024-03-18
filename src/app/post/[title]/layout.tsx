import BlogList from '@/components/Blog/BlogList'
import Card from '@/components/Blog/Card'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <section className="grid md:grid-cols-[minmax(0px,_1fr)_280px] gap-2 px-4 py-4 md:py-14 mx-auto max-w-7xl  border-b border-b-white/50 pb-20">
                <div className="w-full">
                    {children}
                    <BlogList />
                </div>
                <div className='hidden md:block'>
                    <h4 className='text-2xl mb-4 text-white/70'>Recent Comments</h4>
                    <Card />
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
