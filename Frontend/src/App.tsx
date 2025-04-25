import { useState } from "react";
import "./App.css";
import { PlusIcon } from "./components/Icons/PlusIcon";
import { ShareIcon } from "./components/Icons/ShareIcon";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModal } from "./components/ui/CreateContentModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="p-4">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            variant="primary"
            text="Add content"
            size="md"
            startIcon={<PlusIcon size="md" />}
            onClick={() => {
              setModalOpen(true);
            }}
          ></Button>
          <Button
            variant="secondrey"
            text="Share Brain"
            size="md"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div className="flex gap-4">
          <Card
            title="you tube"
            link="https://www.youtube.com/embed/Uc2q5m2Z5T8?si=fJkgDzlAb6WpINrr"
            type="youtube"
          />
          <Card
            title="twitter"
            link="https://twitter.com/SpaceX/status/1732824684683784516?ref_src=twsrc%5Etfw"
            type="twitter"
          ></Card>
        </div>
      </div>
    </>
  );
}

export default App;
