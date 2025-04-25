import { useState } from "react";
import { PlusIcon } from "../components/Icons/PlusIcon";
import { ShareIcon } from "../components/Icons/ShareIcon";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <div className="">
        <Sidebar />
      </div>
      <div className="ml-74 p-4 min-h-screen bg-gray-100 border-2">
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
            title="youtube"
            link="https://www.youtube.com/embed/RQbnPl5E5No?si=r3HILKYoHZj6S0Us"
            type="youtube"
          />
          <Card
            title="twitter"
            link="https://twitter.com/HumansNoContext/status/1915360347965247632"
            type="twitter"
          ></Card>
        </div>
      </div>
    </div>
  );
}
