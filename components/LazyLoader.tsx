"use client";

import React, { useEffect, useState, useRef } from "react";

interface LazyLoaderProps {
  children: React.ReactNode;
  threshold?: number;
}

const LazyLoader: React.FC<LazyLoaderProps> = ({
  children,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className="min-h-[50dvh]">
      {isVisible ? children : null}
    </div>
  );
};

export default LazyLoader;
