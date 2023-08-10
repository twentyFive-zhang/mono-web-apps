import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';

function SolutionOverview() {
  const { t } = useTranslation(['solution-overview']);
  const list: {
    title: string;
    list: { title: string; description: string }[];
  }[] = t('list', { returnObjects: true });
  return (
    <>
      <div className="px-4 lg:px-8  text-white">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className=" text-5xl  pb-12 text-center font-semibold antialiased">
              {t('title')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-10">
              {list.map((item, i) => (
                <div key={i}>
                  <div className="text-white m-6 text-center underline text-2xl ">
                    {item.title}
                  </div>
                  <div className="bg-white rounded-md p-8">
                    {item.list.map((data, j) => (
                      <div key={j} className="text-blue-900">
                        <div
                          className={`font-semibold mb-6 ${!j ? '' : 'mt-8'}`}
                        >
                          {data.title}
                        </div>
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

export default memo(SolutionOverview);
