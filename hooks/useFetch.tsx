import { useState, useEffect } from "react";
import { server } from "../config/index";

export default async function useFetch(
  url: string,
  options?: { isAPI?: true }
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resData, setResData] = useState<unknown | null>();

  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch(options?.isAPI ? `${server}/api/${url}` : url);
      const data = await res.json();
      setResData(data);
    } catch (err) {
      console.error(
        "Something has gone wrong, while fetching with the useFetch hook.",
        err
      );
      setResData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);
  return { isLoading, resData };
}
