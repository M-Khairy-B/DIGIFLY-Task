import React, { FC } from 'react';
import Link from 'next/link';
import { useI18n } from '@/src/locales';

interface IProps {}

const NotAuthHeaderContent: FC<IProps> = () => {
    const t = useI18n();

    return (
        <nav>
            <ul className="flex items-center gap-[25px]">
                <li>
                    <Link href="/" className="active">
                        {t('home')}
                    </Link>
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
    );
};

export default NotAuthHeaderContent;
