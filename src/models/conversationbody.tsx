import { Message } from "./message";
export type conversationBody = {
    pastMessages: Message[];
    currentMessage: Message;
    Images: string[];
}
