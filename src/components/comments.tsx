'use client'
import { DiscussionEmbed } from "disqus-react"

export default function Comments({ post, title }: { post: { [key: string]: any, }, title: string }) {
    const disqusShortname = "Solid"
    const disqusConfig = {
        url: `http://localhost:3000/post/${title}`,
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
