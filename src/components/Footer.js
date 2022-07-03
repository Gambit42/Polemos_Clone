import React from "react";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100vw;
  min-height: 20vh;
  background-color: #111;
`;

const Footer = () => {
  const socials = [
    {
      id: 1,
      icon: (
        <FaDiscord className="w-6 h-6 cursor-pointer  hover:text-gray-200 transition duration-200 ease-in-out text-white" />
      ),
      link: "",
    },
    {
      id: 2,
      icon: (
        <FaTwitter className="w-6 h-6 cursor-pointer  hover:text-gray-200  transition duration-200 ease-in-out text-white" />
      ),
      link: "",
    },
    {
      id: 3,
      icon: (
        <FaYoutube className="w-6 h-6 cursor-pointer  hover:text-gray-200 transition duration-200 ease-in-out text-white " />
      ),
      link: "",
    },
  ];
  return (
    <StyledDiv className="text-white font-poppins flex flex-col justify-center items-center pb-4">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-2xl font-bold pb-2">Join the Community</h1>
          <div className="flex flex-row justify-center w-full">
            {socials.map((social) => (
              <a
                className="px-2"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-center items-center">
          <img
            className="mb-1 h-5 w-18"
            src="./assets/images/PolemosIcon.png"
          />
          <p className="text-gray-100 font-light text-xxs">
            COPYRIGHT © 2022 POLEMOS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Footer;
