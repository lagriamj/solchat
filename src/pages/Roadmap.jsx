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
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7DCEA1",
              }}
              iconStyle={{ background: "#10B981", color: "#7DCEA1" }}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #27A3A0",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #7DCEA1",
              }}
              iconStyle={{ background: "#27A3A0", color: "#27A3A0" }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #3890B8",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3890B",
              }}
              iconStyle={{ background: "#3890B8", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #3F8AC1",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #3F8AC1",
              }}
              iconStyle={{ background: "#3F8AC1", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #4F79D7",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #4F79D7",
              }}
              iconStyle={{ background: "#4F79D7", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "2px solid #5A6FE5",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #5A6FE5",
              }}
              iconStyle={{ background: "#5A6FE5", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
