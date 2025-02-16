import { useI18n } from '@/src/locales';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import InputField from '../../ui/fields/InputField';
import Button from '../../ui/buttons/Button';
import { useAddUserMutation } from '@/src/store/RTKQuery/auth/userApi';
import { notification } from 'antd/lib';

export const FormUser = () => {
    const t = useI18n();
    const [addUser, { isLoading, isSuccess }] = useAddUserMutation();

    const validationSchema = Yup.object().shape({
        FirstName: Yup.string()
            .min(3, t('nameMinError'))
            .required(t('nameRequired')),
        LastName: Yup.string()
            .min(3, t('nameMinError'))
            .required(t('nameRequired')),
        Phone: Yup.string()
            .matches(/^\d+$/, t('mobileNumberDigits'))
            .min(11, t('mobileNnumberMin'))
            .max(13, t('mobileNumberMax'))
            .required(t('mobileNumberRequired')),
        Email: Yup.string()
            .email(t('invalidEmail'))
            .required(t('nameRequired')),
    });
    useEffect(() => {
        if (isSuccess) {
            notification.success({ message: t('CreatedSuccess') });
        }
    }, [isSuccess]);

    return (
        <>
            <Formik
                initialValues={{
                    FirstName: '',
                    LastName: '',
                    Phone: '',
                    Email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    addUser(values);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="grid grid-cols-1 gap-[40px]">
                            <div className="flex gap-[20px] ">
                                <Field
                                    name="FirstName"
                                    component={InputField}
                                    label={t('firstname')}
                                    placeholder={t('enterfirstname')}
                                    className="w-full"
                                />
                                <Field
                                    name="LastName"
                                    component={InputField}
                                    label={t('lastname')}
                                    placeholder={t('enterlastname')}
                                    className="w-full"
                                />
                            </div>
                            <Field
                                name="Phone"
                                component={InputField}
                                label={t('mobileNumber')}
                                placeholder={t('enterMobileNumber')}
                                className="w-full"
                            />
                            <Field
                                name="Email"
                                component={InputField}
                                label={t('email')}
                                placeholder={t('enterEmail')}
                                className="w-full"
                            />
                        </div>
                        <Button
                            type="submit"
                            text={t('send')}
                            className="w-full leading-[24px] text-[16px] font-[500] px-[20px] py-[20px] bg-[#49BD88] rounded-[2px] flex items-center justify-center gap-x-[10px] text-[#FFFFFF] mt-[40px] "
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </>
    );
};
