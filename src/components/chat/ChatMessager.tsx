"use client";

import { useEffect, useRef } from "react";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import MessageBubble from "@/components/chat/chatMessager/MessagerBubble";
import { messages } from "@/mock/messages";

type ChatMessagerProps = {
  chatId: string | null;
};

const ChatMessager = ({ chatId }: ChatMessagerProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const chatMessages = chatId
    ? messages.filter((m) => m.chatId === chatId)
    : [];

  useEffect(() => {
    if (!chatId) return;
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chatId, chatMessages.length]);

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Chọn một đoạn chat
      </div>
    );
  }

  return (
    <div className="m-3 bg-white flex-1 flex flex-col rounded-xl overflow-hidden min-h-0">
      <ChatHeader chatId={chatId} />

      {/* 👇 QUAN TRỌNG */}
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
          {chatMessages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      <ChatInput chatId={chatId} />
    </div>
  );
};

export default ChatMessager;