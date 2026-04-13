import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';
export const revalidate = 3600;

// Generate static params for all blog posts
export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}
