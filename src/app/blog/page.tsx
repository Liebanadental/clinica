import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogClient from './BlogClient';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default function BlogPage() {
    const posts = getAllPosts();
    const categories = getAllCategories();

    return <BlogClient initialPosts={posts} categories={categories} />;
}
