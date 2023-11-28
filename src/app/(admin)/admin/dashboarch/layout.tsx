import AdminLayout from "@/app/modules/admin/templates/admin-layout";
import { Suspense } from "react";



export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
