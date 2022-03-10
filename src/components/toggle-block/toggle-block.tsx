import React, { useState } from "react";
import styles from "./toggle-block.module.css";

type ToggleBlock = {
  title: string;
  children: React.ReactNode;
};

function ToggleBlock({ title, children }: ToggleBlock) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h4 className={styles.title} onClick={toggleVisibility}>
        {title}
      </h4>
      {isOpen && children}
    </div>
  );
}

export default ToggleBlock;
