import MainLayout from '@/src/components/ui/layouts/base/MainLayout';
import {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
} from 'next';
import { wrapper } from '@/src/store';
import withEveryone from '@/src/hooks/auth/withEveryone';
import { useI18n } from '@/src/locales';
import { HomePageMain } from '../components/pageComponent/home/HomePageMain';

const HomePage: NextPage = ({
    pageProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const t = useI18n();
    return (
        <MainLayout title={t('pageName', { name: t('home') })}>
            <HomePageMain />
        </MainLayout>
    );
};

export const getServerSideProps: GetServerSideProps = withEveryone(
    wrapper.getServerSideProps((store) => async (context) => {
        return {
            props: {},
        };
    }),
);
export default HomePage;
