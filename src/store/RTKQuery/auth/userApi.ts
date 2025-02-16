import { createApi } from '@reduxjs/toolkit/query/react';
import { getFetchBaseQuery } from '@/src/store/RTKQuery/getFetchBaseQuery';
import { IResponseModel } from '@/src/models/response';
import { IUserModel } from '@/src/models/user';

export const userApi = createApi({
    reducerPath: 'userApi', 
    baseQuery: getFetchBaseQuery,  
    tagTypes: ['user'],  
    endpoints: (build) => ({
        allUsers: build.query<IUserModel[], void>({
            query: () => ({
                url: 'user-informations',
                method: 'GET',
            }),
            providesTags: ['user'], 
        }),

        addUser: build.mutation<IResponseModel<IUserModel>, Partial<IUserModel>>({
            query: (userData) => ({
                url: 'user-informations',
                method: 'POST',
                body: userData,
            }),
            invalidatesTags: ['user'],  
        }),
    }),
});

export const { useAllUsersQuery, useAddUserMutation } = userApi;
