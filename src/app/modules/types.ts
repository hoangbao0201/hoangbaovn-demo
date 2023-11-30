// GET BLOGS

export interface BlogsGetProps {
    blogId: number;
    slug: string;
    title: string;
    summary: string;
    content: string;
    thumbnailUrl: string;
    createdAt: Date;
    updateAt: Date;
    blogTags: {
        tags: {
            name: string;
            slug: string;
        };
    }[];
    author: {
        role: {
            roleId: number;
            roleName: "user" | "admin";
        };
        userId: string;
        name: string;
        username: string;
        email: string;
        rank: number;
    };
    _count: {
        userViews: number;
        userLikes: number;
        userSaves: number;
    };
}
