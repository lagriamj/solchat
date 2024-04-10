import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Roadmap = () => {
  return (
    <div id="roadmap" className="section-2">
      <div className="container-default w-container">
        <div className="max-width-786px text-center">
          <h1 className="rodamas-font small">Roadmap</h1>
        </div>
        <div className="py-10">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #7DCEA1",
                borderRadius: "16px",
                padding: "50px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7DCEA1",
              }}
              iconStyle={{
                background: "#10B981",
                color: "#7DCEA1",
                marginTop: "20px",
              }}
            >
              <h3 className="heading">Phase 1</h3>
              <div className="div-block-3">
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Website development</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Whitepaper creation</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Solchat message system setup</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Social media verification</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="13"
                    alt=""
                  />
                  <h6>Prelaunch marketing activities</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Community building efforts</h6>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #27A3A0",
                borderRadius: "16px",
                padding: "50px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7DCEA1",
              }}
              iconStyle={{ background: "#27A3A0", color: "#27A3A0" }}
            >
              <h3 className="heading">Phase 2</h3>
              <div className="div-block-3">
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Presale launch on Solrocket</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Official launch on Raydium</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Strategic marketing campaigns</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Implementation of Solchat texting and image features</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="13"
                    alt=""
                  />
                  <h6>Listing on CoinMarketCap (CMC) and CoinGecko (CG)</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Setting up Solchat LP pools (Meteora)</h6>
                </div>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #3F8AC1",
                borderRadius: "16px",
                padding: "50px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3F8AC1",
              }}
              iconStyle={{ background: "#3F8AC1", color: "#fff" }}
            >
              <h3 className="heading">Phase 3</h3>
              <div className="div-block-3">
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Expansion of the community</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Global marketing initiatives</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Introduction of Solchat audio and video calling</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Integration with SOL ecosystem</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>New UI design implementation</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="13"
                    alt=""
                  />
                  <h6>Release of Solchat v2</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Establishing Dapp partnerships</h6>
                </div>
                <div className="div-block">
                  <img
                    src="https://assets-global.website-files.com/65ba24842eb42c1543939472/65f3b8aed4e16492bcbc32ea_icons8-checked-30.svg"
                    loading="lazy"
                    width="15"
                    alt=""
                  />
                  <h6>Addition of extra features to Solchat</h6>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #3890B8",
                borderRadius: "16px",
                padding: "50px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3890B",
              }}
              iconStyle={{ background: "#3890B8", color: "#fff" }}
            >
              <h3 className="heading">Phase 4</h3>
              <div className="div-block-3">
                <div className="div-block">
                  <h6>
                    Launching Solchat App on Solana Mobile DApp Store
                    Introduction of in-app rewards for Solchat users Marketing
                    efforts including Solchat ads Incorporation of additional
                    features into Solchat
                  </h6>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #4F79D7",
                borderRadius: "16px",
                padding: "50px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #4F79D7",
              }}
              iconStyle={{ background: "#4F79D7", color: "#fff" }}
            >
              <h3 className="heading">Phase 5</h3>
              <div className="div-block-3">
                <div className="div-block">
                  <h6>
                    Listing on centralized exchanges (CEX) Implementation of
                    group chat feature in Solchat Introduction of Solchat
                    streaming functionality Forming partnerships with other
                    entities Launching staking for rewards within Solchat
                    Incorporating additional features into Solchat
                  </h6>
                </div>
                <h6 className="mt-6">Phase 6: TBA</h6>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
