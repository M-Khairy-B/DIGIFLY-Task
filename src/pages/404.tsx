import { NextPage } from 'next';
import { useI18n } from '@/src/locales';
import MainLayout from '@/src/components/ui/layouts/base/MainLayout';

const NotFoundPage: NextPage = () => {
    const t = useI18n();
    return (
        <MainLayout title={'pageName'}>
            <div className="container">
                <h2 className={'text-center'}>notFoundPage</h2>
            </div>
        </MainLayout>
    );
};
export default NotFoundPage;
