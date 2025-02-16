import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { AppState } from '@/src/store';

let baseUrl = process.env.BASE_URL + '/';

export const getFetchBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as AppState).authUserSlice.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});
