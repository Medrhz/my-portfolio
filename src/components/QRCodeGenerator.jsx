import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { motion } from "framer-motion";
import { Download, Copy } from "lucide-react";

export default function QRCodeGenerator({ url = "https://my-portfolio-wrrh.vercel.app/", size = 180 }) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    QRCode.toDataURL(url, {
      width: size,
      margin: 1,
      color: { dark: "#6366f1", light: "#0f172a" }, // indigo with dark bg
    }).then(setDataUrl);
  }, [url, size]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "portfolio-qr.png";
    a.click();
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-10 flex flex-col items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition-all duration-700">
      {dataUrl ? (
        <motion.img
          src={dataUrl}
          alt="QR Code"
          width={size}
          height={size}
          className="rounded-lg shadow-md border border-indigo-500/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
      ) : (
        <p className="text-slate-400 text-sm">Generating QR...</p>
      )}

      <p className="text-xs text-slate-400 italic">📱 Scan to visit my portfolio</p>

      <div className="flex gap-3">
        <button onClick={handleDownload} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm bg-indigo-600/80 hover:bg-indigo-700 text-white transition">
          <Download size={14} /> Download
        </button>
        <button onClick={handleCopy} className="flex items-center gap-1 px-3 py-1 rounded-md text-sm border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/10 transition">
          <Copy size={14} /> Copy
        </button>
      </div>
    </motion.div>
  );
}
