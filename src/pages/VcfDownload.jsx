import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStatus } from "../context/StatusContext";

export default function VcfDownload() {
  const { slug } = useParams();
  const { setStatus } = useStatus();

  useEffect(() => {
    if (!slug || slug.trim() === "") {
      setStatus("❌ Không tìm thấy slug");
      return;
    }

    const fileUrl = `/vcf/${slug}.vcf`;

    const checkAndDownload = async () => {
      try {
        // kiểm tra file tồn tại bằng HEAD request
        const res = await fetch(fileUrl, { method: "HEAD" });
        console.log(res);
        if (res.ok) {
          // chỉ khi file tồn tại mới tải
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = `${slug}.vcf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setStatus(`📥 Đã bắt đầu tải file: ${slug}.vcf`);
        } else {
          setStatus(`❌ Không tìm thấy namecard: ${slug}.vcf`);
        }
      } catch (error) {
        console.error(error);
        setStatus("⚠️ Có lỗi xảy ra khi kiểm tra file.");
      }
    };

    checkAndDownload();
  }, [slug, setStatus]);

  return null; // không render gì ở đây, chỉ setStatus để hiển thị ở Home
}
