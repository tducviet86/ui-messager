export type Message = {
    id: string;
    chatId: string;
    sender: "me" | "other";
    content: string;
    time: string;
};
export const messages: Message[] = Array.from({ length: 50 }).flatMap((_, chatIndex) => {
    const chatId = String(chatIndex + 1);

    return Array.from({ length: 50 }).map((__, msgIndex) => ({
        id: `m-${chatId}-${msgIndex + 1}`,
        chatId,
        sender: msgIndex % 2 === 0 ? "me" : "other",
        content: `Tin nhắn ${msgIndex + 1} của chat ${chatId}`,
        time: `09:${(msgIndex % 60).toString().padStart(2, "0")}`,
    }));
});
