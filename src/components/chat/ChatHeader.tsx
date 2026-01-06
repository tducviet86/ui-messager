import Image from "next/image";
import { Phone, Video, Info } from "lucide-react";
import { chatList } from "@/mock/chats";

type Props = {
  chatId: string;
};

const ChatHeader = ({ chatId }: Props) => {
  const chat = chatList.find((c) => c.id === chatId);
  if (!chat) return null;

  return (
    <header className="flex justify-between items-center px-4 h-14 border-b">
      <div className="flex items-center gap-3">
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={48}
          height={48}
          className="rounded-full"
        />
        <span className="text-lg font-semibold">{chat.name}</span>
      </div>

      <ul className="flex gap-1">
        {[Phone, Video, Info].map((Icon, index) => (
          <li
            key={index}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <Icon size={22} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default ChatHeader;