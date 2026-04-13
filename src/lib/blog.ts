import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug: data.slug || fileName.replace(/\.md$/, ''),
                title: data.title || 'Sin título',
                excerpt: data.excerpt || '',
                content: content,
                image: data.image || '',
                category: data.category || 'General',
                date: data.date || '',
                readTime: data.readTime || '5 min',
            } as BlogPost;
        });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
        // Parse Spanish date format like "15 Nov 2024"
        const parseSpanishDate = (dateStr: string): Date => {
            const months: Record<string, number> = {
                // Spanish abbreviations
                'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5,
                'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11,
                // English abbreviations
                'Jan': 0, 'Apr': 3, 'Aug': 7, 'Dec': 11
            };
            const parts = dateStr.split(' ');
            if (parts.length === 3) {
                const day = parseInt(parts[0]);
                const month = months[parts[1]] ?? 0;
                const year = parseInt(parts[2]);
                return new Date(year, month, day);
            }
            return new Date(dateStr);
        };

        const dateA = parseSpanishDate(a.date);
        const dateB = parseSpanishDate(b.date);
        return dateB.getTime() - dateA.getTime();
    });
}

/**
 * Get a single blog post by its slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug) || null;
}

/**
 * Get all unique categories from blog posts
 */
export function getAllCategories(): string[] {
    const posts = getAllPosts();
    const categories = new Set(posts.map((post) => post.category));
    return Array.from(categories);
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
    const posts = getAllPosts();
    return posts.filter((post) => post.category === category);
}

/**
 * Get all post slugs (for static generation)
 */
export function getAllPostSlugs(): string[] {
    const posts = getAllPosts();
    return posts.map((post) => post.slug);
}
