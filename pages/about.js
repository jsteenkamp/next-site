import Layout from '../components/Layout';
import sys from 'system-components';

const Container = sys({
  p: 2,
  bg: '#f4f4f4',
});

export default () => (
  <Layout>
    <p>This is the about page</p>
    <Container>
      <p>Nothing to see here!!!</p>
    </Container>
  </Layout>
);
