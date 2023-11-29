import { Fragment, Suspense } from "react";

import { BlogsGetProps } from "../../types";
import SideBarLeft from "../components/SidebarLeft";
import CardArticle from "../components/CardArticle";
import SideBarRight from "../components/SidebarRight";
import SkeletonCardItem from "../../skeletons/components/skeleton-card-item";

interface HomeTemplateProps {
    blogs: BlogsGetProps[]
}

const HomeTemplate = ({ blogs } : HomeTemplateProps) => {

    return (
        <main className="max-w-7xl w-full min-h-screen mx-auto">
            <div className="grid grid-cols-12">
                <div className="col-span-2 pt-3 h-full hidden xl:block">
                    <SideBarLeft />
                </div>
                <div className="xl:col-span-7 lg:col-span-8 col-span-full pt-3">
                    <Suspense fallback={<SkeletonCardItem />}>
                        <>
                            {
                                blogs && blogs.map((item, index) => {
                                    return (
                                        <Fragment key={index}>
                                            <CardArticle blog={item} />
                                        </Fragment>
                                    );
                                })
                            }
                        </>
                    </Suspense>
                </div>
                <div className="xl:col-span-3 lg:col-span-4 col-span-full pt-3 h-full">
                    <SideBarRight />
                </div>
            </div>
        </main>
    )
}

export default HomeTemplate;