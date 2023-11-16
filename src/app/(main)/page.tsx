import { Metadata } from "next";
import { Fragment } from "react";
import { notFound } from "next/navigation";

import CardPost from "../modules/home/templates/CardPost";
import SideBarLeft from "../modules/home/components/SidebarLeft";
import SideBarRight from "../modules/home/components/SidebarRight";

// type Props = {
//     params: { handle: string }
// }
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const users = await getAllUsers();

//     if (!users) {
//         notFound();
//     }

//     return {
//         title: users.users[0].name
//     };
// }

export default async function HomePage() {
    // const users = await getAllUsers();

    return (
        <main className="max-w-7xl w-full min-h-screen mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-2 mt-3 px-3 h-full hidden xl:block">
                    <SideBarLeft />
                </div>
                <div className="lg:col-span-7 col-span-full mt-3 px-3">
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <CardPost post={item} />
                            </Fragment>
                        );
                    })}
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full mt-3 px-3 h-full">
                    <SideBarRight />
                </div>
            </div>
        </main>
    );
}
