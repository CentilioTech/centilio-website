import React, { useEffect, useRef, ReactNode } from 'react';

interface GlobalHoverCardProps {
  children?: ReactNode;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const GlobalHoverCard: React.FC<GlobalHoverCardProps> = ({ 
  children, 
  className = '',
  width,
  height
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to card center
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      // Highlight radius - cards within this distance will be highlighted
      const highlightRadius = 150;
      
      if (distance <= highlightRadius) {
        // Calculate relative position within the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate opacity based on distance (closer = more opaque)
        const opacity = Math.max(0, 1 - (distance / highlightRadius));
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        card.style.setProperty('--opacity', opacity.toString());
      } else {
        card.style.setProperty('--opacity', '0');
      }
    };

    // Listen to global mouse movements
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const getInlineStyles = () => {
    const styles: React.CSSProperties & Record<string, string> = {
      '--mouse-x': '0px',
      '--mouse-y': '0px',
      '--opacity': '0',
      position: 'relative',
    };

    if (width !== undefined) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      styles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return styles;
  };

  const globalHoverStyles = `
    .global-hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      padding: 1px;
      background: radial-gradient(
        100px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
        rgba(255, 255, 255, 1) 0%,
        rgba(243, 243, 243, 0.88) 30%,
        rgba(255, 255, 255, 0.85) 60%,
        transparent 100%
      );
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      opacity: var(--opacity, 0);
      transition: opacity 0.15s ease;
      pointer-events: none;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalHoverStyles }} />
      <div
        ref={cardRef}
        style={getInlineStyles()}
        className={`global-hover bg-[#1F2125] border border-[#5B5858] rounded-[20px] ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export { GlobalHoverCard };