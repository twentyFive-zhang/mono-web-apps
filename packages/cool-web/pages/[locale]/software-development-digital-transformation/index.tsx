import { getStaticPaths, makeStaticProps } from '@utils/intl/get-static';
// import AboutUs from '@components/about-us';
// import TeamIntroduction from '@components/team-introduction';
// import EquityFinancingConsultant from '@components/equity-financing-consultant';
import StandardizedProductsServices from '@components/standardized-products-services';
import SolutionOverview from '@components/solution-overview';
import IndustryApplicationCase from '@components/industry-application-case';

function SoftwareDevelopmentDigitalTransformationPage() {
  return (
    <div>
      <StandardizedProductsServices></StandardizedProductsServices>
      <SolutionOverview></SolutionOverview>
      <IndustryApplicationCase></IndustryApplicationCase>
    </div>
  );
}

export default SoftwareDevelopmentDigitalTransformationPage;

const getStaticProps = makeStaticProps([]);

export { getStaticPaths, getStaticProps };
