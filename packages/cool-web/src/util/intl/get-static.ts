import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../../../next-i18next.config';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths: GetStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(
  ctx: GetStaticPropsContext,
  ns = ['global']
) {
  const locale =
    (ctx?.params?.locale as string) ?? i18nextConfig.i18n.defaultLocale;
  // console.log(locale);
  // const data = await serverSideTranslations(locale);
  // console.log(data);
  const props = {
    ...(await serverSideTranslations(
      locale,
      undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { i18n: { defaultLocale: locale } }
    )),
    locale,
  };
  return props;
}

// ns 代表翻译模块，不同页面引入不同模块列表
export function makeStaticProps(ns?: string[]) {
  return async function getStaticProps(ctx: GetStaticPropsContext) {
    return {
      props: await getI18nProps(ctx, ns),
    };
  };
}
