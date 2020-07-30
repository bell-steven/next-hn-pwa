import Content from '../components/content';

const Home = ({ stories }) => <Content data={stories} />;

export async function getStaticProps() {
  const res = await fetch('https://node-hnapi.herokuapp.com/news');
  const stories = await res.json();

  return {
    props: {
      stories,
    },
    revalidate: 1,
  };
}

export default Home;
