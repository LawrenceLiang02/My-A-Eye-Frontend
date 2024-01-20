import { Message } from "./message";
export type ConversationBody = {
    pastMessages: Message[];
    currentMessage: Message;
    images: string[];
}
