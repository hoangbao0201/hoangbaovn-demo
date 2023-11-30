import { Metadata } from "next";
import { notFound } from "next/navigation";

import blogService, { GetBlogsProps } from "@/lib/services/blog.service";
import TagDetailTemplate from "@/app/modules/tags/templates/tagsdetail-template";

type Props = {
    params: { slugTag: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const blogs = await blogService.findAll(`tag=${params.slugTag}`);

    if (!blogs) {
        notFound();
    }

    return {
        title: "Trang chủ"
    };
}

const TagDetailPage = async ({ params }: Props) => {
    const dataBlogs : { success: boolean, blogs: GetBlogsProps[] } = await blogService.findAll(`tag=${params.slugTag}`);
    
    return (
        <TagDetailTemplate blogs={dataBlogs.blogs}/>
    )
}

export default TagDetailPage;