import BlogCard from '@/components/Blog/BlogCard'
import BlogContainer from '@/components/Blog/BlogContainer'
import BlogList from '@/components/Blog/BlogList'
import Header from '@/components/Header'
import SideCard from '@/components/SideCard'
import { getArticles } from '@/controller/getData'
import React from 'react'

export default async function page() {
    const {data} = await getArticles()
    return (
        <div>
            <Header />
            <BlogContainer data={data} />
        </div>
    )
}
