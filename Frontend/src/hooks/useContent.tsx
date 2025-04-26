import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);
  function reFresh() {
    axios
      .get(BACKEND_URL + "/api/v1/content", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        //@ts-ignore
        setContents(response.data.consent);
      })
      .catch((e) => {
        console.log("error is " + e);
      });
  }
  useEffect(() => {
    reFresh();
    let interval = setInterval(() => {
      reFresh();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return contents;
}
