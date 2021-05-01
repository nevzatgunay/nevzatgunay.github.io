import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import { getAllProjects } from '../lib/api';
import { ProjectType } from '../types/project';

type IndexProps = {
  projects: ProjectType[];
};

export const Projects = ({ projects }: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Nevzat Günay',
      }}
    >
      <div className="flex flex-wrap -mx-4 overflow-hidden sm:-mx-4 md:-mx-4 lg:-mx-4 xl:-mx-4">
        {projects.map((project) => (
          <div className="my-4 px-4 w-full overflow-hidden sm:my-4 sm:px-4 sm:w-full md:my-4 md:px-4 md:w-full lg:my-4 lg:px-4 lg:w-full xl:my-4 xl:px-4 xl:w-1/2">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(project.date), 'MMMM dd, yyyy')}
            </p>
            <Image
              alt={`ng`}
              src={`${project.image}`}
              width={450}
              height={300}
              priority
            />
            <h1 className="mb-2 text-xl">
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {project.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{project.description}</p>
            <p>
              <Link as={`/projects/${project.slug}`} href={`/projects/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects([
    'date',
    'description',
    'image',
    'slug',
    'title',
  ]);

  return {
    props: { projects },
  };
};

export default Projects;
