import Link from 'next/link';
import Layout from '../components/Layout.js';
import Hello from './hello.md';
import styled from 'styled-components';

const A = styled.a`
  color: ${({theme}) => {
    console.log(theme);
    return theme.color;
  }};
`;

const Index = props => {
  console.log('props', props);

  return (
    <Layout>
      <h1>Markdown Pages</h1>
      <Link href={'/another'}>
        <A>Another</A>
      </Link>
      <Hello />
    </Layout>
  );
};

export default Index;
