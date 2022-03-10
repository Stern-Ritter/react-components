import React from 'react';
import styles from './image.module.css';

type ImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

function Image({ width, height, src, alt }: ImageProps) {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      style={{
        width,
        height,
      }}
    />
  );
}

export default Image;
