import React from 'react'
import Header from '@/components/Header'
import { getArticles } from '@/controller/getData'
import BlogContainer from '@/components/Blog/BlogContainer'

export default async function page() {
    const { data } = await getArticles()
    return (
        <div>
            <Header />
            <BlogContainer data={data} />
        </div>
    )
}
