import { server } from "../config/index";

export default async function useFetch(url: string, options?: { isAPI: true }) {
  const res = await fetch(options?.isAPI ? `${server}/api/${url}` : url);
  const data = await res.json();
}
