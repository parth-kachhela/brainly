import "./App.css";
import { PlusIcon } from "./components/Icons/PlusIcon";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <div className="flex justify-around w-100 h-50">
        <Button
          variant="primary"
          text="share"
          size="sm"
          startIcon={<PlusIcon />}
        ></Button>
        <Button
          variant="primary"
          text="share"
          size="md"
          startIcon={<PlusIcon />}
        ></Button>
        <Button
          variant="secondrey"
          text="share"
          size="lg"
          startIcon={<PlusIcon />}
        ></Button>
      </div>
    </>
  );
}

export default App;
