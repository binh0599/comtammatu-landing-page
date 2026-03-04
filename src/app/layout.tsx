import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { jsonLd } from "@/lib/seo";

const philosopher = Philosopher({
  variable: "--font-philosopher",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comtammatu.com"),
  title: {
    default: "Cơm tấm Má Tư | Cơm tấm ngon nhất Bà Rịa - Vũng Tàu",
    template: "%s | Cơm tấm Má Tư",
  },
  appleWebApp: {
    title: "Cơm tấm Má Tư",
    statusBarStyle: "default",
  },
  description:
    "Cơm tấm Má Tư - Quán cơm tấm ngon nhất khu vực Đất Đỏ, Long Điền, Phước Hải, Long Hải, Bà Rịa. Phục vụ đĩa cơm tấm truyền thống với thịt tươi 100% trong không gian Indochine ấm cúng.",
  keywords:
    "cơm tấm, cơm tấm Má Tư, quán cơm tấm ngon, cơm tấm Bà Rịa, Cơm tấm Vũng Tàu, cơm tấm Đất Đỏ, cơm tấm Long Điền, cơm tấm Phước Hải, cơm tấm Long Hải, quán ăn ngon, thịt tươi 100%, ẩm thực Việt Nam, đặc sản Việt, Indochine, sườn cốt lết",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://comtammatu.com",
  },
  openGraph: {
    title: "Cơm tấm Má Tư | Quán cơm tấm ngon Bà Rịa, Đất Đỏ, Long Điền",
    description:
      "Nơi hội tụ tinh hoa ẩm thực Việt Nam. Quán cơm tấm ngon nhất khu vực Đất Đỏ, Long Điền, Phước Hải, Long Hải, Bà Rịa với không gian ấm cúng, hoài cổ theo phong cách Indochine.",
    type: "website",
    locale: "vi_VN",
    siteName: "Cơm tấm Má Tư",
    images: [
      {
        url: "/images/space-1.webp",
        width: 1200,
        height: 630,
        alt: "Không gian quán Cơm tấm Má Tư - Phong cách Indochine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cơm tấm Má Tư | Quán cơm tấm ngon Bà Rịa, Đất Đỏ, Long Điền",
    description:
      "Cơm tấm truyền thống với thịt tươi 100%. Quán cơm tấm ngon nhất khu vực Đất Đỏ, Long Điền, Phước Hải, Long Hải, Bà Rịa.",
    images: ["/images/space-1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${philosopher.variable} ${mulish.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
