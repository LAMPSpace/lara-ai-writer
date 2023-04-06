import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ADMIN_MENU_LIST } from "@/components/Constants/menu-list.constant";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Title from "@/components/Layouts/Shared/Title";
import Table from "@/components/Layouts/Shared/Table";
import { MdMoreHoriz } from "react-icons/md";
import Link from "next/link";

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
        email: "johndoe2@gmail.com",
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
            <Link href={`/users/${record.id}`}>{text}</Link>
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
    }
];

const partials = () => {
    return (
        <>
            <button className="btn d-flex align-items-center btn-sm text-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <MdMoreHoriz className="fill-current width-4 height-4" />
            </button>
            <div className="dropdown-menu dropdown-menu-right border-0 shadow">
                <Link className="dropdown-item d-flex align-items-center" href="#">Edit</Link>

            </div>
        </>
    )
};

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
                <Title title="Users" buttonLink="/users/create" buttonTitle="New" />
                <Table
                    headerTitle="Users"
                    dataSource={dataSource}
                    columns={columns}
                    partials={partials}
                />
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
