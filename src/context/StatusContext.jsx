import { createContext, useContext, useState } from "react";

const StatusContext = createContext();

export function StatusProvider({ children }) {
  const [status, setStatus] = useState("📇 Vui lòng nhập đường dẫn namecard...");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  return useContext(StatusContext);
}
