import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://comtammatuu.vn"),
  title: "Cơm tấm Má Tư | Hương vị truyền thống Việt Nam",
  description:
    "Cơm tấm Má Tư - Hương vị cơm tấm truyền thống Việt Nam trong không gian Indochine ấm cúng tại Đất Đỏ, Bà Rịa - Vũng Tàu. Đặt bàn: 0772818172",
  keywords:
    "cơm tấm, cơm tấm Má Tư, ẩm thực Việt Nam, đặc sản Việt, Indochine, Bà Rịa Vũng Tàu, Đất Đỏ, sườn cốt lết",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cơm tấm Má Tư | Hương vị truyền thống",
    description:
      "Nơi hội tụ tinh hoa ẩm thực Việt Nam với không gian ấm cúng, hoài cổ theo phong cách Indochine. QL55, Đất Đỏ, Bà Rịa - Vũng Tàu",
    type: "website",
    locale: "vi_VN",
    siteName: "Cơm tấm Má Tư",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cơm tấm Má Tư | Hương vị truyền thống Việt Nam",
    description:
      "Cơm tấm truyền thống trong không gian Indochine ấm cúng. QL55, Đất Đỏ, Bà Rịa - Vũng Tàu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
        className={`${philosopher.variable} ${mulish.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
