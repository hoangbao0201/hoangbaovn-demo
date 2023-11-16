import Link from "next/link";
import SearchMain from "../../components/SearchMain";
import { IconBell, IconPen } from "@/app/modules/common/icons";
import UserDropdown from "../../components/UserDropdown";
import clsx from "clsx";


interface HeaderProps {
    isDynamic?: boolean
}
const Header = ({ isDynamic = true }) => {

    const isLogin = false;

    return (
        <header className={clsx("w-full border-b bg-white shadow-sm z-30 top-0 left-0 right-0", { "sticky":isDynamic })}>
            <div className="max-w-7xl w-full min-h-[60px] mx-auto px-3 py-2 flex items-center">

                <p className="text-lg font-semibold flex flex-shrink-0 items-center">
                    <Link href={`/`}>HOANGBAO</Link>
                    <span className="mx-3 inline h-5 w-px bg-gray-300/60"></span>
                </p>
                <SearchMain />
                <div className="ml-auto">
                    <div className="flex items-center space-x-2">
                        <Link href={`/create/blog`} title="Tạo bài viết">
                            <i className="p-2 bg-gray-100 rounded-full block outline-blue-600 outline-2 hover:outline-dashed">
                                <IconPen
                                    size={20}
                                />
                            </i>
                        </Link>
                        <Link href={`/`} title="Thông báo">
                            <i className="p-2 bg-gray-100 rounded-full block outline-blue-600 outline-2 hover:outline-dashed">
                                <IconBell
                                    size={20}
                                />
                            </i>
                        </Link>
                        {
                            isLogin ? (
                                <UserDropdown />
                            ) : (
                                <Link href={`/auth/login`}>
                                    <span className="py-2 px-3 rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 text-white">login</span>
                                </Link>
                            )
                        }
                    </div>
                </div>

            </div>
        </header>
    )
}
export default Header;