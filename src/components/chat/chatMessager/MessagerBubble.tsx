import MessengerTime from "@/components/chat/chatMessager/MessagerTime";
import { Message } from "@/mock/messages";

type Props = {
  message: Message;
};

const MessageBubble = ({ message }: Props) => {
  const isMe = message.sender === "me";

  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs px-3 py-2 rounded-2xl text-sm
          ${
            isMe
              ? "bg-blue-600 text-white rounded-2xl"
              : "bg-gray-100 text-gray-900 rounded-2xl"
          }`}
      >
        {message.content}
      </div>
      <MessengerTime time={message.time} />
    </div>
  );
};

export default MessageBubble;
