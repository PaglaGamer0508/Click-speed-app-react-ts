import React from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';

// Random component
const Completionist: React.FC = () => <span>You are good to go!</span>;

// Render callback with condition
const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};

const MyCountdownComponent: React.FC = () => {
  return (
    <Countdown
      date={Date.now() + 5000} // Set the target date/time for the countdown
      renderer={renderer} // Pass the renderer callback function
    />
  );
};

export default MyCountdownComponent;
