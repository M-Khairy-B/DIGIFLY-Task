import { useI18n } from '@/src/locales';
import React from 'react';
import MyEditor from './MyEditor';

export const PartThree = () => {
    const t = useI18n();

    return (
        <section className="pt-[60px] pb-[30px] md:pt-[120px] md:pb-[107px] bg-[#FCFCFE">
            <div className="container">
                <div className="flex items-center gap-x-[16px] mb-[30px]">
                    <div className="w-16 h-1 bg-[#6D5CBC] rounded-full"></div>
                    <h2 className="font-bold text-[32px] leading-[48px] ">
                        {t('partThreeTitle')}{' '}
                    </h2>
                </div>
                <MyEditor />
            </div>
        </section>
    );
};
