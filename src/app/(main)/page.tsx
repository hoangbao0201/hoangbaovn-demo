import { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";

import { BlogsGetProps } from "../modules/types";
import blogService from "@/lib/services/blog.service";
import CardArticle from "../modules/home/templates/CardArticle";
import SideBarLeft from "../modules/home/components/SidebarLeft";
import SideBarRight from "../modules/home/components/SidebarRight";

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

export default async function HomePage() {
    const dataBlogs : { success: boolean, blogs: BlogsGetProps[] } = await blogService.getBlogs({});

    return (
        <main className="max-w-7xl w-full min-h-screen mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-2 mt-3 h-full hidden xl:block">
                    <SideBarLeft />
                </div>
                <div className="xl:col-span-7 lg:col-span-8 col-span-full mt-3">
                    {dataBlogs.success && dataBlogs.blogs.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <CardArticle blog={item} />
                            </Fragment>
                        );
                    })}
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full mt-3 h-full">
                    <SideBarRight />
                </div>
            </div>
        </main>
    );
}
