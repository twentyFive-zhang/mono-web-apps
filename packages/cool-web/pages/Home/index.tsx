// import useTranslation from 'next-translate/useTranslation';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  // Add custom props here
};

export default function Index() {
  // console.log(props);
  const { t } = useTranslation('common');
  // test();
  return (
    <h1 className="text-3xl font-bold underline py-16">
      Hello world!123{t('title')}
    </h1>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    locale: locale || '123',
  },
});
