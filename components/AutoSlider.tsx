
import React, { useRef, useEffect, useState } from 'react';

interface AutoSliderProps {
  items: React.ReactNode[];
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  delay?: number;
  type?: 'stepped' | 'continuous';
}

const AutoSlider: React.FC<AutoSliderProps> = ({ 
  items, 
  speed = 'normal', 
  reverse = false, 
  delay = 0,
  type = 'stepped'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Configuration for both modes
  const config = {
    stepped: {
      slow: { interval: 4000, amount: 400 },
      normal: { interval: 2200, amount: 450 },
      fast: { interval: 1500, amount: 500 }
    },
    continuous: {
      slow: 0.5,
      normal: 1,
      fast: 1.8 
    }
  };

  const handleScrollReset = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth } = container;
    const thirdWidth = scrollWidth / 3;

    if (scrollLeft >= thirdWidth * 2) {
      container.scrollLeft = scrollLeft - thirdWidth;
    } else if (scrollLeft <= 0) {
      container.scrollLeft = thirdWidth;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Only set initial scroll once
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 3;
    }

    let timerId: number;
    let frameId: number;

    const startSteppedScroll = () => {
      const { interval, amount } = config.stepped[speed];
      timerId = window.setInterval(() => {
        if (isInteracting) return;
        container.scrollBy({ 
          left: amount * (reverse ? -1 : 1), 
          behavior: 'smooth' 
        });
      }, interval);
    };

    const startContinuousScroll = () => {
      const step = config.continuous[speed] * (reverse ? -1 : 1);
      const animate = () => {
        if (!isInteracting && container) {
          container.scrollLeft += step;
          handleScrollReset();
        }
        frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);
    };

    const timeoutId = window.setTimeout(() => {
      if (type === 'stepped') startSteppedScroll();
      else startContinuousScroll();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (timerId) clearInterval(timerId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isInteracting, speed, reverse, delay, type]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  return (
    <div className="relative group py-4"> 
      {/* Visual edge fades */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#050a1b] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#050a1b] to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={containerRef}
        onScroll={type === 'stepped' ? handleScrollReset : undefined}
        /* 
          Pause logic:
          - onMouseEnter/onMouseDown/onTouchStart pauses the slider.
          - onMouseLeave/onMouseUp/onTouchEnd resumes it immediately.
        */
        className="flex items-center gap-16 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing px-10 py-12"
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
