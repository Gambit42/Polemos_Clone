import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: bold;
`;

const AdminTextContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
      to left,
      rgb(0, 0, 0, 0) 10%,
      rgb(148 25 28) 50%,
      rgb(0, 0, 0, 0) 90%
    )
    1 / 1 / 0 stretch;
`;

const AdminTeam = () => {
  const Admins = [
    {
      id: 1,
      name: "Sascha Zehe",
      image: "./assets/images/Sascha_Zehe.png",
      role: "Co-Founder & Overlord",
      experience: [
        { id: 1, text: "20+ years of elite gaming experience." },
        {
          id: 2,
          text: "Former VP of Product in gaming with responsibility for up to eighty employees of varying specialties.",
        },
        {
          id: 3,
          text: "Former chairman of a semi-professional sports club with several hundred members.",
        },
        { id: 4, text: "Illuvium Council Member & Illuvium Lead Moderator." },
        { id: 5, text: "Background as a programmer." },
      ],
    },
    {
      id: 2,
      name: "John Clark",
      image: "./assets/images/John_Clark.png",
      role: "Co-Founder & Zealous Leader",
      experience: [
        { id: 1, text: "20+ years elite gaming / leader experience" },
        {
          id: 2,
          text: "WoW – Biletongue – #1 Healer Bloodhoof Server. Founded a successful top 5 world hardcore guild.",
        },
        {
          id: 3,
          text: "Age of Champions – F*C Shark – Founder of Forced Change. Undefeated in guild events.",
        },
        {
          id: 4,
          text: "Nine Chronicles – HotSauce – Founder of Valhalla. #1 guild overall in Nine Chronicles",
        },
      ],
    },
    {
      id: 3,
      name: "Jeff Mathers",
      image: "./assets/images/Jeff_Mathers.png",
      role: "Tech Wizard",
      experience: [
        { id: 1, text: "8+ years of professional IT experience." },
        {
          id: 2,
          text: "Extensive knowledge with regards to data aggregation & backend consolidation.",
        },
        {
          id: 3,
          text: "Vast experience in working with multiple teams and third party contractors.",
        },
        { id: 4, text: "Illuvium Council Member & Illuvium Lead Moderator." },
        {
          id: 5,
          text: "Background as a business intelligence developer and data architect.",
        },
      ],
    },
  ];
  return (
    <div className="font-poppins py-16 px-7 flex flex-col justify-center items-center">
      <AdminTextContainer className="flex flex-col justify-center items-center">
        <StyledH1>Our Admin Team</StyledH1>
        <h2 className="italic text-md">
          with <span className="font-semibold">decades</span> of relevant
          experience
        </h2>
      </AdminTextContainer>
      <div className="pt-6 flex flex-col lg:flex-row">
        {Admins.map((admin) => (
          <div
            key={admin.id}
            className="bg-white px-5 my-4 rounded-lg border shadow-lg m-auto py-10 flex flex-col justify-center items-center md:flex-row-reverse md:w-4/5 md:items-start lg:flex-col lg:mx-4 lg:justify-center lg:items-center lg:px-1 lg:py-4"
          >
            <div
              key={admin.id}
              className="w-56 h-80 lg:w-40 lg:h-60 pb-6 border-2 bg-gray-50 shadow-lg rounded lg:border-none lg:shadow-none lg:bg-transparent"
            >
              <div className="bg-profileGray">
                <img className="w-56 lg:w-40" src={admin.image} />
              </div>
              <div className="px-2 flex flex-col lg:px-0 lg:justify-center lg:items-center">
                <h1 className="text-polemosColor pt-4 font-bold text-lg lg:text-base lg:pt-2">
                  {admin.name}
                </h1>
                <h2 className="flex flex-col flex-wrap text-lightBlack lg:text-center lg:text-xs">
                  {admin.role}
                </h2>
              </div>
            </div>
            <div className="px-4 sm:w-4/5 lg:w-full">
              <ul className="list-disc pt-6 text-sm px-4 lg:text-xs lg:leading-3 lg:pt-0">
                {admin.experience.map((exp) => (
                  <li className="pt-2" key={exp.id}>
                    {exp.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center flex-row  transition duration-200 ease-in-out outline-none focus:outline-none text-polemosColor py-2 px-6  rounded-lg mt-10 shadow-lg bg-gradient-to-r bg-white hover:from-polemosColor border border-polemosColor hover:to-polemosColor hover:border-transparent hover:text-white md:text-lg">
        <h1 className="text-sm font-bold">Encyclopedia</h1>
      </button>
    </div>
  );
};

export default AdminTeam;
