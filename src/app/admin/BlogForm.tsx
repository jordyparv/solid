'use client'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import Editor from 'react-simple-wysiwyg';
import { postArticle } from '../actions';

export default function BlogForm() {

    const [content, setContent] = useState<string>('');
    const handleContent = (e: any) => {
        setContent(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const rawFormData = {
            title: formData.get('title'),
            amount: formData.get('author'),
            status: formData.get('description'),
            source_name: formData.get('source_name'),
            publish: formData.get('publish'),
            content: formData.get('content'),
        };
    }
    const { pending } = useFormStatus()
    return (
        <div id='article' className='py-14 snap-center max-w-7xl mx-auto min-h-screen'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[800px]">
                    <form onSubmit={handleSubmit} method="POST" className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>

                        <div className="">
                            <label
                                htmlFor="title"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title"
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="author"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="Jordan"
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="imageToUrl"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="imageToUrl"
                                id="imageToUrl"
                                placeholder="https://placehold.co/400"
                                className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>


                        <div className="">
                            <label
                                htmlFor="description"
                                className="mb-3 capitalize block text-base font-medium text-white/50"
                            >
                                description
                            </label>
                            <input
                                name="description"
                                id="description"
                                placeholder="Type your description"
                                className="w-full placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="source_name"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Source Name
                            </label>
                            <input
                                name="source_name"
                                id="source_name"
                                placeholder="Source"
                                className="w-full placeholder:text-white/20 resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div className="">
                            <label
                                htmlFor="subject"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Publish
                            </label>
                            <select name='publish' defaultValue={1} className="w-full placeholder:text-white/20 rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md">
                                <option value="0" className='text-black'>No</option>
                                <option value="1" className='text-black'>Yes</option>
                            </select>
                        </div>
                        {/* </div> */}
                        <div className='col-span-1 space-y-4 sm:col-span-2 md:col-span-3'>

                            <div className="">
                                <label
                                    htmlFor="content"
                                    className="mb-3 block text-base font-medium text-white/50"
                                >
                                    Content
                                </label>
                                <Editor
                                    value={content} onChange={handleContent}
                                    className='w-full resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md'
                                />
                                <input type="hidden" name="content" value={content} />
                            </div>
                            <div className='space-x-4'>
                                <button className="hover:shadow-form rounded-md bg-yellow-500 hover:bg-yellow-600 py-3 px-8 text-base font-semibold text-white outline-none"
                                    type='submit'
                                    aria-disabled={pending}
                                >
                                    Submit
                                </button>
                                <button className="hover:shadow-form rounded-md bg-black/50 hover:bg-black/60 py-3 px-8 text-base font-semibold text-white outline-none"
                                    type='submit'
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
