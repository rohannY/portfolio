import React from "react";
import figma from "../assets/svg/Figma.svg";
import scss from "../assets/svg/Scss.svg";
import tailwind from "../assets/svg/Tailwind.svg";
import next from "../assets/svg/next.svg";
import node from "../assets/svg/node.svg";
import react from "../assets/svg/react.svg";
import { Reveal } from "../utils/Reveal";
const About: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-28" id="about">
      <div className="container mx-auto px-4 sm:px-20 pt-20 pb-28 my-10 h-auto border-b border-t border-borderColor">
        <p className="font-satoshi text-3xl sm:text-4xl">About</p>
        <div className="text-lightGrey font-figtree text-lg sm:text-md font-light space-y-4 my-10 sm:w-3/5">
          <Reveal>
            <p>Hello there! I’m Rohan, a web dev.</p>
            <p>
              I passionately combine good design, technology, and innovation in
              all my projects, which I like to accompany from the first idea to
              release. Currently, I'm focused on the development of responsive
              user interfaces with React and I'm interested in JavaScript and
              Web Technologies.
            </p>
            <br />
            <p>Here’s my current tech stack</p>
          </Reveal>
        </div>
        <div className="font-inter">
          <div className="space-y-4 sm:space-y-8">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex w-full lg:w-1/5 space-x-6 border border-lightGrey p-3">
                <img alt="React" src={react} className="h-8 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  React
                </p>
              </div>
              <div className="flex w-full lg:w-1/5 space-x-6 border border-lightGrey p-3">
                <img alt="Node Js" src={node} className="h-8 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  Node JS
                </p>
              </div>
              <div className="flex w-full lg:w-1/5 space-x-4 border border-lightGrey p-3">
                <img alt="Tailwind Css" src={tailwind} className="h-6 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  Tailwind Css
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex w-full lg:w-1/5 space-x-6 border border-lightGrey p-3">
                <img alt="Scss" src={scss} className="h-8 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  Scss
                </p>
              </div>
              <div className="flex w-full lg:w-1/5 space-x-6 border border-lightGrey p-3">
                <img alt="Figma" src={figma} className="h-7 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  Figma
                </p>
              </div>
              <div className="flex w-full lg:w-1/5 space-x-4 border border-lightGrey p-3">
                <img alt="Framer" src={next} className="h-8 pl-2" />
                <p className="text-lg text-lightGrey font-light font-satoshi pr-4">
                  NextJS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
