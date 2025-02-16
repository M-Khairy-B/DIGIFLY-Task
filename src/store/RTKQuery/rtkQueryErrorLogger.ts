import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';
import { notification } from 'antd/lib';

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            if (typeof document !== 'undefined') {
                if ((action.payload as any).data?.Message) {
                    notification.error({
                        message: (action.payload as any).data?.Message,
                    });
                } else {
                    notification.error({
                        message: (action.payload as any).data?.Message,
                    });
                }
            }
        }
        return next(action);
    };
