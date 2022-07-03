import React from "react";
import styled from "styled-components";

// const SectionContainer = styled.div`
//   background-position: top center;
//   background-image: url("./assets/images/Polemos_Sea.png") !important;
//   background-size: cover;
// `;
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

const StyledGoalContainer = styled.div`
  background: linear-gradient( -180deg, 
  rgb(204 53 53) 0%, 
  rgb(153 36 39) 40%, 
  rgb(41 13 13) 100% );
  max-width: 500px;

     
  @media (min-width: 700px) {
    width: 40%;
    height: 360px;
   }
   
   @media (min-width: 1000px) {
    width: 28%;
    padding-top: 30px;
    padding-bottom: 20px;
    max-width: 300px;
    height: 300px;
   }

}
`;

const StyledGoalsDiv = styled.div`
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;
const Goals = () => {
  const coreGoals = [
    {
      id: 1,
      title: "Metaverse Adoption",
      text: "Onboard as many players as possible into NFT gaming.",
      image: "./assets/images/Polemos_Helmet.png",
    },
    {
      id: 2,
      title: "Community Engagement",
      text: "Provide unique and entertaining ways of building loyalty.",
      image: "./assets/images/Polemos_Torch.png",
    },
    {
      id: 3,
      title: "Esports Dominance",
      text: "Optimize player performance by providing world class conditions unique to each game.",
      image: "./assets/images/Polemos_Sword.png",
    },
  ];

  return (
    <div className="font-poppins py-16 px-7 flex flex-col justify-center items-center m-auto">
      <SectionIntro className="flex flex-col justify-center items-center sm:w-4/6 lg:w-3/6">
        <h1 className="text-3xl sm:text-4xl font-bold">Our Core Goals</h1>
        <h2 className="italic text-md sm:text-xl text-center">
          what we <span className="font-bold">endeavor</span> to accomplish
        </h2>
      </SectionIntro>
      <StyledGoalsDiv className="items-center justify-center flex flex-col h-full flex-wrap">
        {coreGoals.map((goal) => (
          <StyledGoalContainer
            key={goal.id}
            className="m-auto rounded-lg shadow-lg py-10 mt-12 px-5 flex flex-col justify-center items-center mmd:mx-5 "
          >
            <img className="w-28 h-28 mmd:w-24 mmd:h-24" src={goal.image} />
            <h1 className="text-gray-50 text-center text-lg mmd:text-md font-bold py-4">
              {goal.title}
            </h1>
            <h2 className="text-white text-base font-light text-center mmd:text-sm">
              {goal.text}
            </h2>
          </StyledGoalContainer>
        ))}
      </StyledGoalsDiv>
    </div>
  );
};

export default Goals;
