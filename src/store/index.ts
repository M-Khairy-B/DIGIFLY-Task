import authUserReducer from './reducers/authUserSlice';
import utilitiesReducer from '@/src/store/reducers/utilitiesSlice';
import { rtkQueryErrorLogger } from '@/src/store/RTKQuery/rtkQueryErrorLogger';
import { authApi } from '@/src/store/RTKQuery/auth/authApi';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createWrapper } from 'next-redux-wrapper';
import { userApi } from './RTKQuery/auth/userApi';

const makeStore = () => {
    const store = configureStore({
        reducer: {
            authUserSlice: authUserReducer,
            utilitiesSlice: utilitiesReducer,

            [authApi.reducerPath]: authApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
            
        },

        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }).concat(
                rtkQueryErrorLogger,
                authApi.middleware,
                userApi.middleware,
            ),
        devTools: true,
    });
    setupListeners(store.dispatch);
    return store;
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);
