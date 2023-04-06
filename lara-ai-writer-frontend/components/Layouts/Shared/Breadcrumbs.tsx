import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

type Breadcrumb = {
    url: string,
    title: string,
    current: boolean,
}

type BreadcrumbProps = {
    breadcrumbs: Array<Breadcrumb>;
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbProps) => {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb px-0 bg-transparent font-weight-medium mb-0">
                {breadcrumbs.map((breadcrumb, index) => {
                    return breadcrumb.current ? (
                        <li className="breadcrumb-item active text-dark" key={'breadcrumb_' + index}>{breadcrumb.title}</li>
                    ) : (
                        <li className="breadcrumb-item d-flex align-items-center" key={'breadcrumb_' + index}>
                            <Link href={breadcrumb.url} className="text-muted me-4">{breadcrumb.title}</Link>
                            <MdArrowForwardIos className="fill-current width-3 height-3 mx-3 text-muted" />
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs