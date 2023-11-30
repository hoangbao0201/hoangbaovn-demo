"use client"

import CardArticle from "@/app/modules/home/components/CardArticle";
import SkeletonCardItem from "@/app/modules/skeletons/components/skeleton-card-item";
import blogService, { GetBlogsProps } from "@/lib/services/blog.service";
import { Fragment, useEffect, useState } from "react"


interface ListBlogUserProps {
    slug: string
}
const ListBlogUser = ({ slug } : ListBlogUserProps) => {
    const [listBlog, setListBlog] = useState<GetBlogsProps[]>([]);

    const handleGetListBlogUser = async () => {
        try {
            const blogsRes = await blogService.findAll(`byu=${slug}`)

            if(blogsRes.success) {
                setListBlog(blogsRes.blogs)
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        if(slug && slug !== "") {
            handleGetListBlogUser();
        }
    }, [slug])

    return (
        <div>
            {
                listBlog.length>0 ? (
                    listBlog.map((blog) => {
                        return (
                            <Fragment key={blog.blogId}>
                                <CardArticle blog={blog}/>
                            </Fragment>
                        )
                    })
                ) : (
                    <SkeletonCardItem count={3}/>
                )
            }
        </div>
    )
}

export default ListBlogUser;