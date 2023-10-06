import React from "react";
import useLocalStorageState from "use-local-storage-state";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useLocalStorageState(key, defaultValue);

  const setLocalValue = (newValue) => {
    setValue(newValue);
  };

  return [value, setLocalValue];
};

export default useLocalStorage;
