import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/" as={`/`}>
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/projects" as={`/projects`}>
        <a className="text-gray-900 dark:text-white px-6 py-4">Projects</a>
      </Link>
    </nav>
  );
};

export default Navigation;
