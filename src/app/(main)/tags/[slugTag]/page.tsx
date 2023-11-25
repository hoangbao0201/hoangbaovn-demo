import { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogsGetProps } from "@/app/modules/types";
import blogService from "@/lib/services/blog.service";
import TagDetailTemplate from "@/app/modules/tags/templates/tagsdetail-template";

type Props = {
    params: { handle: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogs = await blogService.getBlogs({});

    if (!blogs) {
        notFound();
    }

    return {
        title: "Trang chủ"
    };
}

const TagDetailPage = async () => {
    const dataBlogs : { success: boolean, blogs: BlogsGetProps[] } = await blogService.getBlogs({});
    
    return (
        <TagDetailTemplate blogs={dataBlogs.blogs}/>
    )
}

export default TagDetailPage;