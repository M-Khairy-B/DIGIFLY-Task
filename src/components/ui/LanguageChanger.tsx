import { FC, useState } from 'react';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/src/locales';
import EnglishIcon from './icons/EnglishIcon';
import ArabicIcon from './icons/ArabicIcon';

interface IProps {}

const LanguageChanger: FC<IProps> = (props) => {
    const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();
    const t = useI18n();
    const [selectOption, setSelectOption] = useState<string>(
        locale == 'en' ? 'English' : 'عربي',
    );

    return (
        <div className="flex items-center">
            {locale === 'ar' ? (
                <button
                    className="flex items-center gap-2"
                    onClick={() => {
                        setSelectOption('English');
                        changeLocale('en');
                    }}
                >
                    <span>EN</span>
                    <EnglishIcon />
                </button>
            ) : (
                <button
                    className="flex items-center gap-2"
                    onClick={() => {
                        setSelectOption('عربي');
                        changeLocale('ar');
                    }}
                >
                    <span>العربية</span>
                    <ArabicIcon />
                </button>
            )}
        </div>
    );
};

export default LanguageChanger;
