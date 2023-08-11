import { getStaticPaths, makeStaticProps } from '@utils/intl/get-static';
import AboutUs from '@components/about-us';
import TeamIntroduction from '@components/team-introduction';

function AboutUsPage() {
  return (
    <div>
      <AboutUs></AboutUs>
      <TeamIntroduction></TeamIntroduction>
    </div>
  );
}

export default AboutUsPage;

const getStaticProps = makeStaticProps([]);

export { getStaticPaths, getStaticProps };
