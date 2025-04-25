import { useRef } from "react";
import { Button } from "./Button";
import { Input } from "./CreateContentModal";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  //@ts-ignore
  const usernameRef = useRef<HTMLInputElement>();
  //@ts-ignore
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username: username,
      password: password,
    });
    navigate("/dashboard");
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
  //@ts-ignore
  const usernameRef = useRef<HTMLInputElement>();
  //@ts-ignore
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username: username,
      password: password,
    });
    //@ts-ignore
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center border-gray-200 shadow-gray-50">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Username" ref={usernameRef} />
        <Input placeholder="Password" ref={passwordRef} />
        <div className="text-sm m-3">
          Already have and <a href="#">Account ?</a>
        </div>
        <div className="flex justify-center pt-4 ">
          <Button
            onClick={signin}
            variant="primary"
            size="lg"
            text="Signup"
            loding={false}
          />
        </div>
      </div>
    </div>
  );
}
