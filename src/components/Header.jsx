import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Header = () => {

    const takeToGithub = () => {
        goto
    }
  return (
    <div className="flex flex-row gap-4 m-2 justify-end text-2xl mr-4 mt-4 font-semibold">
      <div className="gap-6 space-x-4">
        <span>Home</span>
        <span>Resume</span>
        <span>Certificates</span>
        <span>Hire Me</span>
      </div>
      <div>
        <a href="https://github.com/amanurmaliya" target="_blank" rel="noopener noreferrer">
        <Avatar>
          <AvatarImage className="w-9 h-9 rounded-full" src="https://avatars.githubusercontent.com/u/143320559?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </a>
      </div>
    </div>
  );
};

export default Header;
