import React from "react";
import insta from "../assets/svg/instagram.svg";
import lc from "../assets/svg/leetcode.svg";
import inn from "../assets/svg/linkedin.svg";
import tweet from "../assets/svg/twitter.svg";

const Footer = () => {
  return (
    <div className="container mx-auto pb-4 sm:px-20 h-auto">
      <footer className="px-4 flex justify-center space-x-8">
        <a href="https://github.com/rohannY">
          <svg
            width="25"
            height="25"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4996 0.402832C17.8731 0.402832 15.2724 0.932991 12.8459 1.96304C10.4194 2.99309 8.21461 4.50285 6.35744 6.40613C2.60671 10.25 0.499573 15.4634 0.499573 20.8994C0.499573 29.9588 6.23957 37.645 14.1796 40.3711C15.1796 40.5351 15.4996 39.8997 15.4996 39.3463V35.8823C9.95957 37.1121 8.77957 33.1358 8.77957 33.1358C7.85957 30.7582 6.55957 30.1228 6.55957 30.1228C4.73957 28.852 6.69957 28.893 6.69957 28.893C8.69957 29.0365 9.75957 31.0042 9.75957 31.0042C11.4996 34.1196 14.4396 33.1973 15.5796 32.7054C15.7596 31.3731 16.2796 30.4713 16.8396 29.9588C12.3996 29.4464 7.73957 27.6837 7.73957 19.8745C7.73957 17.5994 8.49957 15.7752 9.79957 14.32C9.59957 13.8076 8.89957 11.6759 9.99957 8.9089C9.99957 8.9089 11.6796 8.35549 15.4996 10.9995C17.0796 10.5486 18.7996 10.3232 20.4996 10.3232C22.1996 10.3232 23.9196 10.5486 25.4996 10.9995C29.3196 8.35549 30.9996 8.9089 30.9996 8.9089C32.0996 11.6759 31.3996 13.8076 31.1996 14.32C32.4996 15.7752 33.2596 17.5994 33.2596 19.8745C33.2596 27.7042 28.5796 29.4259 24.1196 29.9383C24.8396 30.5737 25.4996 31.824 25.4996 33.7302V39.3463C25.4996 39.8997 25.8196 40.5556 26.8396 40.3711C34.7796 37.6245 40.4996 29.9588 40.4996 20.8994C40.4996 18.2077 39.9823 15.5424 38.9772 13.0557C37.9721 10.5689 36.4989 8.30941 34.6417 6.40613C32.7845 4.50285 30.5798 2.99309 28.1532 1.96304C25.7267 0.932991 23.126 0.402832 20.4996 0.402832Z"
              fill="#494F52"
            />
          </svg>
        </a>
        <a href="https://leetcode.com/rohanny_/">
          <img src={lc} alt="LeetCode" className="w-5 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/rohan-yadav-91407a1a0/">
          <img src={inn} alt="LinkedIn" className="w-6 cursor-pointer" />
        </a>
        <a href="/">
          <img src={insta} alt="Instagram" className="w-6 cursor-pointer" />
        </a>
        <a href="https://twitter.com/ysrohan">
          <img
            src={tweet}
            alt="Twitter"
            className="w-6 cursor-pointer mt-[3px]"
          />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
