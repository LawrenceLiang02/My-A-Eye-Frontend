import { Message } from "../models/message";

export const formatToConversationCell = (message: Message) => {
  const role = message.role;
  const text = message.text;

  return `${role.charAt(0).toUpperCase() + role.slice(1)}: ${text}`;
};
