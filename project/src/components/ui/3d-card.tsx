import React, {
  createContext,
  useContext,
  useRef,
  useState,
  MouseEvent,
  ReactNode
} from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const MouseEnterContext = createContext<{
  mouseX: number;
  mouseY: number;
}>({
  mouseX: 0,
  mouseY: 0,
});

export const CardContainer = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`py-2 transition-transform ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      <MouseEnterContext.Provider value={{ mouseX: mousePosition.x, mouseY: mousePosition.y }}>
        {children}
      </MouseEnterContext.Provider>
    </div>
  );
};

export const CardBody = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { mouseX, mouseY } = useContext(MouseEnterContext);
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouseEnter = () => {
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseMove = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXRelative = mouseX - width / 2;
    const mouseYRelative = mouseY - height / 2;
    const rotateXValue = (mouseYRelative / height) * 20;
    const rotateYValue = (-mouseXRelative / width) * 20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};

export const CardItem = ({
  as = "div",
  children,
  className = "",
  translateZ = 0,
}: {
  as?: any;
  children: ReactNode;
  className?: string;
  translateZ?: number;
}) => {
  const Component = motion[as as keyof typeof motion] || motion.div;
  
  return (
    <Component
      className={className}
      style={{
        transform: `translateZ(${translateZ}px)`,
      }}
    >
      {children}
    </Component>
  );
};