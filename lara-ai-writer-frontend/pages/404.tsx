import Link from "next/link";

const Custom404 = () => {
    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="d-flex align-items-center justify-content-center">
                    <h1 className="text-primary border-right border-dark p-4">404</h1>
                    <h1 className="p-4">Page Not Found</h1>
                </div>
                <div className="d-flex align-items-center justify-content-center"><Link href={'/dashboard'} className="btn btn-primary">Go back to Dashboard</Link></div>
            </div>
        </div>
    );
}

export default Custom404;