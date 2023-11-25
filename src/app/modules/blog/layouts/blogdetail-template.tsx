import { BlogsGetProps } from "../../types";
import BlogDetail from "../components/BlogDetail";


const BlogDetailTemplate = ({ blog }: { blog: BlogsGetProps }) => {

    return (
        <BlogDetail blog={blog}/>
    )
}

export default BlogDetailTemplate;