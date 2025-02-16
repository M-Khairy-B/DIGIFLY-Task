import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { useI18n } from '@/src/locales';
import logoImage from '@/public/images/logo.png';
import HeaderMobileDrawer from '@/src/components/ui/layouts/common/header/HeaderMobileDrawer';
import {
    IStatusChangeModel,
    StatusChangeModel,
} from '@/src/models/status-change';
import { useSelector } from 'react-redux';
import { selectAuthUserSlice } from '@/src/store/reducers/authUserSlice';
import NotAuthHeaderContent from './NotAuthHeaderContent';
import MenuIcon from '../../../icons/MenuIcon';
import LanguageChanger from '../../../LanguageChanger';

interface IProps {}

const Header: FC<IProps> = (props) => {
    const t = useI18n();
    const [openDrawer, setOpenDrawer] = useState<IStatusChangeModel>(
        new StatusChangeModel(),
    );
    const { user } = useSelector(selectAuthUserSlice);

    return (
        <>
            <header className={'py-[15px] bg-[#FCFCFE]'}>
                <div className="container">
                    <div className="flex items-center justify-between gap-[20px]">
                        <Link href={''}>
                            <Image
                                src={logoImage}
                                width={76}
                                height={56}
                                alt="Logo"
                            />
                        </Link>
                        <div className="lg:flex hidden items-center gap-[30px]">
                            <NotAuthHeaderContent />
                        </div>
                        <div className=" hidden md:block">
                            <LanguageChanger />
                        </div>

                        <button
                            aria-label="Open menu"
                            type="button"
                            className={'lg:hidden'}
                            onClick={() => {
                                setOpenDrawer({
                                    statusChange: !openDrawer.statusChange,
                                    value: true,
                                });
                            }}
                        >
                            <MenuIcon className={'stroke-c_F47B3D'} />
                        </button>
                    </div>
                </div>
            </header>
            <HeaderMobileDrawer statusChange={openDrawer} />
        </>
    );
};

export default Header;
