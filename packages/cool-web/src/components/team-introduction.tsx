import React, { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Divider, Tooltip } from 'antd';

type ITeamList = { name: string; position: string; description: string[] }[];

function TeamIntroduction() {
  const { t } = useTranslation(['team-introduction']);
  const founderTeamData: ITeamList = t('founder-team.list', {
    returnObjects: true,
  });
  const partnerTeamData: ITeamList = t('partner-team.list', {
    returnObjects: true,
  });
  const counselingGroupData: ITeamList = t('counseling-support-group.list', {
    returnObjects: true,
  });
  const technicalGroupData: ITeamList = t('technical-support-group.list', {
    returnObjects: true,
  });

  return (
    <>
      <div className="px-4 lg:px-8  text-white py-16">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 py-16 rounded-3xl px-4 lg:px-8 filter ">
          <div className="mx-auto max-w-screen-2xl ">
            <div className=" text-5xl  pb-12 text-center font-semibold antialiased">
              {t('title')}
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold my-20 underline">
                {t('founder-team.title')}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {founderTeamData.map((item, i) => (
                  <div
                    key={i}
                    className={
                      'mx-auto md:even:ml-0 w-full lg:w-2/4 md:odd:mr-0 shadow-lg p-4 bg-white/30 rounded-lg text-white'
                    }
                  >
                    <Tooltip
                      color="geekblue"
                      title={
                        <div className="p-4">
                          {item.description.map((desc, j) => (
                            <p key={j} className="font-light text-base">
                              {desc}
                            </p>
                          ))}
                        </div>
                      }
                    >
                      <div className="bg-white rounded-lg text-blue-700 p-6 shadow-md">
                        <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-black/10 rounded-full mx-auto  "></div>
                        <div className="text-2xl font-bold antialiased mt-4 mb-2  ">
                          {item.name}
                        </div>
                        <div className="font-light text-base">
                          {item.position}
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold my-20 underline">
                {t('partner-team.title')}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {partnerTeamData.map((item, i) => (
                  <div
                    key={i}
                    className={
                      'mx-auto w-full lg:w-3/4 shadow-lg p-4 bg-white/30 rounded-lg text-white'
                    }
                  >
                    <Tooltip
                      color="geekblue"
                      title={
                        <div className="p-4">
                          {item.description.map((desc, j) => (
                            <p key={j} className="font-light text-base">
                              {desc}
                            </p>
                          ))}
                        </div>
                      }
                    >
                      <div className="bg-white rounded-lg text-blue-700 p-6 shadow-md">
                        <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-black/10 rounded-full mx-auto  "></div>
                        <div className="text-2xl font-bold antialiased mt-4 mb-2  ">
                          {item.name}
                        </div>
                        <div className="font-light text-base">
                          {item.position}
                        </div>
                      </div>
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold my-20 underline">
                {t('core-team.title')}
              </div>
              <div className="">
                <div className="">
                  <div className="text-xl mb-20">
                    {t('counseling-support-group.title')}
                  </div>
                  <div>
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                      {counselingGroupData.map((item, i) => (
                        <div
                          key={i}
                          className={
                            'mx-auto  shadow-lg  p-4 w-full bg-white/30 rounded-lg text-white'
                          }
                        >
                          <Tooltip
                            color="geekblue"
                            title={
                              <div className="p-4">
                                {item.description.map((desc, j) => (
                                  <p key={j} className="font-light text-base">
                                    {desc}
                                  </p>
                                ))}
                              </div>
                            }
                          >
                            <div className="bg-white rounded-lg text-blue-700 p-6 shadow-md">
                              <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-black/10 rounded-full mx-auto  "></div>
                              <div className="text-2xl font-bold antialiased mt-4 mb-2  ">
                                {item.name}
                              </div>
                              <div className="font-light text-base">
                                {item.position}
                              </div>
                            </div>
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Divider></Divider>
                <div className="">
                  <div className="text-xl mb-20">
                    {t('technical-support-group.title')}
                  </div>
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
                      {technicalGroupData.map((item, i) => (
                        <div
                          key={i}
                          className={
                            'mx-auto  shadow-lg p-4 w-full bg-white/30 rounded-lg text-white'
                          }
                        >
                          <Tooltip
                            color="geekblue"
                            title={
                              <div className="p-4">
                                {item.description.map((desc, j) => (
                                  <p key={j} className="font-light text-base">
                                    {desc}
                                  </p>
                                ))}
                              </div>
                            }
                          >
                            <div className="bg-white rounded-lg text-blue-700 p-6 shadow-md">
                              <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] bg-black/10 rounded-full mx-auto  "></div>
                              <div className="text-2xl font-bold antialiased mt-4 mb-2  ">
                                {item.name}
                              </div>
                              <div className="font-light text-base">
                                {item.position}
                              </div>
                            </div>
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(TeamIntroduction);
