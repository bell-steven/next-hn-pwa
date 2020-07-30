import Content from '../components/content';

const Show = ({ stories }) => <Content data={stories} />;

export async function getStaticProps() {
  const res = await fetch('https://node-hnapi.herokuapp.com/show');
  const stories = await res.json();

  return {
    props: {
      stories,
    },
    revalidate: 1,
  };
}

export default Show;
