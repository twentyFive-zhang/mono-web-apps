import { getStaticPaths, makeStaticProps } from '@utils/intl/get-static';
// import AboutUs from '@components/about-us';
// import TeamIntroduction from '@components/team-introduction';
import ServiceContent from '@components/service-content';
import ServiceProcess from '@components/service-process';
import ConsultingCase from '@components/consulting-case';

function ConsultationServicePage() {
  return (
    <div>
      <ServiceContent></ServiceContent>
      <ServiceProcess></ServiceProcess>
      <ConsultingCase></ConsultingCase>
    </div>
  );
}

export default ConsultationServicePage;

const getStaticProps = makeStaticProps([]);

export { getStaticPaths, getStaticProps };
