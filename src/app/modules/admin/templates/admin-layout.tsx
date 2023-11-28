"use client"

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { SideBarAdminLayoutData } from "@/data/constants";

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout = ({ children } : AdminLayoutProps) => {

    const { data: session, status } = useSession();

    return (
        <main>
            <div className="">
                <div className="w-full h-[60px] px-4 flex items-center fixed top-0 ml-[300px] border-b bg-white">Header</div>
                <div className="w-full max-w-[300px] h-screen fixed top-0 left-0 bottom-0 border-r bg-white">
                    <div className="flex items-center px-4 h-[60px] border-b mb-3">
                        <Image
                            alt="ảnh người dùng"
                            src={"/images/avatar_user.jpg"}
                            width={40}
                            height={40}
                            title="hoangbao"
                            className="w-10 h-1w-10 rounded-full overflow-hidden block object-cover"
                        />
                        <span className="ml-2">{session?.user.name}</span>
                    </div>
                    <div>
                        {
                            SideBarAdminLayoutData.map((item, index) => {
                                return (
                                    <Link href={`${item.link}`}>
                                        <div className="mx-3 px-4 py-2 rounded-md hover:bg-gray-100">{item.title}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div style={{ height: "calc(100vh - 60px)" }} className="w-full fixed ml-[300px] mt-[60px]">
                    <div>{children}</div>
                </div>
            </div>
        </main>
    )
}

export default AdminLayout;