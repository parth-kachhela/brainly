import { Button } from "./Button";
import { Input } from "./CreateContentModal";

export function Signup() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div className="flex justify-center pt-4 ">
          <Button variant="primary" size="lg" text="Signup" loding={false} />
        </div>
      </div>
    </div>
  );
}

export function Signin() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <div>
          Already have and <a href="#">Account ?</a>
        </div>
        <div className="flex justify-center pt-4 ">
          <Button variant="primary" size="lg" text="Signup" loding={false} />
        </div>
      </div>
    </div>
  );
}
