import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

const MainLayout = ({ children }: any) => {
    return (
        <>
            <Header />
            <div className="d-flex flex-column flex-fill">
                {children}
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;