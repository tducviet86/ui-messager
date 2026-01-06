"use client";

import { Input } from "@/components/ui/input";
import {
  CircleEllipsis,
  Ellipsis,
  MessageCirclePlus,
  Search,
} from "lucide-react";
import { chatList } from "@/mock/chats";
import ChatItem from "@/components/sideBar/ChatItem";
type ChatSidebarProps = {
  selectedChatId: string | null;
  onSelectChat: (id: string) => void;
};
const ChatSidebar = ({ selectedChatId, onSelectChat }: ChatSidebarProps) => {
  return (
    <aside className="w-80 bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 h-14">
        <h1 className="text-2xl font-semibold">Đoạn chat</h1>

        <ul className="flex gap-1">
          {[CircleEllipsis, MessageCirclePlus].map((Icon, index) => (
            <li
              key={index}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer flex items-center justify-center"
            >
              <Icon size={22} />
            </li>
          ))}
        </ul>
      </div>

      {/* Search */}
      <div className="px-3">
        <div className="relative ">
          <Search
            size={18}
            className="absolute top-2 left-3 text-gray-500 text-"
          />
          <Input
            placeholder="Tìm kiếm trong đoạn chat"
            className="w-full  pl-9 bg-gray-100 border-none rounded-3xl focus-visible:ring-0"
          />
        </div>
      </div>

      {/* Filters */}
      <ul className="flex items-center justify-around px-3 h-10 text-sm mt-1.5">
        <li className="px-3 py-2 rounded-full bg-blue-100 text-blue-600 font-medium cursor-pointer">
          Tất cả
        </li>
        <li className="px-3 py-2 rounded-full hover:bg-gray-100 cursor-pointer">
          Chưa đọc
        </li>
        <li className="px-3 py-2 rounded-full hover:bg-gray-100 cursor-pointer">
          Nhóm
        </li>
        <li className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
          <Ellipsis size={18} />
        </li>
      </ul>

      {/* Chat list */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-1">
        {chatList.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            active={chat.id === selectedChatId}
            onClick={() => onSelectChat(chat.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default ChatSidebar;
