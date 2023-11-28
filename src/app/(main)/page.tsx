import { Metadata } from "next";
import { Fragment, Suspense } from "react";
import { notFound } from "next/navigation";

import { BlogsGetProps } from "../modules/types";
import blogService from "@/lib/services/blog.service";
import HomeTemplate from "../modules/home/templates/home-template";
import SkeletonCardItem from "../modules/skeletons/components/skeleton-card-item";

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
    const dataBlogs: { success: boolean; blogs: BlogsGetProps[] } = await blogService.findAll();
    return (
        <HomeTemplate blogs={dataBlogs.blogs}/>
    );
}
