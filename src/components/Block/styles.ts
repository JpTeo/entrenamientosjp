import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 0rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;
