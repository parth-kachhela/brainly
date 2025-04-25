import { TwitterIcon } from "../Icons/TwitterIcon";
import { YoutubeIcon } from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-76 fixed left-0 top-0 ">
      <SidebarItem text="Twitter" icon={<TwitterIcon />} />
      <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
    </div>
  );
};
