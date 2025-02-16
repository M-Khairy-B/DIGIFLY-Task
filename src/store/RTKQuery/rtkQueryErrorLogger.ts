import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { notification } from 'antd/lib';

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            if (typeof document !== 'undefined') {
                notification.error({
                    message: 'An error occurred. Please try again later.',
                });
            }
        }
        return next(action);
    };
