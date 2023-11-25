"use client"

import Link from "next/link"
import { BlogTagsProps } from "../../types"


interface TagsBlogProps {
    listTag: BlogTagsProps[]
    className?: string
}

const TagsBlog = ({listTag, className} : TagsBlogProps) => {
    return (
        <>
            <ul className={`flex flex-wrap ${className}`}>
                {
                    listTag && listTag.length>0 && (
                        listTag.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    <Link href={`/tag/${item.tags.slug}`}>
                                        <span className={`tag tag-${index+1} block`}>#{item.tags.name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    )
                }
            </ul>
        </>
    )
}

export default TagsBlog;