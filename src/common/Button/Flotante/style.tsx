import styled from "styled-components";
export const ButtonWhatsAps = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 10;
  width: 60px;
  height: 60px;
  background: #0D817E; /* Verde de WhatsApp */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s;
  font-size: 2rem;
  &:hover {
    background:rgb(255, 255, 255); /* Verde más oscuro */
  }
`;
