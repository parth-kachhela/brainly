import "./App.css";
import { PlusIcon } from "./components/Icons/PlusIcon";
import { ShareIcon } from "./components/Icons/ShareIcon";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <div className="flex justify-around w-100 h-50">
        <Button
          variant="primary"
          text="share"
          size="md"
          startIcon={<ShareIcon />}
        ></Button>
        <Button
          variant="secondrey"
          text="Add content"
          size="lg"
          startIcon={<PlusIcon size="lg" />}
        ></Button>
      </div>
    </>
  );
}

export default App;
