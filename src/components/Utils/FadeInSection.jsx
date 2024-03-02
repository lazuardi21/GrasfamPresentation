import React, { useState, useRef, useEffect } from "react";
import "./FadeInSection.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current); // Only unobserve if domRef.current is truthy
      }
    });
  
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} mb-10 z-0`}
    >
      {props.children}
    </div>
  );
}
