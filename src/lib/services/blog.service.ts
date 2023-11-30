import axios from "axios";
import { API_BASE_URL } from "../data";
import { textToSlug } from "@/app/modules/util/testToSlug";

export interface TagProps {
    name: string;
    slug: string;
}
export type BlogTagProps = { tags: TagProps }

export interface PostCreateBlogProps {
    title: string;
    summary: string;
    content: string;
    published: boolean;
    blogTags: TagProps[]
}
export interface GetBlogsProps {
    blogId: number,
    slug: string,
    title: string,
    summary: string,
    content: string,
    thumbnailUrl: string,
    createdAt: Date,
    updatedAt: Date,
    blogTags: { tags: TagProps }[]
    author: {
        role: {
            roleId: number,
            roleName: "admin" | "user"
        },
        userId: number,
        name: string,
        username: string,
        email: string,
        rank: number
    },
    _count: {
        userViews: number,
        userLikes: number,
        userSaves: number
    }
}
export interface GetSearchBlogsProps {
    blogId: number,
    slug: string,
    title: string,
    thumbnailUrl: string,
    createdAt: Date,
    updatedAt: Date,
    blogTags: [
        {
            tags: {
                name: string,
                slug: string
            }
        },
        {
            tags: {
                name: string,
                slug: string
            }
        },
        {
            tags: {
                name: string,
                slug: string
            }
        }
    ],
    author: {
        role: {
            roleId: 3,
            roleName: "admin" | "user"
        },
        userId: 1,
        name: string,
        username: string
    }
}
class BlogService {
    async createBlog({
        data,
        token,
    }: {
        data: PostCreateBlogProps;
        token: string;
    }): Promise<any> {
        try {
            const { title, content, published, blogTags, summary } = data;

            const blog = await axios.post(
                `${API_BASE_URL}/api/blogs`,
                {
                    title: title,
                    slug: textToSlug(title),
                    content: content,
                    published: published,
                    blogTags: blogTags,
                    thumbnailUrl: "",
                    summary: summary,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return blog.data;
        } catch (error) {
            return {
                success: false,
                message: "error blog successful",
                error: error,
            };
        }
    }

    async findAll(query?: string): Promise<any> {
        try {
            const blogs = await axios.get(
                `${API_BASE_URL}/api/blogs?${query}`,
                {
                    // headers: {
                    //     Authorization: `Bearer ${token}`
                    // }
                }
            );
            return blogs.data;
        } catch (error) {
            return {
                success: false,
                message: "error blogs successful",
                error: error,
            };
        }
    }

    async searchBlogs(query?: string): Promise<any> {
        try {
            const blogs = await axios.get(
                `${API_BASE_URL}/api/blogs/search?${query}`,
                {
                    // headers: {
                    //     Authorization: `Bearer ${token}`
                    // }
                }
            );
            return blogs.data;
        } catch (error) {
            return {
                success: false,
                message: "error blogs successful",
                error: error,
            };
        }
    }

    async getBlog(slug: string): Promise<any> {
        try {
            const blog = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`, {
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            });
            return blog.data;
        } catch (error) {
            return {
                success: false,
                message: "error blog successful",
                error: error,
            };
        }
    }

    async test(): Promise<any> {
        try {
            return {
                success: true,
                message: "successful",
            };
        } catch (error) {
            return {
                success: false,
                message: "error blog successful",
                error: error,
            };
        }
    }
}

const blogService = new BlogService();

export default blogService;
