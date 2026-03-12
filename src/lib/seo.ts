export const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Cơm tấm Má Tư",
        description: "Quán cơm tấm ngon nhất khu vực Đất Đỏ, Long Điền, Phước Hải, Long Hải, Bà Rịa. Phục vụ các món cơm tấm truyền thống với thịt tươi 100% trong không gian Indochine ấm cúng.",
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
        areaServed: [
            "Đất Đỏ",
            "Long Điền",
            "Phước Hải",
            "Long Hải",
            "Bà Rịa"
        ],
        sameAs: [
            "https://www.facebook.com/profile.php?id=61587525182986",
            "https://maps.app.goo.gl/6XZkDT6eHD553s639",
            "https://www.tiktok.com/@taimatu2000"
        ],
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
            reviewCount: "150",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Cơm tấm Má Tư",
        url: "https://comtammatu.com"
    }
];
