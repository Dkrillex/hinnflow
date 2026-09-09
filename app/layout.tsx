import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "希流 Hinnflow — 让每一个 Token 都流向创造",
  description:
    "希流 Hinnflow（Hinnflow Limited · 广州琶洲）：大模型研究 × AI Token × AIGC 平台。让每一个 Token 都流向创造，Let Every Token Flow to Creation。",
  keywords: ["希流", "Hinnflow", "Hinnflow Limited", "大模型研究", "AI Token", "AIGC 平台", "hinnflow"],
  openGraph: {
    title: "希流 Hinnflow — 让每一个 Token 都流向创造",
    description: "大模型研究 × AI Token × AIGC 平台 · From Token to Creation",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
