import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const About = () => {
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
    opacity: isInViewportImg ? 1 : 0,
    transform: isInViewportImg ? "translateY(0%)" : "translateY(10%)",
    config: { mass: 3, tension: 180, friction: 70 },
    delay: 300,
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
    <div id="about" className="about">
      <div className="brix---container-default-2 w-container">
        <div className="w-layout-grid brix--grid-2-columns-text-right">
          <animated.img
            ref={imageRef}
            style={animatedStyleImg}
            src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1.png"
            alt=""
            className="transform translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-preserve-3d"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 49vw"
            data-w-id="3b4ed56a-2b15-1f75-016c-b254af2317c5"
            id="w-node-_3b4ed56a-2b15-1f75-016c-b254af2317c5-4393952b"
            srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1.png 1920w"
          />
          <animated.div
            ref={divRef}
            style={animatedStyle}
            data-w-id="3b4ed56a-2b15-1f75-016c-b254af2317c6"
            className="transform translate-y-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-preserve-3d"
          >
            <div className="brix---mg-bottom-16px">
              <div className="brix---icon-list">
                <h6 className="heading-7">ABOUT</h6>
                <h2 className="brix---heading-h2-size-4">SOLCHAT</h2>
              </div>
            </div>
            <div className="brix---mg-bottom-24px">
              <div className="brix---color-neutral-804">
                <p className="brix---paragraph-default-3">
                  Solchat is a communication protocol on the Solana blockchain,
                  offering text, voice, and video calls similar to Web2, but in
                  a Web3 environment. It utilizes Solana`&apos;`s low gas fees
                  and stores messages and group chats on-chain. Privacy is a
                  priority, with encrypted interactions and peer-to-peer
                  audio/video calls via WebRTC to enhance security.
                </p>
              </div>
            </div>
            <div className="brix---mg-bottom-56px">
              <div className="w-layout-grid brix---grid-1-column-gap-row-16px">
                <div className="brix---icon-list-item-wrapper">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    alt=""
                    width="26"
                    className="brix---icon-list"
                  />
                  <div className="brix---icon-list">
                    <div className="brix---text-200-list-bold">
                      <strong className="bold-text">
                        Versatile Communication Protocol
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="brix---icon-list-item-wrapper">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    alt=""
                    className="brix---icon-list"
                  />
                  <div className="brix---icon-list">
                    <div className="brix---text-200-list-bold">
                      <strong className="bold-text-2">
                        Efficient Utilization of Solana`&apos;`s Features
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="brix---icon-list-item-wrapper">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    alt=""
                    className="brix---icon-list"
                  />
                  <div className="brix---icon-list">
                    <div className="brix---text-200-list-bold">
                      <strong className="bold-text-3">
                        Security and Privacy Emphasis
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="brix---buttons-row">
              <div className="brix---button-row-left-2">
                <a
                  href="http://docs.solchat.io"
                  target="_blank"
                  className="brix---btn-primary w-button"
                >
                  Learn more
                </a>
              </div>
              <a
                href="http://solchat.app"
                target="_blank"
                className="brix---btn-secondary w-button"
              >
                Dapp
              </a>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default About;
