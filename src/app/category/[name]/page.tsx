import Header from '@/components/Header'
import { getArticlesByCategory, getCategories } from '@/controller/getData'
import React from 'react'
import { notFound } from 'next/navigation';
import { slugMaker } from '@/utils/helper-functions';
import SidebarLayout from '@/layout/SidebarLayout';
import BlogList from '@/components/Blog/BlogList';
import BlogCard from '@/components/Blog/BlogCard';
import BlogListCard from '@/components/Blog/BlogListCard';
import Card from '@/components/Blog/Card';
import Head from 'next/head';
import type { Metadata, ResolvingMetadata } from 'next'
import { NextSeo } from 'next-seo';



export async function generateMetadata(
    { params, }: props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const name = params.name

    const { data: categories } = await getCategories({ serverSide: true });
    const category = categories.find((item: any) => item.slug === slugMaker(decodeURIComponent(name)))
    const { data } = await getArticlesByCategory(category?.slug)

    return {
        title: 'SOLID'.concat('-CATEGORY/', name?.toUpperCase()) || '',
        description: data?.length > 0 && data.map((item: any) => item.description).join(', ') || '',
        keywords: data?.length > 0 && data.map((item: any) => item.keywords).join(', ') || ''
    }
}

export default async function page({ params }: props) {
    let { name: categoryName } = params

    const { data: categories } = await getCategories({ serverSide: true });
    const category = categories.find((item: any) => item.slug === slugMaker(decodeURIComponent(categoryName)))
    const { data } = await getArticlesByCategory(category?.slug)

    if (!category?.name) {
        notFound();
    }
    

    return (
        <div>
            <div className='relative h-auto'>
                <Header />
            </div>
            <div className='mx-auto max-w-7xl w-full py-14'>
                <SidebarLayout
                    title={category?.name}
                    mainContent={<BlogList data={data} Element={BlogCard} />}
                    rightContext={<BlogList title={'Relative Articles'} data={data} Element={Card} />}
                />
            </div>
        </div >
    )
}
type props = {
    params: { name: string }
    // searchParams: { [key: string]: string | string[] | undefined }
}