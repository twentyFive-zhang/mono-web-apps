import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import './global.css';
import { FloatButton } from 'antd';
import Layout from '@components/Layout';
import { useRef } from 'react';

function RootLayout({
  Component,
}: AppProps & {
  Component: NextPage;
}) {
  const ref = useRef();
  return (
    <>
      <Layout>
        <Component></Component>
      </Layout>
    </>
  );
}

export default appWithTranslation(RootLayout);
// export default RootLayout;
