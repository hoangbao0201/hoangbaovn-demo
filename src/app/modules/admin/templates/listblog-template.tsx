import ListUser from "../components/ListUsers";

interface ListBlogTemplateProps {
}

const ListBlogTemplate = ({ } : ListBlogTemplateProps) => {
    return (
        <div className="">
            <div className="mb-2 font-semibold">Danh sách người dùng</div>
            <div className="px-4 py-4 bg-white rounded-md border">
                <ListUser />
            </div>
        </div>
    );
};

export default ListBlogTemplate;
