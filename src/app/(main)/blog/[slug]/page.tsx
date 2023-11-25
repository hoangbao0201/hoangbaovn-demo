import { Metadata } from "next";

import { notFound } from "next/navigation";
import { BlogsGetProps } from "@/app/modules/types";
import blogService from "@/lib/services/blog.service";
import BlogDetailTemplate from "@/app/modules/blog/layouts/blogdetail-template";

type Props = {
    params: { slug: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogRes = await blogService.getBlog(params.slug);

    if (!blogRes.success) {
        notFound();
    }

    return {
        title: blogRes.blog.title
    };
}

export default async function BlogDetailPage({ params } : Props) {

    const { success, blog }: { success: boolean, blog: BlogsGetProps } = await blogService.getBlog(params.slug);

    return (
        <>
            <BlogDetailTemplate blog={blog}/>
        </>
    );
}
