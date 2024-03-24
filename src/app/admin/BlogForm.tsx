'use client'
import { getCategories } from '@/controller/getData';
import { postArticle } from '@/controller/postData';
import { removeHTMLTags } from '@/utils/helper-functions';
import React, { useEffect, useState } from 'react'
import Editor from 'react-simple-wysiwyg';


export default function BlogForm() {

    const [content, setContent] = useState<string>('');
    const [pending, setPending] = useState<boolean>(false)
    const [category, setCategory] = useState([])
    const handleContent = (e: any) => {
        setContent(e.target.value);
    }
    useEffect(() => {
        const getData = async () => {

            const { data } = await getCategories({ serverSide: false })
            setCategory(data.sort((a: any, b: any) => a.name.localeCompare(b.name)))
        }
        getData()
    }, [])
    const handleSubmit = async (e: any) => {

        e.preventDefault()

        const formData = new FormData(e.target);
        // setPending(true)


        const rawFormData = {
            title: formData.get('title')?.toString().trim(),
            author: formData.get('author')?.toString().trim(),
            description: formData.get('description')?.toString().trim(),
            source: {
                id: null,
                name: formData.get('source_name')?.toString().trim()
            },
            publish: formData.get('publish')?.toString().trim(),
            content: removeHTMLTags(formData.get('content')?.toString().trim() || ''),
            html_content: formData.get('content')?.toString().trim(),
            urlToImage: formData.get('urlToImage')?.toString().trim(),
            url: window.location.hostname.concat('/', formData.get('title')?.toString().trim() || ''),
            keywords: formData.get('keyword')?.toString().split(','),
            category: formData.get('category')
        };
        try {
            const data = await postArticle(rawFormData)
            if (data) {
                alert(JSON.stringify(data))
            }
            return data
        }
        catch (e) {
            console.error(e)
        }


    }



    return (
        <div id='article' className='py-14 snap-center max-w-7xl mx-auto h-screen overflow-y-auto'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[800px]">
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
                        <div className="">
                            <label
                                htmlFor="category"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                category
                            </label>
                            <select name='category' className="capitalize w-full block placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md">
                                <option value='' className='text-/50 font-bold capitalize' disabled selected>Select Category</option>
                                {category.length > 0 && category.map((item: any) =>
                                    <option
                                        value={item.slug}
                                        key={item._id}
                                        className='text-black font-medium '
                                    >
                                        {item.name}
                                    </option>
                                )}

                            </select>
                        </div>
                        <div className="">
                            <label
                                htmlFor="postType"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Post Type
                            </label>
                            <select required name='postType' className="capitalize w-full block placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md">
                                <option defaultValue={'article'} className='text-/50 font-bold capitalize' disabled selected>Select Post Type</option>

                                <option
                                    value={'card'}

                                    className='text-black font-medium '
                                >
                                    Card
                                </option>
                                <option
                                    value={'article'}

                                    className='text-black font-medium '
                                >
                                    Article
                                </option>
                                <option
                                    value={'Blog'}

                                    className='text-black font-medium '
                                >
                                    Blog
                                </option>
                                <option
                                    value={'sideCard'}
                                    className='text-black font-medium '
                                >
                                    Side Card
                                </option>
                            </select>
                        </div>
                        <div className="">
                            <label
                                htmlFor="title"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                required
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="author"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                required
                                placeholder="Jordan"
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="urlToImage"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="urlToImage"
                                id="urlToImage"
                                required
                                placeholder="https://placehold.co/400"
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>


                        <div className="">
                            <label
                                htmlFor="description"
                                className="mb-3  block text-base font-medium text-white/50 capitalize"
                            >
                                description
                            </label>
                            <input
                                name="description"
                                id="description"
                                required
                                placeholder="Type your description "
                                className="w-full placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="source_name"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Source Name
                            </label>
                            <input
                                name="source_name"
                                id="source_name"
                                required
                                placeholder="Source"
                                className="w-full placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="subject"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                Publish
                            </label>
                            <select name='publish' defaultValue={1} className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md">
                                <option value="0" className='text-black'>No</option>
                                <option value="1" className='text-black'>Yes</option>
                            </select>
                        </div>

                        <div className="">
                            <label
                                htmlFor="keyword"
                                className="mb-3 block text-base font-medium text-white/50 capitalize"
                            >
                                keyword
                            </label>
                            <input
                                name="keyword"
                                id="keyword"
                                required
                                placeholder="keyword"
                                className="w-full placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>


                        <div className='col-span-1 space-y-4 sm:col-span-2 md:col-span-3'>

                            <div className="default-styling">
                                <label
                                    htmlFor="content"
                                    className="mb-3 block text-base font-medium text-white/50"
                                >
                                    Content
                                </label>
                                <div className='text-black bg-white'>
                                    <Editor
                                        value={content} onChange={handleContent}
                                    // containerProps={{ style: { padding: '2px', } }}
                                    />
                                </div>
                                <input type="hidden" name="content" value={content} />
                            </div>
                            <div className='space-x-4'>
                                <button className="hover:shadow-form rounded-md bg-primary hover:bg-yellow-600 py-3 px-8 text-base font-semibold text-white outline-none"
                                    type='submit'

                                >
                                    Submit
                                </button>
                                <button className="hover:shadow-form rounded-md bg-black/50 hover:bg-black/60 py-3 px-8 text-base font-semibold text-white outline-none"
                                    type='reset'
                                >
                                    Reset
                                </button>


                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
