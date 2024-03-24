import React from 'react'
import Article from '@/components/Article/Article'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import BlogContainer from '@/components/Blog/BlogContainer'
import SingleBlogCard from '@/components/Blog/SingleBlogCard'
import { getArticles, getHeadline } from '@/controller/getData'
import { ArticlePropsType } from '@/interface'

export default async function Home() {
  const { data } = await getArticles({ limit: 8 })
  const { data: [headlineData] } = await getArticles({ limit: 1, post_type: 'headline' })
  const { data: dataByCategories } = await getArticles({ by_category: 1 })
  const categoryNames = Object.keys(dataByCategories)?.sort((a, b) => a.localeCompare(b))
  const { data: cardsData } = await getArticles({ limit: 8, post_type: 'card' })

  return (
    <div className='bg-black'>
      <SingleBlogCard data={headlineData || {}} />
      <Blogs data={cardsData} />
      {categoryNames.length > 0 && categoryNames.map((item, idx) =>
        <Article data={dataByCategories[item]} title={item} key={item + idx} />
      )
      }
      <BlogContainer data={data} title='Recently added' />
      <Footer />
    </div>
  )
}
