import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/auth";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { USER_MENU_LIST } from "@/components/Constants/menu-list.constant";
import { TEMPLATES_CATEGORIES, TEMPLATES_FEATURE_BUTTONS } from "@/components/Constants/templates-page.constant";
import TemplateCategory from "@/components/Layouts/Shared/TemplateCategory";
import Badge from "@/components/Layouts/Shared/Badge";
import Title from "@/components/Layouts/Shared/Title";

const Templates = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });

    return user ? (
        <>
            <Head>
                <title>Templates</title>
            </Head>
            <DashboardLayout user={user} sidebar={<Sidebar menuList={USER_MENU_LIST} />}>
                <div className="container py-5 bg-base-1">
                    <Title buttons={TEMPLATES_FEATURE_BUTTONS} title="Templates" />
                </div>
                <div className="container py-2 bg-base-1">
                    <div className="input-group input-group-lg bg-white p-3">
                        <input type="text" name="search" className="form-control font-size-lg" id="i-search" placeholder="Search" autoFocus />
                    </div>
                    <div className="d-flex flex-row">
                        {TEMPLATES_CATEGORIES.map((category, index) => {
                            return (
                                <div className="col-12 col-md-3 col-lg-2 d-flex align-items-center justify-content-center bg-white border border-light px-0"
                                    key={"template_category_filter_" + index}>
                                    <button className="w-100 h-100 border-0 bg-white d-flex align-items-center justify-content-center py-2 px-0">
                                        <span className="px-2">{category.title}</span>
                                        <Badge content={category.items.length.toString()} color={category.color} fontSize={category.titleFontSize} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container py-2 bg-base-1">
                    {TEMPLATES_CATEGORIES.map((category, index) => {
                        return (
                            <TemplateCategory templateCategoryInformation={category} key={"template_category_" + index} />
                        );
                    })}
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

export default Templates;