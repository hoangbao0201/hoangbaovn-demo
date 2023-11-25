"use client";

import { ChangeEvent, useState } from "react";

import CreatableSelect from "react-select/creatable";
import ReactMarkdown from "react-markdown";
import Editor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import Modal from "@/app/modules/common/components/modal";
import { textToSlug } from "@/app/modules/util/testToSlug";
import blogService, { DataCreateBlogProps } from "@/lib/services/blog.service";
import { ActionMeta, MultiValue } from "react-select";

interface Option {
    name: string;
    label: string;
}

// const optionTagDefault: Option[] = [
//     { name: "reactjs", label: "ReactJS" },
//     { name: "nodejs", label: "NodeJS" },
//     { name: "ux", label: "UX" },
//     { name: "ui", label: "UI" },
// ];

const CreateBlog = () => {
    const [isShowEditBlogDetail, setIsShowEditBlogDetail] = useState(false);
    const [dataBlog, setDataBlog] = useState<DataCreateBlogProps>({
        title: "",
        summary: "",
        content: "",
        published: true,
        blogTags: [],
    });
    const [selectedTags, setSelectedTags] = useState<MultiValue<Option>>([]);
    const [optionTagDefault, setOptionTagDefault] = useState<
        MultiValue<Option>
    >([{ name: "reactjs", label: "ReactJS" }]);
    const [fileThumbnail, setFileThumbnail] = useState<{
        dataImage: File | null
        urlImage: string
    }>({
        dataImage: null,
        urlImage: ""
    });

    // Onchange Thumbnail Blog 
    const eventOnchangeThumbnailBlog = async (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files == null ) {
            return;
        }
        const dataImg = e.target.files[0];

        setFileThumbnail({
            ...fileThumbnail,
            dataImage: dataImg,
            urlImage: URL.createObjectURL(dataImg)
        });
    }

    // Onchange Data Blog
    const eventOnchangeDataBlog = (e: ChangeEvent<HTMLInputElement>) => {
        setDataBlog({
            ...dataBlog,
            [e.target.name]: e.target.value,
        });
    };

    // Onchange Tag Blog
    const eventOnchangeTagsBlog = (
        selectedOptions: MultiValue<Option>,
        actionMeta: ActionMeta<Option>
    ) => {
        // setSelectedTags(selectedOptions);
        console.log(selectedOptions);
        console.log(actionMeta);
    };

    // Onchange Editor
    const eventOnchangeEditorChange = ({
        html,
        text,
    }: {
        html: string;
        text: string;
    }) => {
        setDataBlog({
            ...dataBlog,
            content: text,
        });
    };

    // Create Blog
    const handleCreateBlog = async () => {
        try {
            const createBlogRes = await blogService.createBlog(dataBlog);
            console.log(createBlogRes);
        } catch (error) {}
    };

    // console.log(selectedTags);

    return (
        <main className="">
            <div
                style={{
                    height: "calc(100vh - px)",
                }}
                className="py-5 px-4 bg-white"
            >
                <div className="flex">
                    <input
                        name="title"
                        value={dataBlog.title}
                        onChange={eventOnchangeDataBlog}
                        placeholder="Tiêu đề bài viết"
                        className="border-b outline-none mb-4 pb-2 font-semibold text-lg w-full"
                    />
                    <button
                        onClick={() => setIsShowEditBlogDetail(true)}
                        className="ml-5 px-3 rounded-md h-10 border text-white whitespace-nowrap bg-blue-500 hover:bg-blue-600"
                    >
                        Xuất bản
                    </button>
                </div>
                <div>
                    <Editor
                        value={dataBlog.content}
                        className="w-full min-h-screen border-none"
                        onChange={eventOnchangeEditorChange}
                        renderHTML={(text) => {
                            return (
                                <ReactMarkdown
                                    // sourcePos={true}
                                    // children={text}
                                    className="prose"
                                >
                                    {text}
                                </ReactMarkdown>
                            );
                        }}
                    />
                </div>
            </div>

            <Modal
                size="extra"
                isOpen={isShowEditBlogDetail}
                setIsOpen={setIsShowEditBlogDetail}
            >
                <div>
                    <div className="font-semibold text-lg mb-4">Xem trước</div>
                    <div className="h-full md:flex md:space-x-8">
                        <div className="md:w-2/5">

                            <div className="mb-6">
                                <label htmlFor="inputThumbnail" className="cursor-pointer group image-change">
                                    <div
                                        style={{ backgroundImage: `URL('${fileThumbnail.urlImage}')` }}
                                        className={`${fileThumbnail.dataImage && "exist-file"} transition-opacity duration-500 relative bg-center bg-cover border text-center w-full px-6 py-5 bg-gray-200 h-40 block rounded-md`}
                                    >
                                        <p className={`text-gray-900 mb-3`}>
                                            Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút hơn với độc giả.
                                        </p>
                                        <p>Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh</p>
                                    </div>
                                </label>
                            </div>
                            <input
                                value={dataBlog.title}
                                name="title"
                                onChange={eventOnchangeDataBlog}
                                placeholder="Tiêu đề bài viết"
                                className="border-b outline-none mb-4 pb-2 font-semibold text-lg w-full"
                            />
                            <input
                                value={dataBlog.summary}
                                name="summary"
                                onChange={eventOnchangeDataBlog}
                                placeholder="Mô tả khi được hiển thị"
                                className="border-b outline-none mb-4 pb-2 font-medium text-base w-full"
                            />
                            <input
                                id="inputThumbnail"
                                className="hidden"
                                type="file"
                                onChange={eventOnchangeThumbnailBlog}
                            />
                            
                        </div>
                        <div className="md:w-3/5">
                            <div className="">
        
                                <CreatableSelect
                                    isMulti
                                    // getOptionLabel={option => option.name}
                                    // getOptionValue={option => option.label}
                                    // formatOptionLabel={option => option.name ? option.label : `${option.label} Whatever`}
                                    formatCreateLabel={(inputValue) => `Tạo tag ${inputValue}`}
                                    isValidNewOption={(value) =>
                                        value.length > 1 && value.length < 15
                                    }
                                    // isValidNewOption={() => true}
                                    options={optionTagDefault}
                                    placeholder="Ví dụ: ReactJS, NodeJS, UX, UI"
                                    noOptionsMessage={() => "Không tìm thấy"}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: "#ccc",
                                            outline: "none",
                                            backgroundColor: "#fafafa",
                                            borderRadius: "6px",
                                            padding: "3px 5px",
                                        }),
                                    }}
                                    // defaultValue={selectedTags}
                                    onChange={eventOnchangeTagsBlog}
                                />
        
                                <div className="flex items-center mt-4">
                                    <input
                                        id="idCheckPublished"
                                        type="checkbox"
                                        className=""
                                        onChange={(e) =>
                                            setDataBlog({
                                                ...dataBlog,
                                                published: e.target.checked,
                                            })
                                        }
                                        checked={dataBlog.published}
                                    />
                                    <label htmlFor="idCheckPublished" className="ml-2">
                                        Bài viết công khai
                                    </label>
                                </div>
                            </div>
                            <div className="mt-10 border-t py-5 flex bottom-0 justify-end">
                                <button
                                    onClick={handleCreateBlog}
                                    className="border rounded-md py-2 px-3 bg-green-600 text-white"
                                >
                                    Xuất bản ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </main>
    );
};

export default CreateBlog;
