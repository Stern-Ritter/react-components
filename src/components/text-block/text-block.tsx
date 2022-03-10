import React from 'react';
import styles from './text-block.module.css';

type TextBlockType = {
  fontFamily: string;
  fontSize: string;
  color: string;
  children: React.ReactNode;
};

function TextBlock({ fontFamily, fontSize, color, children }: TextBlockType) {
  return (
    <p
      data-testid="paragraph"
      className={styles.text}
      style={{
        fontFamily,
        fontSize: `${fontSize}px`,
        color,
      }}
    >
      {children}
    </p>
  );
}

export default TextBlock;
