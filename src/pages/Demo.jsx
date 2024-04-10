import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const Demo = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const imageRef = useRef(null);

  const animatedStyle = useSpring({
    opacity: isInViewport ? 1 : 0,
    transform: isInViewport ? "translateY(0%)" : "translateY(20%)",
    config: { mass: 1.5, tension: 300, friction: 40 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInViewport(entries[0].isIntersecting);
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <div className="demo_wrapper">
      <div className="container-large">
        <animated.img
          src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f1402abfa042413df1df2a_Dashboard%20Design.png"
          alt=""
          style={animatedStyle}
          className="demo transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-preserve-3d"
        />
      </div>
    </div>
  );
};

export default Demo;
