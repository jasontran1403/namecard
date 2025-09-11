import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStatus } from "../context/StatusContext";

export default function VcfDownload() {
  const { slug } = useParams();
  const { setStatus } = useStatus();

  // Allowed vcf files (without extension)
  const allowedFiles = [
    "chicagokidzklub",
    "cpnailsspa",
    "saukvillage",
    "tinytotsacademy",
  ];

  useEffect(() => {
    if (!slug || slug.trim() === "") {
      setStatus("❌ Name card information must not be null.");
      return;
    }

    if (!allowedFiles.includes(slug)) {
      setStatus(`❌ No namecard found for ${slug}`);
      return;
    }

    const fileUrl = `/vcf/${slug}.vcf`;

    const startDownload = () => {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = `${slug}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatus(`📥 Download started: ${slug}.vcf`);
    };

    startDownload();
  }, [slug, setStatus]);

  return null; // only sets status, nothing to render
}
