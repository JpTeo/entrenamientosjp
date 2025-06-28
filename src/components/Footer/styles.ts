import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;
export const SubTitle = styled("h4")`
  font-family: "RedHatDisplay", sans-serif;

  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
    margin: 10% 0;
  }
`;
export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
  @media (max-width: 768px) {
    display: flex !important;
    justify-content: end;
  }
`;
export const DivImage = styled("div")`
  border-radius: 50%;
  width: 7vw;
  height: 7vw;

  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
`;

export const Extra = styled("section")`
  position: relative;
  width: 100%;
  padding: 5%;
  color: white;
`;

export const LogoContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: start;
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10%;
  }
`;
export const ContainerMapa = styled("div")`
  width: 100%;
  height: 50vh;
  overflow: hidden;
  border-radius: 20px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10%;
  }
`;

export const Para = styled("div")`
  color: #18216d;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #18216d;
  max-width: fit-content;
  border-bottom: 1px solid #18216d;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.1s ease-in-out;
  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  @media (max-width: 768px) {
    margin: 5% 0;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    margin-boton: 5%;
    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: "RedHatDisplay", sans-serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;
