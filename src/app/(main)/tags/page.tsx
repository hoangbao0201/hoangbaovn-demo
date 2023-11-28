import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DEFAULT_METADATA } from "@/lib/data";
import tagService, { GetTagsProps } from "@/lib/services/tag.service";
import TagsTemplate from "@/app/modules/tags/templates/tags-template"


export async function generateMetadata(): Promise<Metadata> {

    const blogs = await tagService.findAll();

    if (!blogs) {
        notFound();
    }

    return {
        title: `Tags - ${DEFAULT_METADATA.nameWeb}`
    };
}
const TagsPage = async () => {
    const dataTags : { success: boolean, tags: GetTagsProps[] } = await tagService.findAll();

    return (
        <TagsTemplate tags={dataTags.tags}/>
    )
}

export default TagsPage