

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="">
                {children}
            </div>
        </>
    );
}
