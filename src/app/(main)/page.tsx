import { Metadata } from "next";
import { notFound } from "next/navigation";

import blogService, { GetBlogsProps } from "@/lib/services/blog.service";
import HomeTemplate from "../modules/home/templates/home-template";

type Props = {
    params: { handle: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blogs = await blogService.findAll();

    if (!blogs) {
        notFound();
    }

    return {
        title: "Trang chủ",
    };
}

export default async function HomePage() {
    const dataBlogs: { success: boolean; blogs: GetBlogsProps[] } = await blogService.findAll();
    return (
        <HomeTemplate blogs={dataBlogs.blogs}/>
    );
}
