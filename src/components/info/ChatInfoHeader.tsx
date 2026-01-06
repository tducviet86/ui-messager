import Image from "next/image";
import { Bell, Search } from "lucide-react";
import { chatList } from "@/mock/chats";

type Props = {
  chatId: string;
};

const actions = [
  { icon: Bell, label: "Tắt thông báo" },
  { icon: Search, label: "Tìm kiếm" },
];

const ChatInfoHeader = ({ chatId }: Props) => {
  const chat = chatList.find((c) => c.id === chatId);

  if (!chat) return null;

  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={chat.avatar}
        alt={chat.name}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />

      <h2 className="mt-3 font-semibold text-base">
        {chat.name}
      </h2>

      <div className="mt-4">
        <ul className="flex gap-1 justify-around">
          {actions.map(({ icon: Icon, label }, index) => (
            <li
              key={index}
              className="w-20 py-3 rounded-full cursor-pointer
                         flex flex-col items-center justify-center gap-1
                         hover:bg-gray-100"
            >
              <Icon size={36} className="p-2 bg-gray-300 rounded-full" />
              <span className="text-xs text-gray-700 text-center">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatInfoHeader;