import { Fragment } from "react";

import { BlogsGetProps } from "../../types";
import CardArticle from "../../home/templates/CardArticle";
import SidebarLeftTagDetail from "../components/SidebarLeftTagDetail";
import SidebarRightTagDetail from "../components/SidebarRightTagDetail";


interface TagDetailTemplateProps {
    blogs: BlogsGetProps[]
}
const TagDetailTemplate = ({ blogs } : TagDetailTemplateProps) => {
    return (
        <div className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="px-3 my-3">
                <div className="-mx-3">

                    <div className="grid grid-cols-12 px-3">
                        <div className="col-span-2">
                            <SidebarLeftTagDetail />
                        </div>
                        <div className="col-span-7">
                            {
                                blogs && blogs.length > 0 && (
                                    blogs.map((blog, index) => {
                                        return (
                                            <Fragment key={blog.blogId}>
                                                <CardArticle
                                                    blog={blog}
                                                />
                                            </Fragment>
                                        )
                                    })
                                )
                            }
                        </div>
                        <div className="col-span-3">
                            <SidebarRightTagDetail />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TagDetailTemplate;
