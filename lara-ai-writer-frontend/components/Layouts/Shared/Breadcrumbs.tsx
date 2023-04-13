import Link from "next/link";
import DynamicIcon from "./DynamicIcon";
import { breadcrumbIconSize } from "@/components/Constants/default-icon.constant";

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
                        <li className="breadcrumb-item active text-dark d-flex align-items-center" key={'breadcrumb_' + index}>{breadcrumb.title}</li>
                    ) : (
                        <li className="breadcrumb-item d-flex align-items-center" key={'breadcrumb_' + index}>
                            <Link href={breadcrumb.url} className="text-muted me-4">{breadcrumb.title}</Link>
                            <div className="mx-3 text-muted">
                                <DynamicIcon iconName={"arrow-forward"} iconColor={null} iconBackground={false} iconSize={breadcrumbIconSize} />
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs