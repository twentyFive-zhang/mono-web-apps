import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import './global.css';
import { FloatButton } from 'antd';

function RootLayout({
  Component,
}: AppProps & {
  Component: NextPage;
}) {
  return (
    <>
      <Component></Component>
      <FloatButton.BackTop></FloatButton.BackTop>
    </>
  );
}

export default appWithTranslation(RootLayout);
// export default RootLayout;
