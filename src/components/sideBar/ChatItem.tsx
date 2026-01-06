import Image from "next/image";
import { ChatItem as ChatItemType } from "@/mock/chats";

type ChatItemProps = {
  chat: ChatItemType;
  active?: boolean;
  onClick: () => void;
};
const ChatItem = ({ chat, active,onClick }: ChatItemProps) => {
  return (
    <div
    onClick={onClick}
    className={`
      flex items-center gap-3 px-3 py-2 cursor-pointer rounded-lg
      ${active ? "bg-blue-100" : "hover:bg-gray-100"}
    `}
  >
      {/* Avatar */}
      <div className="relative shrink-0">
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm truncate">
            {chat.name}
          </h2>
          <span className="text-xs text-gray-400">
            {chat.time}
          </span>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-sm text-gray-500 truncate">
            {chat.lastMessage}
          </p>

          {chat.unread > 0 && (
            <span className="min-w-4.5 h-4.5 text-xs bg-blue-600 text-white rounded-full flex items-center justify-center">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
