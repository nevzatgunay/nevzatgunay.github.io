import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <h1>Hey &#128075;</h1>
      <p>
        I'm Nevzat, I'm a front-end engineer at{' '}
        <Link href={`https://lifemote.com`}>
          <a target="_blank">Lifemote Networks</a>
        </Link>
        .
      </p>
      <p>
        On my spare time, I cook delicious meals, deep dive into coding, watch
        soccer, and follow Premier League.
      </p>
      <p>I also regularly contribute open source projects.</p>

      <p>
        This portfolio gathers a collection of my side projects. You can also
        find me on{' '}
        <Link href={`https://twitter.com/nevzatgunay`}>
          <a target="_blank">Twitter</a>
        </Link>{' '}
        or{' '}
        <Link href={`https://github.com/nevzatgunay`}>
          <a target="_blank">GitHub</a>
        </Link>
        !
      </p>
    </Layout>
  );
};

export default Index;
