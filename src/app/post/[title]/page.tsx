import Post from '@/components/Post/Post'
import { getPostBySlug } from '@/controller'
import React from 'react'

export default async function page({ params, searchParams }: props) {
    let { title } = params
    const data = await getPostBySlug(decodeURIComponent(title))

    return (
        <Post data={data} />
    )
}
type props = {
    params: { title: string }
    searchParams: { [key: string]: string | string[] | undefined }
}