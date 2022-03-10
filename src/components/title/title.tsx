import React from 'react';
import styles from './title.module.css';

const levels = [1, 2, 3, 4, 5, 6] as const;
type TitleLevel = typeof levels[number];
type TitleProps = {
  level: TitleLevel;
  children: React.ReactNode;
};

function Title({ level, children }: TitleProps) {
  switch (level) {
    case 1:
      return <h1 className={styles.h1}>{children}</h1>;
    case 2:
      return <h2 className={styles.h2}>{children}</h2>;
    case 3:
      return <h3 className={styles.h3}>{children}</h3>;
    case 4:
      return <h4 className={styles.h4}>{children}</h4>;
    case 5:
      return <h5 className={styles.h5}>{children}</h5>;
    case 6:
      return <h6 className={styles.h6}>{children}</h6>;
    default:
      return null;
  }
}

export default Title;
