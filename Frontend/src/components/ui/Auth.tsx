import { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./CreateContentModal";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export function Signup() {
  //@ts-ignore
  const usernameRef = useRef<any>();
  //@ts-ignore
  const passwordRef = useRef<any>();

  async function signup() {
    const Username = usernameRef.current?.value;
    const Password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "signup", {
      data: {
        username: Username,
        password: Password,
      },
    });
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />
        <div className="flex justify-center pt-4 ">
          <Button
            variant="primary"
            size="lg"
            text="Signup"
            onClick={signup}
            loding={false}
          />
        </div>
      </div>
    </div>
  );
}

export function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border-gray-200 shadow-gray-50">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="text-sm m-3">
          Already have and <a href="#">Account ?</a>
        </div>
        <div className="flex justify-center pt-4 ">
          <Button variant="primary" size="lg" text="Signup" loding={false} />
        </div>
      </div>
    </div>
  );
}
