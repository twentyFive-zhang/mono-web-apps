import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

function IndustryApplicationCase() {
  const { t } = useTranslation(['industry-application-case']);
  const list: {
    title: string;
    list: { title: string; description: string }[];
  }[] = t('list', { returnObjects: true });
  return (
    <>
      {/* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */}
      <div className="px-4 lg:px-8  text-white py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className="text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('title')}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              {list.map((item, i) => (
                <div key={i} className=" text-blue-900 ">
                  <div className="text-white m-6 text-center underline text-2xl ">
                    {item.title}
                  </div>
                  <div className="p-8 rounded-md bg-white">
                    {item.list.map((data, j) => (
                      <div key={j} className="">
                        <div className="mt-4 mb-2 font-bold">{data.title}</div>
                        <div className="font-light">{data.description}</div>
                      </div>
                    ))}
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

export default memo(IndustryApplicationCase);
