import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(res => { setData(res) })
  }, [url])

  return data
}