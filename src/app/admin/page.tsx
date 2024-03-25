import React from 'react'
import Login from '@/app/admin/Login'
import BlogForm from '@/app/admin/BlogForm'
import Selection from '@/app/admin/Selection'
import Header from '@/components/Header'
import CategoryForm from '@/app/admin/CategoryForm'

export default function page() {

    return (
        <div className="relative from-white/25 h-screen overflow-hidden to-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
            <Header />
            <Selection />
            <BlogForm />
            <CategoryForm />
        </div>
    )
}
