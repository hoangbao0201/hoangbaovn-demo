import axios from "axios";
import { API_BASE_URL } from "../data";
import { textToSlug } from "@/app/modules/util/testToSlug";

export interface GetTagsProps {
    tagId: number,
    name: string,
    slug: string,
    _count: {
        blogTags: number
    }
}
class TagService {

    async findAll(query?: string): Promise<any> {
        try {
            const tagsRes = await fetch(
                `${API_BASE_URL}/api/tags?${query}`,
                {
                    method: "GET",
                    next: { revalidate: 60 * 60 }
                    // headers: {
                    //     Authorization: `Bearer ${token}`
                    // }
                }
            );
            const tags = await tagsRes.json();
            return tags;
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

const tagService = new TagService();

export default tagService;
