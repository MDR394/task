import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }}>
        <div className='flex justify-center my-auto'>
          <p>USDT erhoben: ${progress * 100000}/10000000</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;