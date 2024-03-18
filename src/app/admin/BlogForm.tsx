'use client'
import React, { useState } from 'react'

import Editor from 'react-simple-wysiwyg';

export default function BlogForm() {
    const [content, setContent] = useState<string>('');
    const handleContent = (e: any) => {
        setContent(e.target.value);
    }
    return (
        <div className='p-2'>
            <h2 className='md:text-4xl text-3xl max-w-7xl mx-auto font-extrabold border-l-8 pl-2 border-l-yellow-500'>Solid</h2>

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="name"
                                placeholder="Title"
                                className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
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
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="subject"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Image
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                description
                            </label>
                            <textarea
                                rows={2}
                                name="message"
                                id="message"
                                placeholder="Type your description"
                                className="w-full resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md"
                                defaultValue={""}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="Content"
                                className="mb-3 block text-base font-medium text-white/50"
                            >
                                Content
                            </label>
                            <Editor value={content} onChange={handleContent}
                                className='w-full resize-none rounded-md border border-white/30 bg-white/10 py-3 px-6 text-base font-medium  outline-none focus:border-yellow-500 focus:shadow-md'
                            />

                        </div>
                        <div>
                            <button className="hover:shadow-form rounded-md bg-yellow-500 py-3 px-8 text-base font-semibold text-white outline-none">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
