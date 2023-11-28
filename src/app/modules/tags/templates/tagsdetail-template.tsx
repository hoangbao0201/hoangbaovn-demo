import { Fragment } from "react";

import { BlogsGetProps } from "../../types";
import CardArticle from "../../home/components/CardArticle";
import SidebarLeftTagDetail from "../components/SidebarLeftTagDetail";
import SidebarRightTagDetail from "../components/SidebarRightTagDetail";

interface TagDetailTemplateProps {
    blogs: BlogsGetProps[];
}
const TagDetailTemplate = ({ blogs }: TagDetailTemplateProps) => {
    return (
        <div className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="grid grid-cols-12">
                <div className="col-span-2 pt-3 h-full hidden xl:block">
                    <SidebarLeftTagDetail />
                </div>
                <div className="xl:col-span-7 lg:col-span-8 col-span-full pt-3">
                    {blogs &&
                        blogs.length > 0 &&
                        blogs.map((blog, index) => {
                            return (
                                <Fragment key={blog.blogId}>
                                    <CardArticle blog={blog} />
                                </Fragment>
                            );
                        })}
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full pt-3 h-full">
                    <SidebarRightTagDetail />
                </div>
            </div>
        </div>
    );
};

export default TagDetailTemplate;
