import { useRef, useState } from "react";
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum contentTpye {
  Youtube = "youtube",
  Twitter = "twitter",
}
interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  //@ts-ignore
  const titleRef = useRef<HTMLInputElement>();
  //@ts-ignore
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState("youtube");
  async function addContent() {
    const title = titleRef.current.value;
    const link = linkRef.current.value;
    await axios.post(
      BACKEND_URL + "/api/v1/content",
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500/70 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Close Button */}
            <div className="flex justify-end">
              <div
                onClick={() => {
                  onClose();
                }}
                className="cursor-pointer"
              >
                <CrossIcon />
              </div>
            </div>

            {/* Inputs */}
            <div className="mt-4 space-y-4">
              <Input placeholder="Title" ref={titleRef} />
              <Input placeholder="Link" ref={linkRef} />
            </div>

            {/* Types */}
            <div className="flex gap-4 items-center mt-6">
              <h1 className="whitespace-nowrap">Types:</h1>
              <Button
                size="sm"
                text="YouTube"
                variant={type === contentTpye.Youtube ? "primary" : "secondrey"}
                onClick={() => {
                  setType(contentTpye.Youtube);
                }}
              />
              <Button
                size="sm"
                text="Twitter"
                variant={type === contentTpye.Twitter ? "primary" : "secondrey"}
                onClick={() => {
                  setType(contentTpye.Twitter);
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <Button
                variant="primary"
                size="lg"
                text="Submit"
                onClick={addContent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface input {
  ref?: any;
  placeholder?: string;
}
export function Input({ ref, placeholder }: input) {
  return (
    <div>
      <input
        type={"text"}
        className="px-4 py-2 bg-slate-100 rounded m-2 w-sm"
        placeholder={placeholder}
        ref={ref}
      ></input>
    </div>
  );
}
