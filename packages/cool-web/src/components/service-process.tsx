import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Timeline } from 'antd';

function ServiceProcess() {
  const { t } = useTranslation(['service-process']);
  const list: { title: string; description: string; list: string[] }[] = t(
    'list',
    { returnObjects: true }
  );
  return (
    <>
      <div className="px-4 lg:px-8  text-blue-900">
        <div className=" py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-5xl ">
            <div className=" text-5xl  pb-12 text-center font-semibold antialiased">
              {t('title')}
            </div>
            <div>
              <Timeline
                mode="left"
                items={list.map((item) => ({
                  // label: item.title,
                  dot: (
                    <div className="w-[30px] h-[30px] rounded-full bg-purple-50"></div>
                  ),
                  children: (
                    <div className="text-blue-900">
                      <div className="pl-4 mb-6 flex-wrap lg:flex lg:flex-nowrap">
                        <div className="text-lg lg:text-lg font-bold lh-[30px] h-[30px] mb-4 pr-6 lg:pr-20">
                          {item.title}
                        </div>
                        <p className=" text-lg lg:text-lg font-light mb-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4 p-8 bg-gradient-to-r from-sky-500/30 to-indigo-500/30 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-7">
                        {item.list.map((desc, j) => (
                          <div key={j} className="text-base">
                            {desc}
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                }))}
              ></Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(ServiceProcess);
