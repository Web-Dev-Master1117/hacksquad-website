import PropTypes from 'prop-types';

import Hero from 'components/pages/leaderboard/hero';
import LayoutMain from 'layouts/layouts/layout-main';

const Leaderboard = ({ teams }) => (
  <LayoutMain
    seo={{
      isRobotsNoindexPage: true,
    }}
    withoutFooter
  >
    <Hero teams={teams} />
  </LayoutMain>
);

Leaderboard.propTypes = {
  teams: PropTypes.array,
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(`/api/leaderboard`);
  const { teams } = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      teams,
    },
  };
}

export default Leaderboard;
