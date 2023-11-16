import { IconComment, IconHear, IconSave } from "@/app/modules/common/icons";
import Image from "next/image";
import { Fragment } from "react";

const BlogDetailData = {
    title: '⚡️7 easy AI-product integrations (to keep up with the times 👴🏻👨‍🔧)',
    image: '/images/bg_blog.png',
    content: 'Get a working chatBot with a few lines of code, then customize and embed as deeply as you need to.'
}

export default function BlogDetailPage() {
    return (
        <main className="max-w-7xl w-full min-h-screen mx-auto mb-4">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1 xl:block hidden mt-3">
                    <div>
                        <div className="bg-white px-3 py-4 shadow-sm rounded-md">
                            <div className="text-gray-500 space-y-3">

                                <div className="flex flex-col items-center">
                                    <div className="p-2 flex-1 cursor-pointer hover:bg-gray-100 rounded-full">
                                        <IconHear size={24} className="fill-gray-500"/>
                                    </div>
                                    <p className="text-lg">0</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 flex-1 cursor-pointer hover:bg-gray-100 rounded-full">
                                        <IconComment size={24} className="fill-gray-500"/>
                                    </div>
                                    <p className="text-lg">0</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="p-2 flex-1 cursor-pointer hover:bg-gray-100 rounded-full">
                                        <IconSave size={24} className="fill-gray-500"/>
                                    </div>
                                    <p className="text-lg">0</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-8 col-span-full mt-3">
                    <div className="px-3">
                        <div className="bg-white rounded-md shadow-sm px-5 py-6">
                            <article className="">
                                <header className="mb-4">
                                    <div className="mb-6">
                                        <Image
                                            width={800}
                                            height={800}
                                            alt="ảnh bìa"
                                            src={`${BlogDetailData.image}`}
                                            className="aspect-video mx-auto block max-w-full w-full object-cover rounded-md"
                                        />
                                    </div>
                                    <h1 className="font-semibold text-2xl">{BlogDetailData.title}</h1>
                                </header>
                                <div className="">
                                    {BlogDetailData.content}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full mt-3">
                    <div>
                        <div className="bg-white px-3 py-4 rounded-md shadow-sm">TOC</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
