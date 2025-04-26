import { LogoIcon } from "../Icons/LogoIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r-gray-400 w-76 fixed left-0 top-0 ">
      <div className="flex text-2xl pt-4 items-center">
        <div className="pr-4 pl-4 text-purple-400">
          <LogoIcon />
        </div>
        Brainly
      </div>
      <div className="mt-10 ml-4 flex flex-col gap-2 ">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};
