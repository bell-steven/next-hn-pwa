import Content from '../components/content';

const New = ({ stories }) => <Content data={stories} />;

export async function getStaticProps() {
  const res = await fetch('https://node-hnapi.herokuapp.com/newest');
  const stories = await res.json();

  return {
    props: {
      stories,
    },
    revalidate: 1,
  };
}

export default New;
