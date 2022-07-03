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
      <AdminTextContainer className="text-center flex flex-col justify-center items-center">
        <StyledH1>Our Admin Team</StyledH1>
        <h2 className="italic text-md">
          with <span className="font-semibold">decades</span> of relevant
          experience
        </h2>
      </AdminTextContainer>
      <div className="pt-6 flex flex-col md:flex-row">
        {Admins.map((admin) => (
          <div
            key={admin.id}
            className="mt-10 mx-4 border-2 bg-red-700 border-red-900 m-auto flex flex-col justify-center items-center md:flex-row md:w-4/5 md:items-start "
          >
            <div
              key={admin.id}
              className="w-48 h-96 pb-6 border-2 bg-blue-400 shadow-lg rounded"
            >
              <div className="bg-profileGray">
                <img className="w-48" src={admin.image} />
              </div>
              <div className="px-2 flex flex-col">
                <h1 className="text-polemosColor pt-4 font-bold text-lg ">
                  {admin.name}
                </h1>
                <h2 className="flex flex-col flex-wrap text-md text-lightBlack">
                  {admin.role}
                </h2>
              </div>
              <button className="mt-5">View Exp</button>
            </div>
            {/* <div className="px-4 sm:w-4/5 lg:w-full">
              <ul className="list-disc pt-6 text-sm px-4">
                {admin.experience.map((exp) => (
                  <li className="pt-2" key={exp.id}>
                    {exp.text}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
      <button className="flex justify-center items-center flex-row  transition duration-200 ease-in-out outline-none focus:outline-none text-polemosColor py-2 px-4 w-52 rounded-lg mt-10 shadow-lg bg-gradient-to-r bg-white hover:from-polemosColor border border-polemosColor hover:to-polemosColor hover:border-transparent hover:text-white md:text-lg">
        <h1 className="text-md font-bold">Meet the Team</h1>
      </button>
    </div>
  );
};

export default AdminTeam;
