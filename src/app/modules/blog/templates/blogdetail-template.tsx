import { GetBlogsProps } from "@/lib/services/blog.service";
import ContentBlogDetail from "../components/ContentBlogDetail";
import SidebarLeftBlogDetail from "../components/SidebarLeftBlogDetail";
import SidebarRightBlogDetail from "../components/SidebarRightBlogDetail";

const BlogDetailTemplate = ({ blog }: { blog: GetBlogsProps }) => {
    return (
        // <BlogDetail blog={blog}/>
        <main className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="grid grid-cols-12">

                <div className="col-span-1 xl:block hidden pt-3">
                    <SidebarLeftBlogDetail />
                </div>

                <div className="lg:col-span-8 col-span-full pt-3">
                    <ContentBlogDetail blog={blog}/>
                </div>

                <div className="xl:col-span-3 lg:col-span-4 col-span-full pt-3">
                    <SidebarRightBlogDetail />
                </div>

            </div>
        </main>
    );
};

export default BlogDetailTemplate;
