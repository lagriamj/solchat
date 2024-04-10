import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const LearnMore = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const animatedStyle = useSpring({
    opacity: isInViewport ? 1 : 0,
    transform: isInViewport ? "translateY(0%)" : "translateY(10%)",
    config: { mass: 3, tension: 180, friction: 70 },
    delay: 300,
  });

  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInViewport(entries[0].isIntersecting);
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const [isInViewportImg, setIsInViewportImg] = useState(false);
  const imageRef = useRef(null);

  const animatedStyleImg = useSpring({
    from: { opacity: 0 },
    to: { opacity: isInViewportImg ? 1 : 0 },
    config: { mass: 3, tension: 180, friction: 70 },
    delay: 400,
  });

  useEffect(() => {
    const observerImg = new IntersectionObserver((entries) => {
      setIsInViewportImg(entries[0].isIntersecting);
    });

    if (imageRef.current) {
      observerImg.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observerImg.disconnect();
      }
    };
  }, []);
  return (
    <div className="brix---section-small">
      <div className="brix---container-default w-container">
        <div className="brix---cta-card">
          <animated.img
            ref={imageRef}
            style={animatedStyleImg}
            src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65ba4dffe80f1395d2bf2bee_pattern-cta-v12-brix-templates-01.svg"
            alt=""
            data-w-id="ba5d2d36-4e23-90a4-a5d1-607b1f319952"
            className="brix---cta-v4-floating-item-01 opacity-100"
          />
          <img
            ref={imageRef}
            style={animatedStyleImg}
            src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65ba4dffe80f1395d2bf2bef_pattern-cta-v3-brix-templates-01.svg"
            alt=""
            data-w-id="ba5d2d36-4e23-90a4-a5d1-607b1f319953"
            className="brix---cta-v3-floating-item-02-2 opacity-100"
          />
          <div className="w-layout-grid brix---grid-cta-v1">
            <div
              id="w-node-ba5d2d36-4e23-90a4-a5d1-607b1f319955-4393952b"
              className="brix---color-neutral-100"
            >
              <animated.h2
                ref={divRef}
                style={animatedStyle}
                data-w-id="ba5d2d36-4e23-90a4-a5d1-607b1f319956"
                className="brix---heading-h2-size transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-preserve-3d"
              >
                Unlock the Future of Communication with Solchat
              </animated.h2>
            </div>
            <animated.div
              ref={divRef}
              style={animatedStyle}
              data-w-id="ba5d2d36-4e23-90a4-a5d1-607b1f319958"
              className="brix---buttons-row-right---t-left transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-preserve-3d"
            >
              <div className="brix---button-row-left">
                <a
                  href="http://docs.solchat.io"
                  target="_blank"
                  className="brix---btn-primary-white w-button"
                >
                  Learn more
                </a>
              </div>
              <a
                href="http://solchat.app"
                target="_blank"
                className="brix---btn-secondary-white w-button"
              >
                Solchat app
              </a>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
