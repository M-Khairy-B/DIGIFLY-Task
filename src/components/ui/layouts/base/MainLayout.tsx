import { FC, ReactNode, useState } from 'react';
import { Layout } from 'antd/lib';
import Head from 'next/head';
import { Content } from 'antd/lib/layout/layout';
import Footer from '@/src/components/ui/layouts/common/Footer';
import Header from '@/src/components/ui/layouts/common/header/Header';

interface IProps {
    children: ReactNode;
    title: string;
}

const MainLayout: FC<IProps> = (props) => {
    const { children, title } = props;
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header />
            <Layout className={'min-h-screen'}>
                <Layout className={'bg-[#FCFCFE]'}>
                    <Content className={'bg-c_white'}>{children}</Content>
                    <Footer />
                </Layout>
            </Layout>
        </>
    );
};
export default MainLayout;
