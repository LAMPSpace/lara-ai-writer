import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/auth";
import useSWR from "swr";
import axios from "@/lib/axios";
import Table from "@/components/Layouts/Shared/Table";
import DynamicIcon from "@/components/Layouts/Shared/DynamicIcon";
import Badge from "@/components/Layouts/Shared/Badge";
import Sidebar from "@/components/Layouts/Shared/Sidebar";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import Breadcrumbs from "@/components/Layouts/Shared/Breadcrumbs";
import Title from "@/components/Layouts/Shared/Title";
import { DOCUMENTS_FEATURE_BUTTONS, DOCUMENTS_FILTER_FIELDS, DOCUMENTS_PARTIAL_MENU, DOCUMENTS_TEMPLATES_FONT_SIZE } from "@/components/Constants/pages/documents-page.constant";
import { USER_MENU_LIST } from "@/components/Constants/menu-list.constant";
import { useState } from "react";
import { AdditionalFilterValues } from "@/components/Layouts/Shared/Table/Filter";

const Documents = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: "auth" });
    const [additionalFilterValues, setAdditionalFilterValues] = useState<AdditionalFilterValues | null>(null)

    const {
        data,
        error,
    } = useSWR('/api/documents', () =>
        axios
            .get('/api/documents')
            .then((res) => res.data.data)
            .catch((error) => {
                if (error.response.status !== 409) throw error;
            })
    );

    const getFilterFields = () => {
        let templates = [
            {
                title: 'All',
                value: 'all'
            },
        ];
        data.forEach((item: any) => {
            let newTemplate = {
                title: item.template,
                value: item.template_uuid
            };
            if (templates.filter(item => item.title === newTemplate.title).length === 0) {
                templates.push(newTemplate);
            }
        });
        let tempFilterFields = DOCUMENTS_FILTER_FIELDS.slice();
        tempFilterFields.splice(1, 0,
            {
                name: 'template',
                title: 'Template',
                items: templates
            }
        )
        return tempFilterFields;
    }

    const handleChangeAdditionalFilterValues = (key: string, value: string) => {
        let tempFilterValues: AdditionalFilterValues = {
            'key': key,
            'value': value
        };
        setAdditionalFilterValues(tempFilterValues);
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            className: "col-12 col-lg-5",
            render: (text?: string, record?: any) => (
                <div className="d-flex">
                    <div>
                        <DynamicIcon iconName={record.icon} iconColor={record.color} iconBackground={false} />
                    </div>
                    <div className="text-truncate">
                        <div className="d-flex">
                            <Link className="text-truncate" href={`/documents/${record.uuid}`}>{text}</Link>
                            {record.favorite && <DynamicIcon iconName="MdGrade" iconBackground={false} iconColor={'yellow'} />}
                        </div>
                        <p className="m-0 text-truncate">{record.result}</p>
                    </div>
                </div>
            )
        },
        {
            title: "Template",
            dataIndex: "template",
            key: "template",
            className: "col-12 col-lg-2 d-flex align-items-center",
            render: (text: string, record?: any) => (
                <button type="button" className="button-bagde btn border-0 bg-transparent p-0" onClick={() => handleChangeAdditionalFilterValues('template', record.template_uuid)}>
                    <Badge content={text} color={record.color} fontSize={DOCUMENTS_TEMPLATES_FONT_SIZE} />
                </button>
            )
        },
        {
            title: "Words",
            dataIndex: "words",
            key: "words",
            className: "col-12 col-lg-2",
        },
        {
            title: "Created at",
            dataIndex: "created_at",
            key: "created_at",
            className: "col-12 col-lg-3",
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
                    {data &&
                        <Table
                            headerTitle="Users"
                            dataSource={data}
                            columns={columns}
                            partials={DOCUMENTS_PARTIAL_MENU}
                            filterFields={getFilterFields()}
                            exportFile={true}
                            additionalFilterValues={additionalFilterValues}
                        />
                    }
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