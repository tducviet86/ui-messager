type Props = {
    time: string;
  };
  
  const MessengerTime = ({ time }: Props) => {
    return (
      <div className="text-[11px] text-gray-400 mt-1 px-1">
        {time}
      </div>
    );
  };
  
  export default MessengerTime;
  