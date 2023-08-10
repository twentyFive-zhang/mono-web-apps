import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

function StandardizedProductsServices() {
  const { t } = useTranslation(['standardized-products-services']);
  const list: {
    title: string;
    description: string;
  }[] = t('list', { returnObjects: true });

  return (
    <>
      <div className="px-4 lg:px-8  text-white py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className=" text-5xl  pb-12 text-center font-semibold antialiased">
              {t('title')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-8">
              {list.map((item, i) => (
                <div key={i} className="p-8 bg-white/10 rounded-lg text-lg">
                  <div className="font-semibold mb-8">{item.title}</div>
                  <div className="font-light text-base">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(StandardizedProductsServices);
