import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Affix, FloatButton, Spin, Progress } from 'antd';
import { useRouter } from 'next/router';
import Head from 'next/head';

const tabList = [
  'Home',
  'consultation-service',
  'software-development-digital-transformation',
  'venture-capital-incubation-service',
  'information-centre',
  'about-us',
];

function Layout({ children }: { children: React.ReactElement }) {
  const { t } = useTranslation(['common']);
  const router = useRouter();
  // console.log(router);
  const [chosenKey, setChosenKey] = useState<string>(tabList[0]);

  useEffect(() => {
    const [key] = router.pathname.split('/').reverse();
    // console.log(key);
    setChosenKey(key);
  }, [router.pathname]);

  const [percent, setPercent] = useState<number>(0);
  // const [hideProgress, setHideProgress] = useState<boolean>(false);

  useEffect(() => {
    const handleChangeStart = (url: string) => {
      setPercent(10);
    };

    const handleChangeComplete = (url: string) => {
      setPercent(100);
      const timer = setTimeout(() => {
        setPercent(0);
        clearTimeout(timer);
      }, 800);
    };

    router.events.on('routeChangeStart', handleChangeStart);
    router.events.on('routeChangeComplete', handleChangeComplete);
    router.events.on('routeChangeError', handleChangeComplete);

    return function cleanup() {
      router.events.off('routeChangeStart', handleChangeStart);
      router.events.off('routeChangeComplete', handleChangeComplete);
      router.events.off('routeChangeError', handleChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Head>
        <title>{t(chosenKey)}</title>
      </Head>
      <div
        className={`fixed top-[-10px] z-30 w-full transition delay-0 opacity-${percent}`}
      >
        <Progress
          showInfo={false}
          strokeColor={{ from: '#108ee9', to: '#87d068' }}
          percent={percent}
          trailColor="white"
        ></Progress>
      </div>
      <Affix>
        <div className="px-4 lg:px-8 py-8 shadow-lg  text-black bg-white bg-white/80 backdrop-blur backdrop-filter sticky top-0 z-10 lg:py-6">
          <div className="mx-auto max-w-screen-2xl  px-4 flex">
            <div className="text-2xl">{t('title')}</div>
            <div className="hidden md:flex md:justify-end flex-auto gap-2 md:gap-4 lg:gap-8 text-lg">
              {tabList.map((key) => (
                <div
                  key={key}
                  className={`cursor-pointer  leading-8 hover:text-black hover:underline ${
                    key === chosenKey ? 'text-black underline' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    router.push({
                      pathname: `/[locale]/${key}`,
                      query: { locale: router.query.locale || 'cn' },
                    });
                  }}
                >
                  {t(key)}
                </div>
              ))}
            </div>
            <div className="block md:hidden"></div>
          </div>
        </div>
      </Affix>

      <FloatButton.BackTop></FloatButton.BackTop>
      {children}
    </div>
  );
}

export default memo(Layout);
