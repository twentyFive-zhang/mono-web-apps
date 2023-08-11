import { getStaticPaths, makeStaticProps } from '@utils/intl/get-static';
// import AboutUs from '@components/about-us';
// import TeamIntroduction from '@components/team-introduction';
import EquityFinancingConsultant from '@components/equity-financing-consultant';

function VentureCapitalIncubationServicePage() {
  return (
    <div>
      <EquityFinancingConsultant></EquityFinancingConsultant>
    </div>
  );
}

export default VentureCapitalIncubationServicePage;

const getStaticProps = makeStaticProps([]);

export { getStaticPaths, getStaticProps };
