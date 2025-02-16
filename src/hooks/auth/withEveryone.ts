import { GetServerSideProps } from 'next';
import { wrapper } from '@/src/store';
import { CookieEnum } from '@/src/utilities/cookie';

const withEveryone = (getServerSideProps: GetServerSideProps) => {
    return wrapper.getServerSideProps((store) => async (context) => {
        const token = context.req.cookies[CookieEnum.token];
        if (token) {
            /* store.dispatch(
                 setAuthUser({ user: new A, token: token }),
             );*/
        }
        return await getServerSideProps(context);
    });
};

export default withEveryone;
