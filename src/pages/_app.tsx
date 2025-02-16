import '@/src/assets/styles/globals.scss';
import { I18nProvider } from '@/src/locales';
import type { AppProps } from 'next/app';
import { wrapper } from '@/src/store';
import { Provider } from 'react-redux';
import Layout from '@/src/components/ui/layouts/base/Layout';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <I18nProvider locale={props.locale}>
          <Layout>
            <Component {...props} />
          </Layout>
        </I18nProvider>
      </Provider>
  );
}
