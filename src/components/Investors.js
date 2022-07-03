import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div``;

const Investors = () => {
  const strategicInvestors = [
    { id: 1, image: "./assets/images/Delphie_Digital.png" },
    { id: 2, image: "./assets/images/QSN.png" },
    { id: 3, image: "./assets/images/Defi_Capital.png" },
    { id: 4, image: "./assets/images/F.png" },
  ];
  return (
    <SectionContainer className="text-white bg-polemosColor min-h-max relative font-poppins py-20 px-7 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-center text-3xl sm:text-4xl">
          Our Strategic Investors
        </h1>
        <h2 className="text-center italic  text-md sm:text-xl">
          Providing additional <span className="font-bold">invaluable</span>{" "}
          experience
        </h2>
      </div>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap m-auto justify-center items-center max-w-4xl">
        {strategicInvestors.map((strategicInvestor) => (
          <img
            className="w-4/5 sm:w-3/6 md:w-3/12"
            key={strategicInvestor.id}
            src={strategicInvestor.image}
          />
        ))}
      </div>
      <p className="text-center text-base max-w-sm">
        …as well as founders from Sushi, Aave, 1inch Exchange, Universe.XYZ,
        Altered State Machine, Coti, Tokemak, fmfw.io, Perpetual Protocol and
        Fei Protocol.
      </p>
    </SectionContainer>
  );
};

export default Investors;
