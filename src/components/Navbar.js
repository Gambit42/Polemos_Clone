import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { FaTwitter, FaDiscord, FaYoutube, FaListAlt } from "react-icons/fa";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const StyledNavbar = styled.nav`
  position: fixed;
  height: 4rem;
  width: 100%;
  display: flex;
  color: white;
  z-index: 999;
  transition: all 0.1s ease-in;
  background-color: #18191a;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  ${({ isBurgerActive }) =>
    isBurgerActive &&
    css`
      border-bottom: 2px solid #e5e7eb;
    `}

  @media (min-width: 992px) {
    height: 4.5rem;
  }
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f1f5f9;
  transition: transform 0.1s ease-in;
  transform: translateX(-100%);
  top: 4rem;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  z-index: 999;

  ${({ isBurgerActive }) =>
    isBurgerActive &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 992px) {
    all: unset;
    display: flex;
    justify-content: space-around;
    right: 1rem;
    width: 35%;
    padding: 0 1rem;
    margin-right: 1rem;
  }
`;

const StyledLiContent = styled.div`
  padding: 20px 0 20px 0;
  background-color: #f1f5f9;

  ${({ isSublistActive }) =>
    isSublistActive &&
    css`
      padding: 25px 0 10px 0;
    `}

  /* @media (min-width: 768px) {
    padding: 30px 0 20px 0;
  } */

  @media (min-width: 992px) {
    all: unset;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const StyledLi = styled.li`
  ${({ isSublistActive }) =>
    isSublistActive &&
    css`
      padding-bottom: 15px;
    `}

  @media (min-width: 992px) {
    all: unset;
    display: flex;
    justify-content: start;
    align-items: center;
    &:hover .subContainer {
      transition: all 0.2s ease-in;
      display: block;
    }
  }
`;

const StyledSublistContainer = styled.ul`
  @media (min-width: 992px) {
    position: fixed;
    top: 4rem;
    min-width: 100px;
    display: none;
    background-color: #18191a;
  }
`;

const StyledSublist = styled.li`
  @media (min-width: 992px) {
    cursor: default;
    ${({ isSublistActive }) =>
      isSublistActive &&
      css`
        display: flex;
      `}
    &:before {
      content: "";
      position: absolute;
      border: 11px solid transparent;
      border-bottom-color: #18191a;
      top: -21px;
      left: 21px;
      z-index: 1;
    }
  }
`;

const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);
  const navList = [
    {
      id: 2,
      navLi: "Enyclopedia",
      to: "#about",
      subList: [
        {
          id: 1,
          name: "Universe",
          to: "hello",
        },
        {
          id: 2,
          name: "Origin Story",
          to: "hello",
        },
        {
          id: 3,
          name: "Races",
          to: "hello",
        },
        {
          id: 4,
          name: "Creatures",
          to: "hello",
        },
        {
          id: 5,
          name: "Locations",
          to: "hello",
        },
      ],
    },
    {
      id: 3,
      navLi: "Community",
      to: "#skills",
      subList: [
        {
          id: 1,
          name: "Discord",
          icon: <FaDiscord className="text-indigo-500 w-4 h-4 mr-2" />,
          to: "hello",
        },
        {
          id: 2,
          name: "Twitter",
          icon: <FaTwitter className="text-blue-500 w-4 h-4 mr-2" />,
          to: "hello",
        },
        {
          id: 3,
          name: "Youtube",
          icon: <FaYoutube className="text-red-600 w-4 h-4 mr-2" />,
          to: "hello",
        },
      ],
    },

    {
      id: 1,
      navLi: "Whitepaper",
      to: "#",
      subList: [],
    },
    { id: 5, navLi: "Games", to: "#", subList: [] },
    {
      id: 4,
      navLi: "More",
      to: "#",
      subList: [
        {
          id: 1,
          name: "Team",
          to: "hello",
        },
      ],
    },
    { id: 6, navLi: "Enlist", to: "#", subList: [], type: "button" },
  ];
  const [activeSublist, setActiveSublist] = useState("");

  const handleBurgerState = () => {
    setBurgerState(!burgerState);
  };

  const handleActiveSublist = (e) => {
    console.log(window.innerWidth);
    if (
      activeSublist === e.target.innerText ||
      e.target.innerText === "Whitepaper" ||
      e.target.innerText === "Register" ||
      e.target.innerText === "Games"
    ) {
      setActiveSublist("");
    } else {
      if (window.innerWidth >= 992) {
        setActiveSublist("");
        console.log("true");
      } else {
        setActiveSublist(e.target.innerText);
      }
    }
  };

  return (
    <div>
      <StyledNavbar
        className="p-2 sm:p-4 md:p-6 justify-center items-center "
        isBurgerActive={burgerState}
      >
        <div className="w-full flex flex-row justify-between sm:w-11/12  max-w-5xl">
          <img
            alt="Polemos"
            className="cursor-pointer my-3 mx-4 h-7 w-22 ml:w-26 ml:h-10"
            src="./assets/images/PolemosIcon.png"
          />
          <StyledUL
            className="font-poppins py-6 px-4 sm:px-10"
            isBurgerActive={burgerState}
          >
            {navList.map((list) => (
              <StyledLi
                key={list.id}
                className={`px-2 flex flex-col ${
                  list.type === "button" ? "" : "border-b border-gray-300"
                }`}
                isSublistActive={activeSublist === `${list.navLi}`}
              >
                <StyledLiContent
                  className="cursor-pointer font-bold flex items-center justify-between"
                  onClick={handleActiveSublist}
                  isSublistActive={activeSublist === `${list.navLi}`}
                >
                  {list.type === "button" ? (
                    <div className="flex flex-col my-2">
                      <h1 className="text-lightBlack mb-2 text-lg ml:hidden">
                        Join our Discord
                      </h1>
                      <button className="text-gray-100 cursor-pointer text-base font-semibold ml:text-base ml:ml-2 px-6 py-2 bg-gradient-to-r from-polemosColor to-red-700 rounded hover:from-white border border-transparent hover:to-white hover:border-polemosColor hover:text-polemosColor">
                        {list.navLi}
                      </button>
                    </div>
                  ) : (
                    <h1 className="text-lightBlack ml:text-gray-100 cursor-pointer text-base ml:font-semibold ml:text-base ml:px-2 ml:py-2 ml:hover:text-white">
                      {list.navLi}
                    </h1>
                  )}
                  {activeSublist !== `${list.navLi}` ? (
                    <IoIosArrowForward
                      className={`ml:hidden text-lightBlack pointer-events-none ${
                        list.subList.length === 0 ? "hidden" : "visible"
                      }`}
                    />
                  ) : (
                    <IoIosArrowDown
                      className={`ml:hidden text-lightBlack pointer-events-none ${
                        list.subList.length === 0 ? "hidden" : "visible"
                      }`}
                    />
                  )}
                </StyledLiContent>
                <StyledSublistContainer className="subContainer">
                  {list.subList.map((sub) => {
                    if (activeSublist === `${list.navLi}`) {
                      return (
                        <StyledSublist
                          key={sub.id}
                          className="px-4 top-20 pl-2"
                        >
                          <a className="flex flex-row items-center cursor-pointer ">
                            {sub.icon}
                            <h2 className="text-lightBlack py-2">{sub.name}</h2>
                          </a>
                        </StyledSublist>
                      );
                    } else {
                      return (
                        <StyledSublist
                          key={sub.id}
                          // isSublistActive={true}
                          className="hidden ml:flex px-4 text-xs pl-2 flex-row items-center ml:justify-start ml:text-sm ml:w-full ml:my-1 ml:py-1"
                        >
                          <a className="flex flex-row justify-start cursor-pointer px-1 py-1 font-medium ">
                            {sub.icon}
                            <h2 className="text-gray-100 hover:text-polemosColor">
                              {sub.name}
                            </h2>
                          </a>
                        </StyledSublist>
                      );
                    }
                  })}
                </StyledSublistContainer>
              </StyledLi>
            ))}
          </StyledUL>
          {burgerState === false ? (
            <MdMenu
              onClick={handleBurgerState}
              className="text-gray-100	 mx-4 my-3 h-7 w-7 cursor-pointer ml:hidden"
            />
          ) : (
            <MdClose
              onClick={handleBurgerState}
              className="text-gray-100	 mx-4 my-3 h-7 w-7 cursor-pointer ml:hidden"
            />
          )}
        </div>
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
