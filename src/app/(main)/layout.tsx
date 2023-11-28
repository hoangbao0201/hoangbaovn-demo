import { Suspense } from "react";
import Footer from "../modules/layout/template/footer";
import Header from "../modules/layout/template/header";
import SkeletonHomePage from "../modules/skeletons/templates/skeleton-home-page";



export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Suspense fallback={<SkeletonHomePage />}>
                {children}
            </Suspense>
            <Footer />
        </>
    );
}
