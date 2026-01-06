export type Chat = {
    id: string;
    userId: string; // liên kết users
    lastMessage: string;
    lastTime: string;
    unread: number;
};

export const chats: Chat[] = Array.from({ length: 25 }).map((_, i) => ({
    id: `c${i + 1}`,
    userId: `u${i + 1}`,
    lastMessage: `Tin nhắn cuối cùng ${i + 1}`,
    lastTime:
        i < 5
            ? `09:${20 + i}`
            : i < 10
                ? "Hôm qua"
                : i < 15
                    ? "T6"
                    : i < 20
                        ? "T5"
                        : "CN",
    unread: i % 4 === 0 ? 0 : (i % 6),
}));
