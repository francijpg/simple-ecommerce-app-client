import React from "react";
import { StyleBackdrop, StyleContainer, StyleWrapper, StyleLink } from "./Message.styles";

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <StyleWrapper>
      <StyleContainer>
          <p>{message}</p>
          <StyleLink to="/">Return to the store</StyleLink>
      </StyleContainer>
      <StyleBackdrop />
    </StyleWrapper>
  );
};

export default Message;
