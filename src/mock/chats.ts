export type ChatItem = {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unread: number;
    online: boolean;
};

export const chatList: ChatItem[] = Array.from({ length: 25 }).map((_, i) => ({
    id: String(i + 1),
    name:
        i === 3
            ? "Nhóm Frontend"
            : i === 7
                ? "Team Backend"
                : i === 12
                    ? "Khách hàng ABC"
                    : `User ${i + 1}`,
    avatar:
        "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-1/568546152_1527533848392241_8153473311915321891_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Oe_nNMMjIJcQ7kNvwEbYvuw&_nc_oc=AdnOsyXfDaXLh0Ec02_CpNE1ZyzvTDO8wrbsjyKbmGUJRlAGHN19Fw4AiCdPSy2e-es&_nc_zt=24&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AJBy1fhLcxxKB0RmOpQTrw&oh=00_Afr8KXzY25cnEym8XJ_8q7VWIFmYtihp7S1CuclnFCJWzw&oe=696251A1",
    lastMessage: `Tin nhắn cuối cùng ${i + 1}`,
    time:
        i < 5
            ? `09:${20 + i}`
            : i < 10
                ? "Hôm qua"
                : i < 15
                    ? "T6"
                    : i < 20
                        ? "T5"
                        : "CN",
    unread: i % 4 === 0 ? 0 : (i % 5) + 1,
    online: i % 3 === 0,
}));