import { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const Partners = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const animatedStyle = useSpring({
    opacity: isInViewport ? 1 : 0,
    transform: isInViewport ? "translateY(0%)" : "translateY(20%)",
    config: { mass: 3, tension: 180, friction: 70 },
  });

  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsInViewport(entries[0].isIntersecting);
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  return (
    <div className="partners-desktop">
      <div className="brix---container-default-3 w-container">
        <div
          data-w-id="73d85652-50ce-4ea1-87f6-026dc0418e0a"
          className="brix---inner-container-574px---center "
        >
          <div className="brix---mg-bottom-48px-3">
            <div className="brix---text-center-3">
              <div className="brix---color-neutral-805">
                <animated.h2
                  ref={textRef}
                  style={animatedStyle}
                  className="brix---heading-h2-size-5 "
                >
                  Partners
                </animated.h2>
              </div>
            </div>
          </div>
        </div>
        <article className="brix---logo-strip-v10-flex">
          <a
            href="https://phantom.app/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8)-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c75fa6ba9f9b3251_1%20(8).png 2000w"
              className="image-21"
            />
          </a>
          <a
            href="https://solana.com/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6.png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b90d6285bff9c64849_6.png 2000w"
              className="image-22"
            />
          </a>
          <a
            href="https://crypto.com/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8)-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9b4a66c114dd5a520_2%20(8).png 2000w"
              className="image-23"
            />
          </a>
          <a
            href="https://www.solrocket.io/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3)-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9d47d4f7ccf6c16b0_4%20(3).png 2000w"
              className="image-24"
            />
          </a>
          <a href="https://jup.ag/" target="_blank" className="w-inline-block">
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c92297d28d26b32f09c5_SolChat%20(7).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c92297d28d26b32f09c5_SolChat%20(7)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c92297d28d26b32f09c5_SolChat%20(7)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c92297d28d26b32f09c5_SolChat%20(7)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c92297d28d26b32f09c5_SolChat%20(7).png 1250w"
              className="image-25"
            />
          </a>
          <a
            href="https://www.bonfida.org/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1)-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad74_5%20(1).png 2000w"
              className="image-26"
            />
          </a>
          <a
            href="https://zebec.io/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f517c55a517dc2dccbb3f6_SolChat%20(1).png"
              loading="lazy"
              width="80"
              alt=""
              className="image-27"
            />
          </a>
          <a
            href="https://www.hawksight.co/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f5c87ff9ed005fb3df0107_SolChat%20(2).png"
              loading="lazy"
              width="80"
              alt=""
              className="image-28"
            />
          </a>
          <a
            href="https://heywallet.com/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4).png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4)-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4)-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4)-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4)-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c7adeb27a24eb27e_3%20(4).png 2000w"
              className="image-29"
            />
          </a>
          <a
            href="https://www.coinw.com/"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7.png"
              loading="lazy"
              width="80"
              sizes="(max-width: 479px) 100vw, 80px"
              alt=""
              srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3a7b9c5848f77142cad71_7.png 2000w"
              className="image-30"
            />
          </a>
        </article>
      </div>
    </div>
  );
};

export default Partners;
