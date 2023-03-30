import { useAuth } from '@/hooks/auth'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import DashboardLayout from '@/components/Layouts/DashboardLayout'

const Dashboard = () => {
    const router = useRouter()
    const { user } = useAuth({ middleware: 'auth' })

    return (
        user ? (
            <>
                <Head>
                    <title>Dashboard</title>
                </Head>
                <DashboardLayout user={user}>

                </DashboardLayout>
            </>
        ) : (
            <div className="flex-fill">
                <div className="bg-base-0 position-relative pt-5 pt-sm-6">
                    <div className="container position-relative z-1">
                        <div className="row py-sm-5">
                            <div className="col-12 text-center text-break">
                                <h1 className="display-4 mb-0 font-weight-bold">
                                    Loading...
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Dashboard