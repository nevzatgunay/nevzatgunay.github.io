import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head customMeta={customMeta} />
      <Header />
      <main className="mb-auto h-100">
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
