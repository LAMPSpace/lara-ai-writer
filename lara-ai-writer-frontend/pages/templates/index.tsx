import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import useSWR from "swr";
import axios from "@/lib/axios";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import TemplateCategory from "@/components/Layouts/Shared/TemplateCategory";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Badge from "@/components/Layouts/Shared/Badge";
import Title from "@/components/Layouts/Shared/Title";
import Search from "@/components/Layouts/Shared/Table/Search";
import { USER_MENU_LIST } from "@/components/Constants/menu-list.constant";
import { TEMPLATES_FEATURE_BUTTONS, TemplateCategoryItems, TemplateItem, templateCategoryInformation } from "@/components/Constants/templates-page.constant";
import { TemplateCardItemInformation } from "@/components/Layouts/Shared/TemplateCardItem";
import { getColorCode } from "@/helpers/color.helper";

const Templates = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });
    const [searchValue, setSearchValue] = useState("");
    const [chosenCategory, setChosenCategory] = useState("all");

    const {
        data,
        error,
    } = useSWR('/api/templates', () =>
        axios
            .get('/api/templates')
            .then((res) => res.data.data)
            .catch((error) => {
                if (error.response.status !== 409) throw error;
            })
    );

    const transformData = (data: TemplateItem[]) => {
        let transformedData: TemplateCategoryItems = {};
        data && data.forEach((element) => {
            let name = element['category'].toLowerCase();
            let item: TemplateCardItemInformation = {
                icon: {
                    iconName: element['icon'],
                    iconColor: element['color'],
                    iconSize: templateCategoryInformation.itemsIconSize,
                    iconBackground: true
                },
                title: element['name'],
                content: element['description'],
                titleFontSize: templateCategoryInformation.itemsTitleFontSize,
                contentFontSize: templateCategoryInformation.itemsContentFontSize
            };
            if (Object.keys(transformedData).includes(name)) {
                transformedData[name].items.push(item);
            } else {
                transformedData[name] = {
                    title: element['category'],
                    color: element['color'],
                    perRow: templateCategoryInformation.perRow,
                    titleFontSize: templateCategoryInformation.titleFontSize,
                    items: [item]
                };
            }
        });
        return transformedData;
    }

    const getFilterData = (data: TemplateItem[]) => {
        let filterData = data && data.filter(item => item.name.toLowerCase().includes(searchValue));
        filterData = chosenCategory === "all" ? filterData : filterData.filter(item => item.category.toLowerCase() === chosenCategory);
        return transformData(filterData);
    }

    const transformedData = transformData(data);
    const transformedFilterData = getFilterData(data);

    return user ? (
        <>
            <Head>
                <title>Templates</title>
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
                            url: '/templates',
                            title: 'Templates',
                            current: true,
                        }
                    ]} />
                    <Title buttons={TEMPLATES_FEATURE_BUTTONS} title="Templates" />
                </div>
                <div className="container py-2 bg-base-1">
                    <div className="input-group input-group-lg bg-white p-3">
                        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                    </div>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="col-lg-2 d-flex align-items-center justify-content-center bg-white border border-light px-0"
                            key={"template_category_filter_all"}>
                            <button className="w-100 h-100 border-0 bg-white d-flex align-items-center justify-content-center py-2 px-0"
                                onClick={() => setChosenCategory('all')}>
                                <span className="px-2" style={{
                                    color: chosenCategory === 'all' ? getColorCode('primary') : getColorCode('black'),
                                    fontWeight: chosenCategory === 'all' ? 'bold' : 'normal',
                                }}>All</span>
                                <Badge content={data ? data.length.toString() : '0'} color={'primary'} fontSize={templateCategoryInformation.titleFontSize} />
                            </button>
                        </div>
                        {Object.keys(transformedData).map((category, index) => {
                            return (
                                <div className="col-lg-2 d-flex align-items-center justify-content-center bg-white border border-light px-0"
                                    key={"template_category_filter_" + index}>
                                    <button className="w-100 h-100 border-0 bg-white d-flex align-items-center justify-content-center py-2 px-0"
                                        onClick={() => setChosenCategory(transformedData[category].title.toLowerCase())}>
                                        <span className="px-2" style={{
                                            color: chosenCategory === transformedData[category].title.toLowerCase() ? getColorCode(transformedData[category].color) : getColorCode('black'),
                                            fontWeight: chosenCategory === transformedData[category].title.toLowerCase() ? 'bold' : 'normal',
                                        }}>{transformedData[category].title}</span>
                                        <Badge content={transformedData[category].items.length.toString()} color={transformedData[category].color} fontSize={transformedData[category].titleFontSize} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="container py-2 bg-base-1">
                    {Object.keys(transformedFilterData).map((category, index) => {
                        return (
                            <TemplateCategory templateCategoryInformation={transformedFilterData[category]} key={"template_category_" + index} />
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