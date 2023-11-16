import AvatarRank from "@/app/modules/common/components/AvatarRank";
import { IconCrawn, IconShare } from "@/app/modules/common/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const PostData = {
    name: 'Nguyễn Hoàng Bảo',
    avatar_url: "/images/avatar_user.jpg",
    slug: 'hello-moi-nguoi',
    title: "Crafting a Comprehensive Hospital Incident Report: A Quick Guide",
    content: 'A day in the hospital can be an adventure. No day is ever quite the same. Each sunrise ushers in a myriad of stories: heartwarming reunions, emotional farewells, and now and again, unexpected incidents that keep the staff on their toes. '
}

interface CardPostProps {
    post: any
}

const CardPost = ({post} : CardPostProps) => {

    const isCrawn = 1;

    return (
        <article className="flex mb-4 relative rounded-md overflow-hidden shadow-sm outline-2 outline-blue-500 hover:outline-dashed">
            <div className="bg-white">
                <div className="flex px-4 pt-4">
                    <Link href={`/`}>
                        <AvatarRank rank={1}>
                            <Image
                                width={48}
                                height={48}
                                alt="ảnh người dùng"
                                src={PostData.avatar_url}
                                className="w-12 h-12 block object-cover rounded-full flex-shrink-0"
                            />
                        </AvatarRank>
                    </Link>
                    <div className="ml-3">
                        <Link href={`/`}>
                            <p className="hover:underline font-medium">{PostData.name}</p>
                        </Link>
                        <Link href={`/`}>
                            <p className="text-sm hover:underline">
                                12 phút trước
                            </p>
                        </Link>
                    </div>
                    <div className="ml-3">
                        <span className="text-sm font-medium border border-gray-400 px-2 py-1 rounded-md">
                            Cấp 12
                        </span>
                    </div>
                </div>
                <div className="px-4 py-4">
                    <h2 className="text-lg font-semibold mb-2">
                        <Link href={`/blog/${PostData.slug}`} className="hover:underline">
                            {PostData.title}
                        </Link>
                    </h2>
                    <div>
                        {PostData.content}
                    </div>
                </div>

                <div className="border-t px-4 pt-3 pb-3 flex items-center justify-between">
                    <div className="">123.890 lượt xem</div>
                    <div>
                        <button className="p-2 rounded-full hover:bg-gray-200 [&>svg]:hover:fill-blue-700">
                            <IconShare size={23}/>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardPost;