import React from "react";
import styled from "styled-components";

const BannerImage = styled.div`
  position: absolute;
  background-position: top center;
  background-image: url("./assets/images/Polemos_Sea.png") !important;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  &:after {
    background-color: #18191a;
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0.8;
    left: 0;
    z-index: 1;
  }
`;

const Banner = () => {
  return (
    <div className="min-h-max bg-gray-50 relative font-poppins py-16 px-7 flex flex-col justify-center items-center">
      <BannerImage />
      <div className="px-10 z-20 py-10 rounded text-white">
        <div>
          <h1>Polemos is a visionary DAO</h1>
          <h1 className="">
            Polemos is an ancient Greek term meaning ‘the divine embodiment or
            personification of war’ and it is that mentality that we want to
            bring with us into every game we stake our claim in.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
