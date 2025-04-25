import { ShareIcon } from "../Icons/ShareIcon";

export const Card = () => {
  return (
    <div className=" border-1 shadow-md border-slate-500 max-w-4xl w-52 ">
      <div className="flex justify-between items-center">
        <div className="flex">
          <ShareIcon />
          project idea
        </div>
        <div className="flex">
          <ShareIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};
