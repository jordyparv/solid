import React from 'react'
import Login from './Login'
import BlogForm from './BlogForm'
import Selection from './Selection'
import Header from '@/components/Header'
import CategoryForm from './CategoryForm'

export default function page() {
    return (
        <div className="snap-mandatory snap-y h-screen scroll-smooth overflow-hidden from-white/25  to-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
            <Header />
            <Selection />
            <BlogForm />
            <CategoryForm />
        </div>
    )
}
