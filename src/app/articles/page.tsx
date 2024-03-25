import BlogList from '@/components/Blog/BlogList'
import BlogListCard from '@/components/Blog/BlogListCard';
import Header from '@/components/Header'
import { getArticles } from '@/controller/getData'

import React from 'react'

export default async function page() {
    const { data } = await getArticles();

    return (
        <div className='pb-10'>
            <Header />
            <BlogList data={data} Element={BlogListCard} />
        </div>
    )
}
