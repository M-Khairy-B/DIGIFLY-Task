import Link from 'next/link';
import React, { FC } from 'react';
import { useI18n } from '@/src/locales';
import { HRef } from '@/src/utilities/href';
import LanguageChanger from '@/src/components/ui/LanguageChanger';

interface IProps {}

const NotAuthHeaderMobileContent: FC<IProps> = (props) => {
    const t = useI18n();
    return (
        <>
            <nav>
                <ul className={'flex flex-col gap-[25px]'}>
                    <li>
                        <Link href="/">{t('home')}</Link>
                    </li>
                    <li>
                        <Link href="/categories">{t('categories')}</Link>
                    </li>
                    <li>
                        <Link href="/about">{t('contactUs')}</Link>
                    </li>
                    <li>
                        <Link href="/about">{t('aboutUs')}</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-[10px]">
                <LanguageChanger />
            </div>
        </>
    );
};

export default NotAuthHeaderMobileContent;
