import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: any;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
