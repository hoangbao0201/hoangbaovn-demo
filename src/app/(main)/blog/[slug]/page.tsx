import { Metadata } from "next";

import { notFound } from "next/navigation";
import { BlogsGetProps } from "@/app/modules/types";
import blogService, { GetBlogsProps } from "@/lib/services/blog.service";
import BlogDetailTemplate from "@/app/modules/blog/templates/blogdetail-template";
import { DEFAULT_METADATA } from "@/lib/data";

type Props = {
    params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogRes = await blogService.getBlog(params.slug);

    if (!blogRes.success) {
        notFound();
    }

    const { blog } = blogRes;

    const tags = blog.blogTags.length > 0 ? (
        blog.blogTags.map((item: { tags: { name: string, slug: string } }) => {
            return item.tags.name
        })
    ) : DEFAULT_METADATA.tags

    return {
        title: `${blog.title} - HOANGBAOVN`,
        description: blog.summary,
        authors: [
            {
                name: `${blog.author.name}`,
                url: `${DEFAULT_METADATA.webUrl}/user/${blog.author.username}`,
            },
        ],
        keywords: tags,
        openGraph: {
            type: "article",
            url: `${DEFAULT_METADATA.webUrl}/blog/${params.slug}`,
            title: blog.title,
            description: blog.summary,
            images: [{ url: blog.imageUrl }],
        },
        twitter: {
            card: "summary_large_image",
            site: "@yourTwitterHandle",
            creator: `@${blog.author.username}`,
            title: blog.title,
            description: blog.summary,
            images: ["http://localhost:3000/images/bg_blog.png"],
        },
        alternates: {
            canonical: `${DEFAULT_METADATA.webUrl}/blog/${params.slug}`,
        },
        category: "Blog Category",

    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { success, blog }: { success: boolean; blog: GetBlogsProps } =
        await blogService.getBlog(params.slug);

    return (
        <>
            <BlogDetailTemplate blog={blog} />
        </>
    );
}
