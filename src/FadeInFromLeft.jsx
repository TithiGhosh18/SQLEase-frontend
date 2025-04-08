import { useEffect, useRef, useState } from "react";

export default function FadeInFromLeft({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 fade-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-10 -translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}
