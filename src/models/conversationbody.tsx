import { Message } from "./message";
export type ConversationBody = {
    pastMessages: Message[];
    currentMessage: Message;
    Images: string[];
}
