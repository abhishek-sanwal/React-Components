import { useEffect, useState } from "react";

export default function useLocalStroge({ key, defaultValue }) {
  const [value, setValue] = useState(() => {
    const fetchedValue =
      JSON.stringify(localStorage.getItem(key)) || defaultValue;
    console.log(fetchedValue);
    return fetchedValue;
  });

  // Setter Function
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(value)),
    [key, value]
  );

  return [value, setValue];
}
