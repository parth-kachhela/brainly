import { useState } from "react";
import { PlusIcon } from "../components/Icons/PlusIcon";
import { ShareIcon } from "../components/Icons/ShareIcon";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL, FRONTEND_URL } from "../config";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();
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
            onClick={async () => {
              const response = await axios.post(
                BACKEND_URL + "/api/v1/brain/share",
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              //@ts-ignore
              const url = `${FRONTEND_URL}/share/${response.data.hash}`;
              alert(url);
            }}
          ></Button>
        </div>
        {/* {JSON.stringify(contents)} */}
        <div className="flex gap-4 flex-wrap p-4">
          {contents.map(({ type, link, title }) => (
            <Card title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
