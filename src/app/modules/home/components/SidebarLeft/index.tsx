import { SideBarNavigationMainData } from "@/data/constants";
import Link from "next/link";

const SideBarLeft = () => {

    return (
        <aside className="sticky top-[72px] px-2">
            <ul className="">
                {
                    SideBarNavigationMainData.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.link}>
                                    <div
                                        className="text-gray-700 flex items-center px-3 py-2 space-x-3 hover:bg-white/90 rounded-md"
                                    >
                                        {item.icon && (
                                            <i className="flex-shrink-0">{item.icon}</i>
                                        )}
                                        <p>{item.title}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default SideBarLeft;