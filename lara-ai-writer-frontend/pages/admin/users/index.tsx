import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Title from "@/components/Layouts/Shared/Title";
import Table from "@/components/Layouts/Shared/Table";
import Badge from "@/components/Layouts/Shared/Badge";
import { StatusColor } from "@/components/Constants/theme-color.constant";
import { ADMIN_USERS_FEATURE_BUTTONS, ADMIN_USERS_STATUS_COLORS, ADMIN_USERS_STATUS_FONT_SIZE, ADMIN_USERS_FILTER_FIELDS, ADMIN_USERS_PARTIAL_MENU } from "@/components/Constants/admin/users-page.constant";
import { ADMIN_MENU_LIST } from "@/components/Constants/menu-list.constant";

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
            <div className="d-flex align-items-center">
                <img
                    src={"https://ui-avatars.com/api/?name=" + record.name.replace(" ", "+") + "&background=0D8ABC&color=fff"}
                    className="flex-shrink-0 rounded-circle width-10 height-10 mr-1"
                    alt="Avatar"
                />
                <Link href={`/users/${record.id}`}>{text}</Link>
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
            <Badge content={text} color={getStatusColor(text.toLowerCase())} fontSize={ADMIN_USERS_STATUS_FONT_SIZE} />
        )
    }
];

const ManageUserPage = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });

    return user ? (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <DashboardLayout
                user={user}
                sidebar={<Sidebar menuList={ADMIN_MENU_LIST} />}
            >
                <div className="container py-5">
                    <Breadcrumbs breadcrumbs={[
                        {
                            url: '/admin',
                            title: 'Dashboard',
                            current: false,
                        },
                        {
                            url: '/admin/users',
                            title: 'Users',
                            current: true,
                        }
                    ]} />
                    <Title title="Users" buttons={ADMIN_USERS_FEATURE_BUTTONS} />
                    <Table
                        headerTitle="Users"
                        dataSource={dataSource}
                        columns={columns}
                        partials={ADMIN_USERS_PARTIAL_MENU}
                        filterFields={ADMIN_USERS_FILTER_FIELDS}
                        exportFile={false}
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
};

export default ManageUserPage;
