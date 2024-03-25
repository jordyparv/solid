import React, { useEffect } from 'react'
import Article from '@/components/Article/Article'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import BlogContainer from '@/components/Blog/BlogContainer'
import SingleBlogCard from '@/components/Blog/SingleBlogCard'
import { getArticles, getHeadline } from '@/controller/getData'
import { ArticlePropsType } from '@/interface'

export default async function Home() {

  const { data: [headlineData] } = await getArticles({ limit: 1, post_type: 'headline' })
  const { data: dataByCategories } = await getArticles({ by_category: 1, post_type: 'article' })
  const categoryNames = Object.keys(dataByCategories)?.sort((a, b) => a.localeCompare(b))
  const { data: cardsData } = await getArticles({ post_type: 'card' })

  return (
    <div className='bg-black'>
      <SingleBlogCard data={headlineData || {}} />
      <Blogs data={cardsData?.slice(0, 8)} />
      {/* <BlogContainer data={data} cardsData={cardsData?.slice(8, 12)} title='Recently added' /> */}
      {categoryNames.length > 0 && categoryNames.map((item, idx) => {
        let startIdx = 8 + (idx * 2)
        // let limit = 2
        let limit = Math.ceil(dataByCategories[item]?.length * 0.3)
        let endIdx = startIdx + limit

        return <Article
          data={dataByCategories[item]}
          title={item}
          key={item + idx}
          cardData={cardsData.slice(startIdx, endIdx)} />
      })}
      <Footer />
    </div>
  )
}
