import { LogoIcon } from "../Icons/LogoIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-76 fixed left-0 top-0 ">
      <div className="flex text-2xl pt-4 items-center">
        <div className="pr-2 text-purple-400">
          <LogoIcon />
        </div>
        Brainly
      </div>
      <SidebarItem text="Twitter" icon={<TwitterIcon />} />
      <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
    </div>
  );
};
