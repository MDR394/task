import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='flex gap-4'>
      {timeLeft.days > 0 && <p className='font-Power p-2 bg-[#8A0F62] rounded'>{timeLeft.days}d</p>}
      {timeLeft.hours > 0 && <p className='font-Power p-2 bg-[#8A0F62] rounded'>{timeLeft.hours}h</p>}
      {timeLeft.minutes > 0 && <p className='font-Power p-2 bg-[#8A0F62] rounded'>{timeLeft.minutes}m</p>}
      {timeLeft.seconds > 0 && <p className='font-Power p-2 bg-[#8A0F62] rounded'>{timeLeft.seconds}s</p>}

      {Object.keys(timeLeft).length === 0 && <p>Countdown expired!</p>}
    </div>
  );
};

const TimerPage = () => {
  // Set the target date for the countdown (replace with your desired date)
//   const targetDate = new Date('2024-12-31T23:59:59');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 5);
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default TimerPage;
