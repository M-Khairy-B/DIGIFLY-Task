import { useI18n } from '@/src/locales';
import React from 'react';
import { FormUser } from './FormUser';
import { Users } from './Users';

export const PartOne = () => {
    const t = useI18n();

    return (
        <section className="pt-[60px] pb-[30px] md:pt-[120px] md:pb-[107px] bg-[#FCFCFE">
            <div className="container">
                <div className="flex items-center gap-x-[16px]">
                    <div className="w-16 h-1 bg-[#6D5CBC] rounded-full"></div>
                    <h2 className="font-bold text-[32px] leading-[48px] ">
                        {t('partOneTitle')}{' '}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[40px]">
                    <div>
                        <FormUser />
                    </div>
                    <div>
                        <Users />
                    </div>
                </div>
            </div>
        </section>
    );
};
