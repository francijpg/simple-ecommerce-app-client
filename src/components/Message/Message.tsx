import React from "react";
import { StyleBackdrop, StyleContainer, StyleWrapper } from "./Message.styles";
// import { Redirect } from 'react-router-dom';

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <StyleWrapper>
      <StyleContainer>
          <p>{message}</p>
          {/* <Redirect to={{ pathname: "/" }} ></Redirect> */}
          <a href="/">Return to the store</a>
      </StyleContainer>
      <StyleBackdrop />
    </StyleWrapper>
  );
};

export default Message;
