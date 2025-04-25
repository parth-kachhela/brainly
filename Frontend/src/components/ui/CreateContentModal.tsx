import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";

interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 opacity-70 fixed top-0 left-0 flex justify-center ">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
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
              <div>
                <Input placeholder={"title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  text="submit"
                  loding={true}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

interface input {
  onChange?: () => void;
  placeholder?: string;
}
export function Input({ onChange, placeholder }: input) {
  return (
    <div>
      <input
        type={"text"}
        className="px-4 py-2 bg-slate-100 rounded m-2 w-sm"
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
}
