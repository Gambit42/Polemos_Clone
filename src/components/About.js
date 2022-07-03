import React from "react";
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

const About = () => {
  return (
    <div className="font-poppins py-16 px-5 flex flex-col justify-center items-center text-lightBlack m-auto sm:w-5/6 w-full md:10/12 max-w-4xl md:flex-row md:mt-5 ">
      <div className="w-full">
        <SectionIntro className="flex flex-col justify-center items-center">
          <h1 className="text-center text-3xl sm:text-4xl md:text-left  font-bold">
            Welcome to Polemos
          </h1>
          <h2 className="italic text-md sm:text-xl text-center md:text-left">
            the <span className="font-bold">pinnacle</span> of gaming
          </h2>
        </SectionIntro>
        <div className="sm:px-10 text-sm sm:text-base text-center ml:text-left ">
          <h1 className="pt-5">
            A GameFi platform with guild elements aiming to become a leading
            decentralized autonomous organization (DAO), focusing on a variety
            of crucial and visionary services within the space.
          </h1>
          <h1 className="pt-5">
            Polemos plans on bringing asset/liquidity providers and gamers
            together inside a single ecosystem while also providing exceptional
            education, organized tournaments and a unique fantasy universe.
          </h1>
        </div>
        <button className="m-auto flex justify-center items-center flex-row  transition duration-200 ease-in-out outline-none focus:outline-none text-polemosColor py-2 px-6 rounded-lg mt-5 shadow-lg bg-gradient-to-r bg-white hover:from-polemosColor border border-polemosColor hover:to-polemosColor hover:border-transparent hover:text-white">
          <h1 className="text-lg font-bold">Whitepaper</h1>
        </button>
      </div>
      <img
        className="hidden ml:block w-46 h-96"
        src="./assets/images/Polemos_Pillar.png"
      />
    </div>
  );
};

export default About;
