

// GET BLOGS
interface TagProps {
    name: string
    slug: string
}
export type BlogTagsProps = { tags: TagProps }
interface DataRoleGetProps {
    roleId: number
    roleName: "user" | "admin"
}
export interface BlogsGetProps {
    blogId: number,
    slug: string,
    title: string,
    summary: string,        
    content: string,
    thumbnailUrl: string,
    createdAt: Date,
    updateAt: Date,
    blogTags: BlogTagsProps[]
    author: {
        role: DataRoleGetProps,
        userId: string,
        name: string,
        username: string,
        email: string,
        rank: number,
    },
    _count: {
        userViews: number,
        userLikes: number,
        userSaves: number,
    }
}