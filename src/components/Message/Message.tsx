import React from "react";
import { StyleBackdrop, StyleContainer, StyleWrapper } from "./Message.styles";

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <StyleWrapper>
      <StyleContainer>
          <p>{message}</p>
          <a href="/">Return to the store</a>
      </StyleContainer>
      <StyleBackdrop />
    </StyleWrapper>
  );
};

export default Message;
