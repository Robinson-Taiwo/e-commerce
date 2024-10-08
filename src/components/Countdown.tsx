"use client";

import React, { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const FlashSalesCountdown = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date("2024-12-31T00:00:00"); // Replace with your target date
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false); // New state to detect client rendering

  useEffect(() => {
    setIsClient(true); // This ensures the countdown runs only on the client

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!isClient) {
    // Don't render anything during SSR, only render on the client
    return null;
  }

  return (
    <div className="flex  items-center">
      <div className="flex space-x-2">
        {Object.keys(timeLeft).map((unit) => (
          <div key={unit} className="flex text-sm flex-col items-center">
            <span className="font-bold lg:text-2xl">
              {timeLeft[unit as keyof TimeLeft]} {/* Type assertion for keys */}
            </span>
            <span className="lg:text-base text-sm font-bold">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSalesCountdown;
