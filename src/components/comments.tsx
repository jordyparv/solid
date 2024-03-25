'use client'
import { DiscussionEmbed } from "disqus-react"

export default function Comments({ post, }: { post: { [key: string]: any, }, }) {
    const disqusShortname = "Solid"
    const disqusConfig = {
        url: `http://localhost:3000/post/${post?.title}`,
        identifier: post?.id, // Single post id
        title: post?.title // Single post title
    }

    return (
        <div>
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}
