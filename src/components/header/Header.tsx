"use client";

import { Input } from "@/components/ui/input";
import {
  Facebook,
  House,
  Grip,
  Bell,
  Flag,
  PlaySquare,
  Store,
  Users,
  Search,
} from "lucide-react";
import Image from "next/image";

const navIcons = [House, Flag, PlaySquare, Store, Users];

const Header = () => {
  return (
    <header className="flex bg-[#ffffff] items-center justify-between px-4 h-14 border-b shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-700 cursor-pointer transition">
          <Facebook size={20} className="text-white" />
        </div>
        <div className="flex items-center gap-2 px-3 h-10 rounded-full bg-gray-100">
          <Search size={18} className="text-gray-500" />

          <Input
            placeholder="Tìm kiếm trên Facebook"
            className="w-64 bg-transparent border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
          />
        </div>
      </div>

      <ul className="flex flex-1 justify-center gap-6">
        {navIcons.map((Icon, index) => (
          <li
            key={index}
            className="px-8 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <Icon size={28} />
          </li>
        ))}
      </ul>

      <ul className="flex gap-1 ">
        {[Grip, Bell].map((Icon, index) => (
          <li
            key={index}
            tabIndex={0}
            className="ml-2 p-2 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded-full cursor-pointer flex items-center justify-center outline-none"
          >
            <Icon size={22} />
          </li>
        ))}
        <li
          tabIndex={0}
          className="ml-2   cursor-pointer flex items-center justify-center outline-none"
        >
          <Image
            src={`https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/568546152_1527533848392241_8153473311915321891_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mpYeGYuIRtgQ7kNvwFyjMK6&_nc_oc=AdnxOklntDjB5xm16MlxGf7XlE4uLLLXBXHG1ih4htw5FM94DSY6YmncGmy06gONVLQ&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=GendP6rter7lq7RjXSpf0Q&oh=00_AflwDZca2Cg5P4Ah8I5ggDD7tachU2lBHUTvmz8w6-fdAw&oe=6957F4A3`}
            alt="Chat 1"
            width={35}
            height={35}
            className="rounded-full"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
