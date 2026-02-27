import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

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
  title: "Cơm tấm Má Tư | Cơm tấm ngon nhất Bà Rịa - Vũng Tàu",
  description:
    "Cơm tấm Má Tư - Cơm tấm ngon nhất Bà Rịa, Vũng Tàu. Phục vụ đĩa cơm tấm truyền thống với thịt tươi 100% trong không gian Indochine ấm cúng tại Đất Đỏ.",
  keywords:
    "cơm tấm, cơm tấm Má Tư, cơm tấm Bà Rịa, Cơm tấm Vũng Tàu, cơm tấm ngon nhất Bà Rịa, thịt tươi 100%, ẩm thực Việt Nam, đặc sản Việt, Indochine, Đất Đỏ, sườn cốt lết",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://comtammatu.com",
  },
  openGraph: {
    title: "Cơm tấm Má Tư | Hương vị truyền thống",
    description:
      "Nơi hội tụ tinh hoa ẩm thực Việt Nam với không gian ấm cúng, hoài cổ theo phong cách Indochine. QL55, Đất Đỏ, Bà Rịa - Vũng Tàu",
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
    title: "Cơm tấm Má Tư | Cơm tấm ngon nhất Bà Rịa - Vũng Tàu",
    description:
      "Cơm tấm truyền thống với thịt tươi 100% trong không gian Indochine ấm cúng. QL55, Đất Đỏ, Bà Rịa - Vũng Tàu",
    images: ["/images/space-1.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Cơm tấm Má Tư",
  description: "Quán cơm tấm ngon nhất Bà Rịa - Vũng Tàu, phục vụ các món cơm tấm truyền thống với thịt tươi 100% trong không gian Indochine ấm cúng.",
  image: "https://comtammatu.com/images/space-1.webp",
  url: "https://comtammatu.com",
  telephone: "+84772818172",
  address: {
    "@type": "PostalAddress",
    streetAddress: "QL55, TT.Đất Đỏ",
    addressLocality: "Bà Rịa",
    addressRegion: "Bà Rịa - Vũng Tàu",
    postalCode: "70000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.4933,
    longitude: 107.1081,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "22:00",
  },
  servesCuisine: "Vietnamese",
  priceRange: "₫",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50000",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
