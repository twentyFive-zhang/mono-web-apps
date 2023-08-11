// import useTranslation from 'next-translate/useTranslation';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '@utils/intl/get-static';
import AboutUs from '@components/about-us';
// import Common from '@components/common';
import ConsultingCase from '@components/consulting-case';
import EquityFinancingBusinessProcess from '@components/equity-financing-business-process';
import EquityFinancingConsultant from '@components/equity-financing-consultant';
import IndustryApplicationCase from '@components/industry-application-case';
// import InformationCentre from '@components/information-centre';
import ServiceContent from '@components/service-content';
import ServiceProcess from '@components/service-process';
import SolutionOverview from '@components/solution-overview';
import StandardizedProductsServices from '@components/standardized-products-services';
import TeamIntroduction from '@components/team-introduction';
// import Layout from '@components/Layout';
// import VentureCapitalIncubationService from '@components/venture-capital-incubation-service';

export default function Index(props: any) {
  // console.log(props);
  // const { t } = useTranslation(['about-us']);
  return (
    <div>
      <AboutUs></AboutUs>
      <ConsultingCase></ConsultingCase>
      <EquityFinancingBusinessProcess></EquityFinancingBusinessProcess>
      <EquityFinancingConsultant></EquityFinancingConsultant>
      <IndustryApplicationCase></IndustryApplicationCase>
      {/* <InformationCentre></InformationCentre> */}
      <ServiceContent></ServiceContent>
      <ServiceProcess></ServiceProcess>
      <SolutionOverview></SolutionOverview>
      <StandardizedProductsServices></StandardizedProductsServices>
      <TeamIntroduction></TeamIntroduction>
      {/* <VentureCapitalIncubationService></VentureCapitalIncubationService> */}
    </div>
  );
}

const getStaticProps = makeStaticProps([]);

export { getStaticPaths, getStaticProps };
