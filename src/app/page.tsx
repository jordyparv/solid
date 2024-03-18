import React from 'react'
import Article from '@/components/Article/Article'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import BlogContainer from '@/components/Blog/BlogContainer'
import SingleBlogCard from '@/components/Blog/SingleBlogCard'
import { getArticles, getHeadline } from '@/controller'
export default async function Home() {
  const data = await getArticles()
  const [HeadlineData] = await getHeadline()

  return (
    <div className='bg-black'>
      <SingleBlogCard data={HeadlineData || {}} />
      <Blogs data={data.slice(0, 8)} />
      <Article data={data.slice(8)} />
      <BlogContainer data={data.slice(20)} />
      <Footer />
    </div>
  )
}
