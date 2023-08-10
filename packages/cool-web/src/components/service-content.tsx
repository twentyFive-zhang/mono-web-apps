import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Divider } from 'antd';

function ServiceContent() {
  const { t } = useTranslation(['service-content']);
  const list: { title: string; description: string }[] = t('list', {
    returnObjects: true,
  });
  const otherList: { title: string; description: string }[] = t(
    'other-business-consulting.list',
    {
      returnObjects: true,
    }
  );
  return (
    <>
      <div className="px-4 lg:px-8  text-black py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl">
            <div className="sticky text-white text-5xl  pb-12 text-center font-semibold antialiased">
              {t('title')}
            </div>
            <div className=" rounded-lg p-8  text-blue-800 text-lg bg-white/50">
              {list.map((item, i) => (
                <React.Fragment key={i}>
                  <div className=" ">
                    <div className=" text-left   font-bold text-base mb-10 pr-6">
                      {item.title}
                    </div>
                    <div className=" font-light ">
                      {item.description}

                      <Divider></Divider>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <div className=" ">
                <div className=" text-left   font-bold text-base mb-10 pr-6">
                  {t('other-business-consulting.title')}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                  {otherList.map((item, j) => (
                    <div
                      key={j}
                      className="bg-white/80 rounded-lg p-10 hover:scale-[1.01] transition opacity-90 hover:opacity-100"
                    >
                      <div className="mb-10 font-semibold ">{item.title}</div>
                      <div className="font-light text-base">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ServiceContent);
