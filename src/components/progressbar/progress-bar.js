import React, { useState, useEffect } from 'react';
import ProgressBar from '../progressbar/progress-com';

const YourPage = () => {
  const [progress, setProgress] = useState(86);

  // Function to update the progress (e.g., on some event)
  const updateProgress = () => {
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
  };

  useEffect(() => {
    // Optional: You can use this useEffect to reset progress on component mount
    // setProgress(0);
  }, []);

  return (
    <div className='w-11/12 md:w-1/2'>
      {/* <button onClick={updateProgress}>Increase Progress</button> */}
      <ProgressBar progress={progress} />
    </div>
  );
};

export default YourPage;
