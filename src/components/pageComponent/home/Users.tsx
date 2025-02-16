import { Table, Spin } from 'antd/lib';
import type { TableProps } from 'antd/lib/';
import React, { useEffect, useState } from 'react';
import { useI18n } from '@/src/locales';
import { useAllUsersQuery } from '@/src/store/RTKQuery/auth/userApi';
import { IUserModel } from '@/src/models/user';

interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

export const Users = () => {
    const t = useI18n();
    const { data: allUser, error, isLoading } = useAllUsersQuery();
    const [dataTypeArr, setDataTypeArr] = useState<DataType[]>([]);

    useEffect(() => {
        if (allUser) {
            const formattedData: DataType[] = allUser.map(
                (user: IUserModel) => ({
                    key: user.id || 'N/A',
                    firstName: user.FirstName || 'N/A',
                    lastName: user.LastName || 'N/A',
                    phone: user.Phone || 'N/A',
                    email: user.Email || 'N/A',
                }),
            );
            setDataTypeArr(formattedData);
        }
    }, [allUser]);

    const columns: TableProps<DataType>['columns'] = [
        {
            title: t('firstname'),
            dataIndex: 'firstName',
            key: 'firstName',
            onHeaderCell: () => ({
                style: {
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#999999',
                    padding: '27px 34px',
                },
            }),
            onCell: () => ({ style: { padding: '27px 34px' } }),
        },
        {
            title: t('lastname'),
            dataIndex: 'lastName',
            key: 'lastName',
            onHeaderCell: () => ({
                style: {
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#999999',
                    padding: '27px 34px',
                },
            }),
            onCell: () => ({ style: { padding: '27px 34px' } }),
        },
        {
            title: t('mobileNumber'),
            dataIndex: 'phone',
            key: 'phone',
            onHeaderCell: () => ({
                style: {
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#999999',
                    padding: '27px 34px',
                },
            }),
            onCell: () => ({ style: { padding: '27px 34px' } }),
        },
        {
            title: t('email'),
            dataIndex: 'email',
            key: 'email',
            onHeaderCell: () => ({
                style: {
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#999999',
                    padding: '27px 34px',
                },
            }),
            onCell: () => ({ style: { padding: '27px 34px' } }),
        },
    ];
    return (
        <div className="">
            <h3 className="mb-[30px] font-bold text-[16px] leading-[24px] text-[#6D5CBC]">
                {t('result')}:
            </h3>

            <Spin spinning={isLoading}>
                <Table<DataType>
                    columns={columns}
                    dataSource={dataTypeArr}
                    scroll={{ x: '100%' }}
                    pagination={
                        dataTypeArr.length > 5 ? { pageSize: 5 } : false
                    }
                />
            </Spin>
        </div>
    );
};
