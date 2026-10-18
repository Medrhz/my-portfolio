import { useEffect, useRef, useState } from "react";
import { Download, Copy } from "lucide-react";

const focusStyle = "focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transition-none";

export default function QRCodeGenerator({ url = "https://my-portfolio-wrrh.vercel.app/", size = 180 }) {
  const [dataUrl, setDataUrl] = useState("");
  const [feedback, setFeedback] = useState("");
  const container = useRef(null);

  useEffect(() => {
    let active = true;
    function generate() {
      import("qrcode").then(({ default: QRCode }) => QRCode.toDataURL(url, {
        width: size,
        margin: 4,
        color: { dark: "#0f172a", light: "#ffffff" },
      })).then((value) => {
        if (active) setDataUrl(value);
      }).catch(() => {
        if (active) setFeedback("QR code could not be generated. Please try again.");
      });
    }
    const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        generate();
      }
    }, { rootMargin: "400px" }) : null;
    if (observer && container.current) observer.observe(container.current);
    else generate();
    return () => { active = false; observer?.disconnect(); };
  }, [url, size]);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "portfolio-qr.png";
    a.click();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setFeedback("Portfolio link copied.");
    } catch {
      setFeedback("Could not copy the link. Please try again.");
    }
  };

  return (
    <div ref={container} className="mt-6 border-t border-white/10 pt-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row md:flex-col lg:flex-row">
        {dataUrl ? (
          <img src={dataUrl} alt="QR code linking to Mohamed Rhziza's portfolio" width={size} height={size} className="shrink-0 max-w-full rounded-md" />
        ) : (
          <div style={{ width: size, height: size }} className="flex shrink-0 max-w-full items-center justify-center text-center"><p className="text-slate-400 text-sm" role="status">{feedback || "Generating QR code..."}</p></div>
        )}
        <div className="min-w-0 text-center sm:text-left md:text-center lg:text-left">
          <p className="text-xs leading-relaxed text-slate-400">Scan to explore my portfolio</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start md:justify-center lg:justify-start">
            <button type="button" onClick={handleDownload} disabled={!dataUrl} aria-label="Download portfolio QR code" className={`inline-flex min-h-11 items-center gap-1.5 px-3 rounded-md text-xs border border-white/15 text-slate-200 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed ${focusStyle}`}>
              <Download size={14} aria-hidden="true" /> Download
            </button>
            <button type="button" onClick={handleCopy} aria-label="Copy portfolio link" className={`inline-flex min-h-11 items-center gap-1.5 px-3 rounded-md text-xs border border-white/15 text-slate-200 hover:bg-white/10 ${focusStyle}`}>
              <Copy size={14} aria-hidden="true" /> Copy
            </button>
          </div>
        </div>
      </div>
      <p role="status" className="mt-2 text-xs text-slate-400">{dataUrl ? feedback : ""}</p>
    </div>
  );
}
