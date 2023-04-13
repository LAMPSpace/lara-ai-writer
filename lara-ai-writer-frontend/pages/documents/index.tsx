import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/auth";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Title from "@/components/Layouts/Shared/Title";
import Badge from "@/components/Layouts/Shared/Badge";
import Table from "@/components/Layouts/Shared/Table";
import { USER_MENU_LIST } from "@/components/Constants/menu-list.constant";
import { StatusColor } from "@/components/Constants/theme-color.constant";
import { DOCUMENTS_FEATURE_BUTTONS, DOCUMENTS_FILTER_FIELDS, DOCUMENTS_PARTIAL_MENU, DOCUMENTS_STATUS_FONT_SIZE } from "@/components/Constants/documents-page.constant";
import { ADMIN_USERS_STATUS_COLORS } from "@/components/Constants/admin/users-page.constant";
import DynamicIcon from "@/components/Layouts/Shared/DynamicIcon";

const Documents = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });

    const getStatusColor = (text: keyof StatusColor) => {
        return ADMIN_USERS_STATUS_COLORS[text];
    }

    const dataSource = [
        {
            id: 1,
            name: "John Doe",
            email: "johndoe1@gmail.com",
            status: "Active"
        },
        {
            id: 2,
            name: "John Doe 2",
            email: "johndoe2@gmail.com",
            status: "Inactive"
        },
        {
            id: 3,
            name: "John Doe 3",
            email: "johndoe3@gmail.com",
            status: "Active"
        },
    ];

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            className: "col-12 col-lg-5",
            render: (text?: string, record?: any) => (
                <div className="d-flex">
                    <div>
                        <DynamicIcon iconName={'MdAdsClick'} iconColor={'red'} iconBackground={false} />
                    </div>
                    <div>
                        <Link href={`/users/${record.id}`}>{text}</Link>
                        <p className="m-0">Testtttttttttt</p>
                    </div>
                </div>
            )
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            className: "col-12 col-lg-5"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            className: "col-12 col-lg-2",
            render: (text: string, record?: any) => (
                <Badge content={text} color={getStatusColor(text.toLowerCase())} fontSize={DOCUMENTS_STATUS_FONT_SIZE} />
            )
        }
    ];
    return user ? (
        <>
            <Head>
                <title>Documents</title>
            </Head>
            <DashboardLayout user={user} sidebar={<Sidebar menuList={USER_MENU_LIST} />}>
                <div className="container py-5 bg-base-1">
                    <Breadcrumbs breadcrumbs={[
                        {
                            url: '/dashboard',
                            title: 'Home',
                            current: false,
                        },
                        {
                            url: '/documents',
                            title: 'Documents',
                            current: true,
                        }
                    ]} />
                    <Title buttons={DOCUMENTS_FEATURE_BUTTONS} title="Documents" />
                    <Table
                        headerTitle="Users"
                        dataSource={dataSource}
                        columns={columns}
                        partials={DOCUMENTS_PARTIAL_MENU}
                        filterFields={DOCUMENTS_FILTER_FIELDS}
                        exportFile={true}
                    />
                </div>
            </DashboardLayout>
        </>
    ) : (
        <div className="flex-fill">
            <div className="bg-base-0 position-relative pt-5 pt-sm-6">
                <div className="container position-relative z-1">
                    <div className="row py-sm-5">
                        <div className="col-12 text-center text-break">
                            <h1 className="display-4 mb-0 font-weight-bold">Loading...</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Documents;