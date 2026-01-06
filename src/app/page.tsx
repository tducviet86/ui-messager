"use client";

import { useState } from "react";
import ChatMessager from "@/components/chat/ChatMessager";
import ChatInfoPannel from "@/components/info/ChatInfoPannel";
import ChatSidebar from "@/components/sideBar/ChatSidebar";

export default function Home() {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  return (
    <div className="flex flex-1 min-h-0 bg-[#F0F2F5] overflow-hidden">
      <ChatSidebar
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
      />
      <ChatMessager chatId={selectedChatId} />
      <ChatInfoPannel chatId={selectedChatId} />
    </div>
  );
}