import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Timeline } from 'antd';

function EquityFinancingBusinessProcess() {
  const { t } = useTranslation(['equity-financing-business-process']);
  const list: { title: string; description: string[] }[] = t('list', {
    returnObjects: true,
  });
  return (
    <>
      <div className="px-4 lg:px-8  text-black">
        <div className=" py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className="text-black text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('title')}
            </div>
            <Timeline
              mode="left"
              items={list.map((item) => ({
                // label: item.title,
                dot: (
                  <div className="w-[30px] h-[30px] rounded-full bg-purple-50"></div>
                ),
                children: (
                  <div className="pl-4 mb-6">
                    <div className="text-lg lg:text-lg font-bold lh-[30px] h-[30px] mb-4">
                      {item.title}
                    </div>
                    {item.description.map((item, i) => (
                      <p
                        key={i}
                        className=" text-lg lg:text-lg font-light mb-2"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                ),
              }))}
            ></Timeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(EquityFinancingBusinessProcess);
