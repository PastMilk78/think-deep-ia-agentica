import React, { useEffect, useRef, useState } from 'react';

const ScrollTriggerLight = ({ children, className, threshold = 0.2, rootMargin = '0px', delay = 500 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento entra en la vista, activamos la animación con un retraso
        if (entry.isIntersecting) {
          // Añadimos un retraso para poder ver el efecto
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          // Si quieres que la animación se reinicie cuando el elemento sale de la vista
          setIsVisible(false);
        }
      },
      {
        root: null, // viewport
        rootMargin,
        threshold, // porcentaje de visibilidad
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, delay]);

  // Añadimos una clase adicional cuando el elemento es visible
  const visibilityClass = isVisible ? 'animate-light' : 'pause-light';

  return (
    <div ref={ref} className={`${className || ''} ${visibilityClass}`}>
      {children}
    </div>
  );
};

export default ScrollTriggerLight; 