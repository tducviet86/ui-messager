import ChatInfoHeader from "@/components/info/ChatInfoHeader";

type Props = {
  chatId: string | null;
};

const ChatInfoPannel = ({ chatId }: Props) => {
  if (!chatId) return null;

  return (
    <aside className="w-80 bg-white my-3 mr-3 rounded-xl">
      <ChatInfoHeader chatId={chatId} />
    </aside>
  );
};

export default ChatInfoPannel;
