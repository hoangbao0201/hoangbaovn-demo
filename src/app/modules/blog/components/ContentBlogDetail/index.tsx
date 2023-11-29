import AvatarRank from "@/app/modules/common/components/AvatarRank";
import MDXComponent from "@/app/modules/common/components/MDXComponent";
import TagsBlog from "@/app/modules/common/components/TagBlog";
import convertTime from "@/app/modules/util/convertTime";
import { GetBlogsProps } from "@/lib/services/blog.service";
import Image from "next/image";
import Link from "next/link";

const BlogDetailData = {
    title: '⚡️7 easy AI-product integrations (to keep up with the times 👴🏻👨‍🔧)',
    image: '/images/bg_blog.png',
    content: 'Get a working chatBot with a few lines of code, then customize and embed as deeply as you need to.',
    author: {
        avatar_url: "/images/avatar_user.jpg"
    }
}

interface ContentBlogDetailProps {
    blog: GetBlogsProps
}
const ContentBlogDetail = ({ blog } : ContentBlogDetailProps) => {

    if(!blog) {
        return null;
    }
    return (
        <div className="md:px-3">
            <div className="bg-white rounded-md shadow-sm overflow-hidden">
                <article className="">
                    <header className="mb-4">
                        <div className="mb-6">
                            <Image
                                width={800}
                                height={800}
                                alt="ảnh bìa"
                                src={`${BlogDetailData.image}`}
                                property="true"
                                className="mx-auto block max-h-80 w-full object-cover"
                            />
                        </div>
                        <div className="flex md:px-8 px-4 pt-4 mb-5">
                            <Link href={`/`}>
                                <AvatarRank rank={1}>
                                    <Image
                                        width={60}
                                        height={60}
                                        alt="ảnh người dùng"
                                        src={BlogDetailData.author.avatar_url}
                                        className="w-12 h-12 block object-cover rounded-full flex-shrink-0"
                                    />
                                </AvatarRank>
                            </Link>
                            <div className="ml-3">
                                <div className="flex items-center mb-1">
                                    <Link href={`/`}>
                                        <p className="hover:underline font-medium">
                                            {blog.author.name}
                                        </p>
                                    </Link>
                                    <span className="ml-2 text-sm font-medium border border-gray-400 px-2 py-[2px] rounded-md">
                                        Cấp {blog.author.rank || 1}
                                    </span>
                                </div>
                                <Link href={`/`}>
                                    <p className="text-sm hover:underline">
                                        {convertTime(blog.createdAt)}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <h1
                            title={blog.title}
                            className="font-extrabold text-4xl md:px-8 px-4"
                        >
                            <Link href={`/blog/${blog.slug}-${blog.blogId}`}>
                                {blog.title}
                            </Link>
                        </h1>
                        <TagsBlog
                            className="md:px-8 mt-5 mb-6"
                            listTag={blog.blogTags}
                        />
                    </header>
                    <div className="md:px-8 px-4 mb-5">
                        <MDXComponent>{blog.content}</MDXComponent>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ContentBlogDetail;
