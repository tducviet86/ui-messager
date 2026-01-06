"use client";

import { Input } from "@/components/ui/input";
import {
  Mic,
  Image as ImageIcon,
  Sticker,
  Gift,
  Smile,
  ThumbsUp,
  X,
  Send,
  Square,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import type { LucideIcon } from "lucide-react";

type ChatMode = "text" | "voice";

type ChatInputProps = {
  chatId: string;
};

type ChatAction = {
  type: string;
  Icon: LucideIcon;
  onClick: () => void;
};

const formatTime = (sec: number) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

/* ======================
   Voice Bar
====================== */
const VoiceBar = ({
  time,
  onCancel,
  onSend,
}: {
  time: string;
  onCancel: () => void;
  onSend: () => void;
}) => {
  return (
    <div className="flex items-center w-full gap-3">
      <button
        onClick={onCancel}
        className="p-2 rounded-full hover:bg-gray-100 text-red-500"
      >
        <X size={18} />
      </button>

      <div className="flex-1 h-8 bg-gray-200 rounded-full relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600">
          <div className="h-full flex items-end justify-between px-2">
            <Square
              size={22}
              className="bg-white text-blue-600 rounded-full p-1 mb-1"
            />
            <span className="mb-1 text-sm text-white font-mono">{time}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onSend}
        className="p-2 rounded-full hover:bg-gray-100 text-blue-600"
      >
        <Send size={18} />
      </button>
    </div>
  );
};

/* ======================
   Main Component
====================== */
const ChatInput = ({ chatId }: ChatInputProps) => {
  const [mode, setMode] = useState<ChatMode>("text");
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [time, setTime] = useState(0);

  const emojiRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  /* ======================
     Reset when chat changes
  ====================== */
  useEffect(() => {
    setMessage("");
    setShowEmoji(false);
    setMode("text");
    setTime(0);
  }, [chatId]);

  /* ======================
     Emoji
  ====================== */
  const onEmojiClick = (emoji: EmojiClickData) => {
    setMessage((prev) => prev + emoji.emoji);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
        setShowEmoji(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ======================
     Voice timer
  ====================== */
  useEffect(() => {
    if (mode !== "voice") return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [mode]);

  const startVoiceRecord = async () => {
    mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    setTime(0);
    setMode("voice");
  };

  const cancelVoice = () => {
    mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
    mediaStreamRef.current = null;
    setMode("text");
    setTime(0);
  };

  const sendVoice = () => {
    console.log("Send voice:", time, "seconds");
    cancelVoice();
  };

  /* ======================
     File upload
  ====================== */
  const openFileUploader = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from<File>(e.target.files ?? []);
    files.forEach((file) => {
      console.log("Upload:", file.name);
    });
    e.target.value = "";
  };

  /* ======================
     Actions
  ====================== */
  const ACTIONS: ChatAction[] = [
    { type: "voice", Icon: Mic, onClick: startVoiceRecord },
    { type: "image", Icon: ImageIcon, onClick: openFileUploader },
    { type: "gif", Icon: Sticker, onClick: () => {} },
    { type: "gift", Icon: Gift, onClick: () => {} },
  ];

  const disabled = !chatId;

  return (
    <div className="h-14 shrink-0 px-3 bg-white flex items-center">
      {mode === "voice" ? (
        <VoiceBar
          time={formatTime(time)}
          onCancel={cancelVoice}
          onSend={sendVoice}
        />
      ) : (
        <>
          {/* Actions */}
          <div className="flex gap-2 text-blue-600">
            {ACTIONS.map(({ type, Icon, onClick }) => (
              <button
                key={type}
                disabled={disabled}
                onClick={onClick}
                className={`p-2 rounded-full ${
                  disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="relative flex-1 flex items-center bg-gray-100 rounded-full px-3 mx-2">
            <Input
              value={message}
              disabled={disabled}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && message.trim()) {
                  console.log("Send text:", message, "to", chatId);
                  setMessage("");
                }
              }}
              placeholder="Aa"
              className="flex-1 bg-transparent border-none focus-visible:ring-0 px-0"
            />

            <button
              disabled={disabled}
              onClick={() => setShowEmoji((v) => !v)}
              className="p-2 hover:bg-gray-200 rounded-full text-gray-600"
            >
              <Smile size={20} />
            </button>

            {showEmoji && (
              <div ref={emojiRef} className="absolute bottom-14 right-0 z-50">
                <EmojiPicker
                  onEmojiClick={onEmojiClick}
                  height={350}
                  width={300}
                />
              </div>
            )}
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-full text-blue-600">
            <ThumbsUp size={20} />
          </button>
        </>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        hidden
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ChatInput;
