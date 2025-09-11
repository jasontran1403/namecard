import { useStatus } from "../context/StatusContext";

export default function Home() {
  const { status } = useStatus();
  return <h2>{status}</h2>;
}
