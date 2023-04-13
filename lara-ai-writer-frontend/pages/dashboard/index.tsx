import { useAuth } from "@/hooks/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import LinkButton from "@/components/Layouts/Shared/LinkButton";
import { USER_MENU_LIST } from "@/components/Constants/menu-list.constant";
import { DASHBOARD_CATEGORIES, DASHBOARD_FEATURE_BUTTONS } from "@/components/Constants/dashboard-page.constant";
import { FEATURE_BUTTONS } from "@/components/Constants/feature-buttons.constant";
import DynamicIcon from "@/components/Layouts/Shared/DynamicIcon";

const Dashboard = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });

    return user ? (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <DashboardLayout
                user={user}
                sidebar={<Sidebar menuList={USER_MENU_LIST} />}
            >
                <div className="bg-base-0">
                    <div className="container py-5">
                        <div className="d-flex">
                            <div className="row no-gutters w-100">
                                <div className="d-flex col-12 col-lg-6 col-md-6 col-sm-12">
                                    <div className="flex-shrink-1">
                                        <Image src={"/userImg.png"} alt="user-default-image" className="rounded-circle" height={64} width={64} />
                                    </div>
                                    <div className="flex-grow-1 align-items-center ml-3">
                                        <h4 className="font-weight-medium mb-0">{user.name}</h4>
                                        <div className="d-flex flex-wrap">
                                            <div className="d-inline-block mt-2 mr-4">
                                                <div className="d-flex">
                                                    <div className="d-inline-flex align-items-center">
                                                        <DynamicIcon iconName={'plans'} iconColor={null} iconBackground={false} />
                                                    </div>

                                                    <div className="d-inline-block ml-2">
                                                        <Link href="/plans" className="text-dark text-decoration-none">Plan</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row-reverse align-items-center col-12 col-lg-6 col-md-6 col-sm-12">
                                    {DASHBOARD_FEATURE_BUTTONS.map((button, index) => {
                                        return (
                                            <div className="ml-2" key={"dashboard_link_button_" + index}>
                                                <LinkButton item={FEATURE_BUTTONS[button]} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5 bg-base-1">
                    {DASHBOARD_CATEGORIES.map((category) => {
                        return (
                            <div className="py-3" key={'dashboard_category_' + category.name}>
                                <div className="row">
                                    <div className="d-flex flex-row col-6 align-items-center px-2">
                                        <h4>{category.title}</h4>
                                    </div>
                                    <div className="d-flex flex-row-reverse col-6 align-items-center px-2">
                                        {category.buttons.map((button, index) => {
                                            return (
                                                <div className="ml-1" key={"dashboard_category_" + category.name + "_link_button_" + index}>
                                                    <LinkButton item={FEATURE_BUTTONS[button]} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="row">
                                    {category.content.items.map((item, index) => {
                                        return (
                                            <div className={"col-12 col-md-6 p-2 col-lg-" + 12 / category.content.perRow} key={"dashboard_category_" + category.name + "_item_" + index}>
                                                <category.content.itemType item={item} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DashboardLayout >
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

export default Dashboard;
