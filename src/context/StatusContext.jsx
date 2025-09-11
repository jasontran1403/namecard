import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export function StatusProvider({ children }) {
  const [status, setStatus] = useState("❌ Name card information must not be null.");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  return useContext(StatusContext);
}
