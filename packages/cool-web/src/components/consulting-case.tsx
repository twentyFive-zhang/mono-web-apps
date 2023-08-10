import React from 'react';
import { useTranslation } from 'next-i18next';

export default function ConsultingCase() {
  const { t } = useTranslation(['consulting-case']);
  const list: { title: string; description: string[] }[] = t('list', {
    returnObjects: true,
  });
  // console.log(t(['consulting-case', 'title']));
  return (
    <>
      <div className="py-16 px-4 lg:px-8 text-black">
        <div className=" py-16 rounded-3xl px-4 lg:px-8 bg-gradient-to-r from-pink-500 to-violet-500">
          <div className="text-white text-5xl  pb-12 text-center font-semibold antialiased">
            {t('title')}
          </div>
          <div className="mx-auto max-w-screen-2xl grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-8">
            {list.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer transition mt-10 space-y-8 bg-white/70 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur rounded-3xl hover:shadow-2xl hover:scale-[1.05] antialiased"
              >
                <div className="text-lg font-semibold tracking-tight text-blue-900 antialiased">
                  {item.title}
                </div>
                <div className="mt-1 tracking-tight text-blue-900 antialiased">
                  {item.description.map((desc, j) => (
                    <p
                      key={j}
                      className="mt-1 tracking-tight text-blue-900 antialiased"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
