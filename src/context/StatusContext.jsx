import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export function StatusProvider({ children }) {
  const [status, setStatus] = useState("📇 Invalid url for namecard information...");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  return useContext(StatusContext);
}
