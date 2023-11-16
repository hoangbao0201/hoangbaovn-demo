"use client"

import { useState } from "react";

import ReactMarkdown from "react-markdown";
import Editor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

export default function CreateBlogPage() {

    const [contentBlog, setContentBlog] = useState<string>("");

    const handleEditorChange = ({ html, text } : { html: string, text: string }) => {
        setContentBlog(text);
    };

    return (
        <main className="">
            <div className="pt-5 px-4 bg-white">
                
                <div>
                    <input
                        placeholder="Tiêu đề bài viết"
                        className="border-b outline-none mb-4 pb-2 font-semibold text-lg w-full"
                    />
                </div>
                <div>
                    <Editor
                        value={contentBlog}
                        className="w-full min-h-[100vh - 60px]"
                        onChange={handleEditorChange}
                        renderHTML={(text) => {
                            return (
                                <ReactMarkdown
                                    // sourcePos={true}
                                    // children={text}
                                    className="prose"
                                >
                                    {text}
                                </ReactMarkdown>
                            )
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
