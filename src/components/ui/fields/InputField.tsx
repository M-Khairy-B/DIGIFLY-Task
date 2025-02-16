import { FieldProps, getIn } from 'formik';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { getString } from '@/src/utilities/string';
import FieldMessage from '@/src/components/ui/fields/FieldMessage';
import RequiredFieldIcon from '../icons/RequiredFieldIcon';
import { useDirection } from '@/src/hooks/useDirection';

interface IProps extends FieldProps {
    type?: HTMLInputTypeAttribute;
    label?: string;
    placeholder?: string;
    isDisabled?: boolean;
    required?: boolean;
    className?: string;
    children?: ReactNode;
    hideError?: boolean;
}

const InputField: React.FC<IProps> = (props) => {
    const {
        hideError,
        required,
        children,
        type = 'text',
        label,
        placeholder,
        field,
        isDisabled = false,
        className,
        form: {
            handleBlur,
            initialValues,
            values,
            setFieldValue,
            errors,
            touched,
        },
        ...restProps
    } = props;

    const errorMessage = getIn(errors, field.name);
    const touch = getIn(touched, field.name);
    const locale = useDirection();

    return (
        <div className={`input-field ${locale}` + getString(className)}>
            <label>
                <span className="flex gap-[4px]">
                    {label && <span className={'block !mb-0'}>{label}</span>}
                    {required && (
                        <span>
                            <RequiredFieldIcon />
                        </span>
                    )}
                </span>

                <input
                    {...field}
                    {...restProps}
                    name={field.name}
                    type={type}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    className={`
                          w-full p-2 border rounded-md focus:outline-none 
                          ${touch && errorMessage ? 'border-red-600' : 'border-gray-300'}  `}
                />
                {children}
            </label>

            {errorMessage && touch && !hideError && (
                <FieldMessage message={errorMessage} />
            )}
        </div>
    );
};

export default InputField;
