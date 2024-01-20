import { Message } from "./message";
import { Image } from "./image";
export type ConversationBody = {
    pastMessages: Message[];
    currentMessage: Message;
    images: Image[];
}
