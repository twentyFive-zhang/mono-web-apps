import React, { memo } from 'react';
import { useTranslation, Trans } from 'next-i18next';
import { Timeline } from 'antd';

function EquityFinancingConsultant() {
  const { t } = useTranslation(['equity-financing-consultant']);
  const { t: t1 } = useTranslation(['equity-financing-business-process']);
  const investmentBankingOverviewList: {
    title: string;
    description: string;
  }[] = t('investment-banking-overview.list', {
    returnObjects: true,
  });
  const investmentBankingOverviewProcessList: {
    title: string;
    description: string[];
  }[] = t('investment-banking-business-process.list', {
    returnObjects: true,
  });
  const list: { title: string; description: string[] }[] = t1('list', {
    returnObjects: true,
  });
  return (
    <>
      <div className="px-4 lg:px-8  text-white py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-5xl ">
            <div className="text-5xl  pb-12 text-center font-semibold antialiased mb-10">
              {t('title')}
            </div>

            <div className="text-3xl font-bold mb-12 mt-16 text-center">
              {t('investment-banking.title')}
            </div>
            <div className="mb-4 text-lg lg:text-lg font-light ">
              <Trans
                components={{
                  bold: <span className="font-bold"></span>,
                  br: <div className="h-6"></div>,
                }}
                ns={['equity-financing-consultant']}
                i18nKey={'investment-banking.description'}
                tOptions={{
                  returnObjects: true,
                  joinArrays: '\n',
                }}
              ></Trans>
            </div>
            {/* <Divider style={{ color: '#fff' }} /> */}
            <div className="divide-y-2 bg-white/0 w-full h-[4px] shadow-inner mb-6 mt-20"></div>
            <div className="grid grid-cols-1 gap-10 ">
              <div className="text-center">
                <div className="text-3xl font-bold mb-12 mt-16">
                  {t('investment-banking-overview.title')}
                </div>
                <div className="bg-white text-blue-900 rounded-lg px-8 py-8 text-center text-lg grid grid-cols-1 lg:grid-cols-2 gap-10  ">
                  {investmentBankingOverviewList.map((item, i) => (
                    <div key={i} className="">
                      <div className="font-semibold pb-6">{item.title}</div>
                      <div className="font-light">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="divide-y-2 bg-white/0 w-full h-[4px] shadow-inner mb-6 mt-20"></div>
            <div className="grid grid-cols-1 gap-10 ">
              <div className="text-center">
                <div className="text-3xl font-bold mb-12 mt-16">
                  {t('investment-banking-business-process.title')}
                </div>
                <div className="bg-white text-blue-900 rounded-lg px-8 py-8 text-center text-lg grid grid-cols-1 lg:grid-cols-2 gap-10  ">
                  {investmentBankingOverviewProcessList.map((item, i) => (
                    <div key={i} className="">
                      <div className="font-semibold pb-6">{item.title}</div>
                      <div className="font-light">
                        {item.description.map((desc, j) => (
                          <p className="mb-6" key={j}>
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="divide-y-2 bg-white/0 w-full h-[4px] shadow-inner mb-6 mt-20"></div>
            <div className="grid grid-cols-1 gap-10">
              <div className="text-center">
                <div className="text-3xl font-bold mb-12 mt-16">
                  {t1('title')}
                </div>
                <div className="text-left text-white">
                  <Timeline
                    mode="left"
                    items={list.map((item) => ({
                      color: 'white',
                      children: (
                        <div className="pl-4 mb-6">
                          <div className="text-lg lg:text-lg font-bold lh-[30px] h-[30px] mb-4 text-white">
                            {item.title}
                          </div>
                          {item.description.map((item, i) => (
                            <p
                              key={i}
                              className=" text-lg lg:text-lg font-light mb-2 text-white"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(EquityFinancingConsultant);
