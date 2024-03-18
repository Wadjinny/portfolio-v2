"use client";

import React from "react";
import SectionHeading from "../components/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { themeSignal } from "../signals/theme-signal";
import { useActiveSection } from "../signals/active-section-signal";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { PiHandbagSimpleFill } from "react-icons/pi";

export default function Experience() {
    const ref = useActiveSection("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={false}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  themeSignal.value === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  themeSignal.value === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: themeSignal.value === "light" ? "white" : "#1d2432",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <h4 className="font-semibold capitalize opacity-80">
                <PiHandbagSimpleFill className="inline" /> {item.Company}
              </h4>

              <p className="font-normal !mt-0 opacity-80">
                <FaMapMarkerAlt className="inline" /> {item.location}
              </p>
              <ReactMarkdown
                className="!mt-1 !font-normal text-gray-700 dark:text-white/75 Markdown"
              >
                {item.description}
              </ReactMarkdown>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
