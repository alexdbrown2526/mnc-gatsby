import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { navItems } from "./NavItems";

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">MNC</NavLink>
      <Bars />
      <NavMenu>
        {navItems.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavButton>button</NavButton>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: red;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1300px) / 2;
  z-index: 100;
  position: relative;
`;

const NavLink = styled(Link)`
  color: black;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
`;

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    tranform: translate(-100%, 75%);
    font-size: 2.5rem;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
