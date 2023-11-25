import Footer from "../modules/layout/template/footer";
import Header from "../modules/layout/template/header";



export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header isDynamic={false}/>
            {children}
            <Footer />
        </>
    );
}
