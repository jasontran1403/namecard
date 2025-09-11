import { useStatus } from "../context/StatusContext";

export default function Home() {
  const { status } = useStatus();
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{status}</h2>
    </div>
  );
}
