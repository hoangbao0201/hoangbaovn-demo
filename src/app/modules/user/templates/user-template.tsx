import { GetUserDetailProps } from "@/lib/services/user.service";
import Image from "next/image";
import ListBlogUser from "../components/listblog-user";

interface UserDetailTemplateProps{
    slug: string
    user: GetUserDetailProps
}

const UserDetailTemplate = ({ slug, user } : UserDetailTemplateProps) => {

    return (
        <div>
            <div>
                <div className="bg-black w-full h-32"></div>

                <div className="max-w-6xl mx-auto top-0 -translate-y-20">
                    <div className="py-5 flex flex-col items-center bg-white shadow-sm rounded-md">
                        <span className="">
                            <Image
                                width={150}
                                height={150}
                                alt={`Ảnh của Bảo`}
                                className="w-32 h-32 block object-cover rounded-full overflow-hidden"
                                src={`/images/avatar_user.jpg`}
                            />
                        </span>
                        <div className="text-center mt-4">
                            <h1 className="font-semibold text-3xl mb-3">
                                {user.name}
                            </h1>
                            <div>
                                {/* {user.description} */}
                                I wish for everyone to find passion in their life. I found mine in coding
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="grid grid-cols-12">
                            <div className="md:col-span-4 col-span-full mb-4">
                                <div className="px-4 py-4 bg-white shadow-sm rounded-md">
                                    <div>
                                        <span>{user._count.blogs} bài viết</span>
                                    </div>
                                    <div>
                                        <span>0 bình luận</span>
                                    </div>
                                    <div>
                                        <span>{user._count.userSaves} chủ đề theo dõi</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-8 col-span-full mb-4">
                                <ListBlogUser slug={slug} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailTemplate;