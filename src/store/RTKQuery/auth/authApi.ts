import { getFetchBaseQuery } from '@/src/store/RTKQuery/getFetchBaseQuery';
import { IResponseModel } from '@/src/models/response';
import { IAuthUserModel } from '@/src/models/user';
import { createApi } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: getFetchBaseQuery,
    endpoints: (build) => ({
        getMe: build.query<IResponseModel<IAuthUserModel>, { token: string }>({
            query: (data) => ({
                url: 'auth/me',
                headers: {
                    authorization: `Bearer ${data.token.toString()}`,
                },
            }),
        }),
    }),
});
