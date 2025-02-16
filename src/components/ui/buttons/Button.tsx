import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { getString } from '@/src/utilities/string';
import Loader from '@/src/components/ui/loaders/Loader';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    text?: string;
    icon?: ReactNode;
}

const Button: React.FC<IProps> = (props) => {
    const { isLoading = false, text, icon, className, ...restProps } = props;
    return (
        <button
            type={'button'}
            {...restProps}
            className={`${getString(className)} button`}
        >
            {icon && icon}
            {isLoading && <Loader />}
            <span>{text}</span>
        </button>
    );
};
export default Button;
