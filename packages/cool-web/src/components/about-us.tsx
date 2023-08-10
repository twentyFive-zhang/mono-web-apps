import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Affix } from 'antd';

function AboutUs() {
  const { t } = useTranslation(['about-us']);
  const list: [{ title: string; description: string[] }] = t(
    'company-culture.list',
    { returnObjects: true }
  );
  return (
    <>
      <div className="py-16 px-4 lg:px-8 text-white">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl ">
            <div className="text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('company-profile.title')}
            </div>
            <div className="text-center">
              {(
                t('company-profile.description', {
                  returnObjects: true,
                }) as string[]
              ).map((item: string, i) => (
                <div key={i} className="mb-4 text-lg lg:text-lg font-light">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 lg:px-8 bg-white text-black">
        <div className=" py-16 rounded-3xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-stone-950 text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('service-area.title')}
            </div>
            <div className="text-center">
              {(
                t('service-area.description', {
                  returnObjects: true,
                }) as string[]
              ).map((item: string, i) => (
                <div key={i} className="mb-4 text-lg lg:text-lg font-light">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-8  text-black">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className="text-white text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('company-culture.title')}
            </div>
            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 ">
              {list.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl block backdrop-blur-md  hover:bg-indigo-500/10 py-4 lg:py-10 px-6 lg:px-14  cursor-pointer hover:text-white transition hover:scale-[1.01] transform will-change-transform  antialiased shadow-2xl hover:shadow-indigo-500"
                >
                  <div className="text-2xl font-medium pt-2 antialiased">
                    {item.title}
                  </div>
                  <div className="font-light text-base lg:text-lg mt-5 pb-5">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(AboutUs);
