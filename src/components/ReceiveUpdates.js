import React from "react";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

const BannerImage = styled.div`
  background-position: 50%;
  background-image: url("./assets/images/Polemos_Structure.png") !important;
  background-size: cover;
  width: 100%;
  z-index: 1;
  &:after {
    background-color: #18191a;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.9;
    left: 0;
    z-index: 1;
  }
`;

const ReceiveUpdates = () => {
  return (
    <BannerImage className="min-h-max bg-gray-50 relative font-poppins py-16 px-4 flex flex-col justify-center items-center md:px-10">
      <div className="w-11/12 z-10 flex flex-col justify-center items-center md:flex-row max-w-4xl">
        <div className="py-16 font-poppins text-white">
          <div className="px-2 flex flex-col">
            <h1 className="pb-3 text-3xl uppercase font-bold sm:w-4/5 md:w-full">
              Receive exclusive updates about the world of Polemos
            </h1>
            <h2 className="italic sm:w-3/5 md:w-full text-lg">
              Sign up for early access and news. You may unsubscribe at any
              time.
            </h2>
          </div>
          <RegisterForm />
        </div>
        <div className="w-5/6 max-w-xs md:mt-40">
          <img className="" src="./assets/images/Polemos_Logo_Helmet.png" />
        </div>
      </div>
    </BannerImage>
  );
};

export default ReceiveUpdates;
