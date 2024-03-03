import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}>
        <div className="flex justify-center items-center">
          <p className="text-[15px] md:text-lg font-Bakbak md:mt-0 mt-1">
            USDT erhoben: ${progress * 100000}/10000000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
