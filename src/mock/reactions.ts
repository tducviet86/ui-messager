export type Reaction = {
    messageId: string;
    userId: string;
    emoji: "👍" | "❤️" | "😂" | "😮" | "😢" | "😡";
};

export const reactions: Reaction[] = [
    { messageId: "m3", userId: "me", emoji: "👍" },
    { messageId: "m3", userId: "u2", emoji: "😂" },
    { messageId: "m10", userId: "u5", emoji: "❤️" },
    { messageId: "m25", userId: "u8", emoji: "😮" },
    { messageId: "m50", userId: "me", emoji: "😂" },
    { messageId: "m120", userId: "u3", emoji: "👍" },
];