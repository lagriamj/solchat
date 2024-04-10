import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="w-full flex items-center justify-center">
      <div className="p-[1rem] lg:w-auto w-full">
        <div className="w-full max-w-full lg:max-w-[48rem] mx-auto px-8">
          <div className="gap-x-6 gap-y-6 justify-center items-center flex">
            <a
              href="/"
              aria-current="page"
              className="w-inline-block w--current mr-auto"
            >
              <img
                src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1.png"
                loading="lazy"
                width="80"
                sizes="(max-width: 479px) 100vw, 80px"
                alt=""
                srcSet="https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-500.png 500w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-800.png 800w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-1080.png 1080w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1-p-1600.png 1600w, https://assets-global.website-files.com/65ba24842eb42c1543939472/65efe9536df825948344c9ba_solchatlogo-transparent1.png 1920w"
              />
            </a>
            <nav className="hidden md:flex gap-x-6 gap-y-6 items-center ">
              <a
                href="#about"
                className="text-gray-400 font-normal no-underline"
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-400 font-normal no-underline"
              >
                Features
              </a>
              <a
                href="#roadmap"
                className="text-gray-400 font-normal no-underline"
              >
                Roadmap
              </a>
              <a
                href="https://docs.solchat.io/"
                target="_blank"
                className="text-gray-400 font-normal no-underline"
              >
                Whitepaper
              </a>
            </nav>
            <div className="header_nav-mobile flex justify-between">
              <div
                data-w-id="17fc8b23-686d-0030-94ad-b21ed2dac0a3"
                className="header_nav-mobile-trigger ml-auto"
                onClick={toggleMenu}
              >
                <div className="icon-1x1-regular show-mobile-landscape w-embed">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div
                  className={`header_nav-mobile-menu ${
                    isMenuOpen ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="text-gray-400 font-normal no-underline">
                    <strong>MENU</strong>
                  </div>
                  <a
                    href="#about"
                    className="text-gray-400 font-normal no-underline"
                  >
                    About
                  </a>
                  <a
                    href="http://docs.solchat.io/"
                    target="_blank"
                    className="text-gray-400 font-normal no-underline"
                  >
                    Whitepaper
                  </a>
                  <a
                    href="#features"
                    className="text-gray-400 font-normal no-underline"
                  >
                    Features
                  </a>
                  <a
                    href="#roadmap"
                    className="text-gray-400 font-normal no-underline"
                  >
                    Roadmap
                  </a>
                </div>
              </div>
              <a
                href="https://t.me/SolChatCoin"
                target="_blank"
                className="button is-small w-button"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
