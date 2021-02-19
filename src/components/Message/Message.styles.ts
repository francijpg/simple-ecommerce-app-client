import styled from "styled-components";

export const StyleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyleBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #242d60;
`;

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  z-index: 1;  
  border-radius: 6px;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;

  p {
    color: #242d60;
    font-size: 20px;
  }
  a {
    font-size: 20px;
  }
`;
