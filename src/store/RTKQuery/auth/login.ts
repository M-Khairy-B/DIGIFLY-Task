import { IResponseModel } from '@/src/models/response';
import { ILoginModel } from '@/src/models/user';
import {authApi} from "@/src/store/RTKQuery/auth/authApi";

const loginApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<
            IResponseModel<{ token: string }>,
            Partial<ILoginModel>
        >({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: JSON.parse(JSON.stringify(data)),
            }),
        }),
    }),
});

export const { useLoginMutation } = loginApi;
