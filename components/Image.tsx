import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Image = ({ src, alt, width, height }: ImageProps): JSX.Element => {
  const source = require(`../public${src}`);
  return <img src={source} alt={alt} width={width} height={height} />;
};

export default Image;
