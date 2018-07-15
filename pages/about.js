import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  border: 5px solid #eee;
  padding: 10px;

  & h3 {
    color: red;
  }
`;

export default () => (
  <Layout>
    <p>This is the about page</p>
    <Container>
      <p>Nothing to see here!!!</p>
    </Container>
  </Layout>
);
