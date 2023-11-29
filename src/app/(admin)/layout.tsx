import AdminLayout from "@/app/modules/admin/templates/admin-layout";

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
