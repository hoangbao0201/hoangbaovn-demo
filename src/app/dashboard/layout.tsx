export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <nav>Layout Dashboard</nav>

            {children}
        </section>
    );
}
