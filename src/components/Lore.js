import React from "react";
import Slider from "./Slider/Slider";
import styled from "styled-components";

const SectionIntro = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
      to left,
      rgb(0, 0, 0, 0) 10%,
      rgb(148 25 28) 50%,
      rgb(0, 0, 0, 0) 90%
    )
    1 / 1 / 0 stretch;
    /* font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: bold; */
}
`;

const StyledH1 = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: bold;
`;

const Lore = () => {
  return (
    <div className="w-full font-poppins py-16 px-7 flex flex-col lg:flex-row justify-center items-center m-auto lg:w-11/12 lg:px-2 max-w-5xl">
      <div className="flex flex-col text-center items-center justify-center w-full lg:py-6 lg:px-2 lg:text-left">
        <SectionIntro className="flex flex-col justify-center items-center lg:w-5/6">
          <h1 className="text-3xl sm:text-4xl font-bold">Uncover the Story</h1>
          <h2 className="italic text-xl text-center">
            Immerse in a <span className="font-bold">vast</span> world
          </h2>
        </SectionIntro>
        {/* <StyledH1 className="lg:w-5/6">Uncover the Whole Story</StyledH1> */}
        <h2 className="pt-10 sm:w-10/12 md:w-4/6 lg:w-5/6">
          When the Creator appeared and banished the infinite darkness, the
          universe came to life. Many details of what followed are now lost in
          time but while it might have changed throughout the centuries that
          passed, the Story of Origin survived to this day and continues to tell
          the tale about the birth of everything and everyone…
        </h2>
        <button className="m-auto flex justify-center items-center flex-row  transition duration-200 ease-in-out outline-none focus:outline-none text-polemosColor py-2 px-6 rounded-lg mt-5 shadow-lg bg-gradient-to-r bg-white hover:from-polemosColor border border-polemosColor hover:to-polemosColor hover:border-transparent hover:text-white">
          <h1 className="text-lg font-bold">Read Lore</h1>
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default Lore;
