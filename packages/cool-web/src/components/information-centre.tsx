import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

function InformationCentre() {
  const { t } = useTranslation(['information-centre']);
  return (
    <>
      <div className="px-4 lg:px-8  text-black">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">{t('title')}</div>
        </div>
      </div>
    </>
  );
}

export default memo(InformationCentre);
