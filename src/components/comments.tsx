'use client'
import { DiscussionEmbed } from "disqus-react"
export default function Comments({ post }: { post: { [key: string]: any } }) {
    const disqusShortname = "Solid"
    const disqusConfig = {
        url: "https://your-site-url/post-slug",
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
