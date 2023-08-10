import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Affix } from 'antd';

function Layout({ children }: { children: React.ReactElement }) {
  const { t } = useTranslation(['common']);
  return (
    <>
      <Affix>
        <div className="px-4 lg:px-8 py-8 shadow-lg  text-black bg-white">
          <div className="mx-auto max-w-screen-2xl  ">
            <div className="text-2xl">{t('title')}</div>
          </div>
        </div>
      </Affix>
      {children}
    </>
  );
}

export default memo(Layout);
