import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const Home = () => {
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
    <div
      data-w-id="33e8cc93-a1a0-b9b0-cce2-acd08183789d"
      className="pt-20 pb-40 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-flat"
    >
      <div className="px-4">
        <div className="gap-x-12 gap-y-12 flex flex-col items-center">
          <div className="gap-x-16 gap-y-16 flex">
            <a
              href="https://www.coingecko.com/en/coins/solchat"
              target="_blank"
              className="badge_group w-inline-block opacity-100 transform translate-y-[-11px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d"
            >
              <div className="badge_button opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-flat">
                <div className="text-block">Coingecko</div>
                <div className="icon-1x1-small w-embed">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7813 7.33312L7.20529 3.75712L8.14796 2.81445L13.3333 7.99979L8.14796 13.1851L7.20529 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="https://coinmarketcap.com/currencies/solchat/"
              target="_blank"
              className="badge_group w-inline-block opacity-100 transform translate-y-[-11px] scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-preserve-3d"
            >
              <div className="badge_button opacity-100 transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 transform-style-flat">
                <div className="text-block">Coinmarketcap</div>
                <div className="icon-1x1-small w-embed">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7813 7.33312L7.20529 3.75712L8.14796 2.81445L13.3333 7.99979L8.14796 13.1851L7.20529 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <div className="hero_content">
            <animated.h1
              ref={divRef}
              style={animatedStyle}
              className="hero_title transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat"
            >
              <span className="text-span">Solchat</span> - Solana Communication
              Protocol
            </animated.h1>
            <div className="text-size-medium text-align-center text-color-grey transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat">
              Elevate Your Conversations: Seamless Communication on the Solana
              Blockchain with Solchat
            </div>
          </div>
          <div className="hero_actions">
            <div className="button-group is-centered">
              <a
                href="https://www.solchat.app/"
                target="_blank"
                className="button is-icon w-inline-block"
              >
                <div>
                  Solchat Dapp
                  <br />
                </div>
                <div className="icon-1x1-regular w-embed">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7813 7.33312L7.20529 3.75712L8.14796 2.81445L13.3333 7.99979L8.14796 13.1851L7.20529 12.2425L10.7813 8.66645H2.66663V7.33312H10.7813Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="demo_wrapper">
        <div className="container-large">
          <animated.img
            src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f1402abfa042413df1df2a_Dashboard%20Design.png"
            loading="lazy"
            alt=""
            ref={imageRef}
            style={animatedStyleImg}
            className="demo transform translate-x-0 translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 skew-y-0 opacity-100 transform-style-flat"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
