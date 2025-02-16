import React from 'react';
import { useI18n } from '@/src/locales';
import CopyRightIcon from '../../icons/CopyRightIcon';

interface IProps {}

const currentYear = new Date().getFullYear();

const Footer: React.FC<IProps> = (props) => {
    const t = useI18n();
    return (
        <footer>
            <div className="copyright bg-[#6D5CBC]  py-[24px]">
                <div className="container">
                    <div className="flex items-center justify-center flex-wrap">
                        <p
                            className={
                                'text-center flex items-center gap-[10px] text-[#FFFFFF99] '
                            }
                        >
                            جميع الحقوق محفوظة <CopyRightIcon />
                            ديجي فلاي 2024
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
