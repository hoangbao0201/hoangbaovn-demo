import axios from "axios";
import { API_BASE_URL } from "../data";
import { textToSlug } from "@/app/modules/util/testToSlug";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiaG9hbmdiYW8wMjAxMDNAZ21haWwuY29tIiwiaWF0IjoxNzAwNTgyODU5LCJleHAiOjE3MDA1ODY0NTl9.jtJi0ePtviyz0JneqmK6v4u2owxo9TfhwwLVjFvStjw"
export interface TagProps {
    name: string
    slug: string
    label: string
}
export interface DataCreateBlogProps {
    title: string
    summary: string
    content: string
    published: boolean
    blogTags: TagProps[]
}
export interface DataGetBlogsProps {
    
}
class BlogService {

    async createBlog(data : DataCreateBlogProps) : Promise<any> {
        try {
            const { title, content, published, blogTags, summary  } = data;
            const blog = await axios.post(`${API_BASE_URL}/api/blogs`, {
                title: title,
                slug: textToSlug(title),
                content: content,
                published: published,
                blogTags: blogTags,
                thumbnailUrl: "",
                summary: summary
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return blog.data;
        } catch (error) {
            return {
                success: false,
                message: "error blog successful",
                error: error
            };
        }
    }

    async getBlogs(data : DataGetBlogsProps) : Promise<any> {
        try {
            const {} = data;
            const blogs = await axios.get(`${API_BASE_URL}/api/blogs/`, {
                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            });
            return blogs.data;
        } catch (error) {
            return {
                success: false,
                message: "error blogs successful",
                error: error
            };
        }
    }

    async getBlog(slug : string) : Promise<any> {
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
                error: error
            };
        }
    }

    async test() : Promise<any> {
        try {
            return {
                success: true,
                message: "successful",
            };
        } catch (error) {
            return {
                success: false,
                message: "error blog successful",
                error: error
            };
        }
    
    }

}

const blogService = new BlogService();

export default blogService;