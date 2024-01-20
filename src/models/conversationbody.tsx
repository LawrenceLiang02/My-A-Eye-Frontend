import { Message } from "./message";
export type conversationBody = {
    pastMessages: Message[];
    currentPrompt: Message;
    promptImages: string[];
}