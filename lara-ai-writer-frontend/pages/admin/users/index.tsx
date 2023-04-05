import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ADMIN_MENU_LIST } from "@/components/Constants/menu-list.constant";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Title from "@/components/Layouts/Shared/Title";

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
