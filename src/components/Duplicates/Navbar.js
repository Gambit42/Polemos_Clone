import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const StyledNavbar = styled.nav`
  position: fixed;
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 999;
  transition: all 0.2s ease-in;
  background-color: #fff;
  border-bottom: 2px solid #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  ${({ isBurgerActive }) =>
    isBurgerActive &&
    css`
      border-bottom: 2px solid #e5e7eb;
    `}

  @media (min-width: 768px) {
    height: 2rem;
  }
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  transition: transform 0.1s ease-in;
  transform: translateX(-100%);
  top: 4rem;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  z-index: -1;

  ${({ isBurgerActive }) =>
    isBurgerActive &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: 768px) {
    all: unset;
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 1rem;
    width: 40%;
    padding: 0 1rem;
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const StyledLi = styled.div`
  padding: 20px 0 20px 0;
  background-color: #fff;

  ${({ isSublistActive }) =>
    isSublistActive &&
    css`
      padding: 25px 0 10px 0;
    `}

  @media (min-width: 768px) {
    all: unset !important;
  }
`;

const StyledLiContainer = styled.div`
  ${({ isSublistActive }) =>
    isSublistActive &&
    css`
      padding-bottom: 15px;
    `}
  @media (min-width: 768px) {
    all: unset !important;
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
          icon: <FaDiscord className="text-lightBlack w-4 h-4 mr-2" />,
          to: "hello",
        },
        {
          id: 2,
          name: "Twitter",
          icon: <FaTwitter className="text-lightBlack w-4 h-4 mr-2" />,
          to: "hello",
        },
        {
          id: 3,
          name: "Youtube",
          icon: <FaYoutube className="text-lightBlack w-4 h-4 mr-2" />,
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
  ];
  const [activeSublist, setActiveSublist] = useState("");

  const handleBurgerState = () => {
    setBurgerState(!burgerState);
  };

  const handleActiveSublist = (e) => {
    if (
      activeSublist === e.target.innerText ||
      e.target.innerText === "Whitepaper"
    ) {
      setActiveSublist("");
    } else {
      setActiveSublist(e.target.innerText);
    }
  };

  return (
    <div>
      <StyledNavbar className="p-2 sm:p-4 md:p-6" isBurgerActive={burgerState}>
        <img
          alt="axie"
          className="cursor-pointer my-3 mx-4 h-7 w-22 md:mx-10 md:h-6"
          src="./assets/images/PolemosIconBlack.png"
        />
        <StyledUL
          className="font-poppins py-4 px-4 sm:px-10"
          isBurgerActive={burgerState}
        >
          {navList.map((list) => (
            <StyledLiContainer
              key={list.id}
              className="px-2 flex flex-col border-b border-gray-200"
              isSublistActive={activeSublist === `${list.navLi}`}
            >
              <StyledLi
                className="cursor-pointer text-xs font-bold flex items-center justify-between"
                onClick={handleActiveSublist}
                isSublistActive={activeSublist === `${list.navLi}`}
              >
                <h1 className="text-lightBlack cursor-pointer md:text-xs md:font-bold">
                  {list.navLi}
                </h1>

                {activeSublist !== `${list.navLi}` ? (
                  <IoIosArrowForward
                    className={`md:hidden text-lightBlack pointer-events-none ${
                      list.subList.length === 0 ? "hidden" : "visible"
                    }`}
                  />
                ) : (
                  <IoIosArrowDown
                    className={`md:hidden text-lightBlack pointer-events-none ${
                      list.subList.length === 0 ? "hidden" : "visible"
                    }`}
                  />
                )}
              </StyledLi>

              {list.subList.map((sub) => {
                if (activeSublist === `${list.navLi}`) {
                  return (
                    <div
                      key={sub.id}
                      className="text-xs pl-2 flex flex-row items-center"
                    >
                      {sub.icon}
                      <h2 className="text-gray-900 py-2">{sub.name}</h2>
                    </div>
                  );
                } else {
                  return "";
                }
              })}

              {/* {list.subList.map((sub) => (
                  <h2 key={sub.id} className="py-2">
                    {sub.name}
                  </h2>
                ))}
                
                 */}
            </StyledLiContainer>
          ))}
        </StyledUL>
        {burgerState === false ? (
          <MdMenu
            onClick={handleBurgerState}
            className="text-zinc-900	 mx-4 my-3 h-7 w-7 cursor-pointer md:hidden"
          />
        ) : (
          <MdClose
            onClick={handleBurgerState}
            className="text-zinc-900	 mx-4 my-3 h-7 w-7 cursor-pointer md:hidden"
          />
        )}
      </StyledNavbar>
    </div>
  );
};

export default Navbar;
