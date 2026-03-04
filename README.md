# 🍚 Cơm Tấm Má Tư

Website chính thức của **Cơm Tấm Má Tư** — quán cơm tấm truyền thống tại Đất Đỏ, Bà Rịa - Vũng Tàu.

🌐 **[comtammatu.com](https://comtammatu.com)**

---

## ✨ Tính năng

- **Full-page Snap Scroll** — cuộn trang từng section mượt mà
- **Floating Pill Navbar** — glassmorphism, thay đổi theo scroll
- **Thực đơn tương tác** — switcher ảnh món ăn, hiển thị giá đầy đủ
- **Gallery + Lightbox** — xem ảnh phóng to không gian quán
- **Scroll Animations** — hiệu ứng xuất hiện khi cuộn đến section
- **Testimonials Carousel** — đánh giá khách hàng, swipe trên mobile
- **Booking Modal** — đặt bàn trực tiếp với focus trapping
- **SEO tối ưu** — Open Graph, JSON-LD, sitemap.xml, robots.txt
- **Responsive** — tối ưu mobile, tablet và desktop

---

## 🛠️ Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.x | App Router, SSR, tối ưu ảnh |
| [React](https://react.dev) | 19.x | UI library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety (strict mode) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| [Vercel Analytics](https://vercel.com/analytics) | 1.x | Phân tích lưu lượng |
| [Vercel Speed Insights](https://vercel.com/docs/speed-insights) | 1.x | Giám sát hiệu suất |

**Typography:** Philosopher (serif, headings) + Mulish (sans-serif, body) — Google Fonts với Vietnamese subset.

---

## 🚀 Bắt đầu

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

### Scripts

| Lệnh | Mô tả |
|---|---|
| `npm run dev` | Chạy dev server (localhost:3000) |
| `npm run build` | Build production |
| `npm run start` | Chạy production build |
| `npm run lint` | Kiểm tra ESLint |

---

## 📁 Cấu trúc dự án

```
src/
├── app/
│   ├── layout.tsx             # Root layout: fonts, metadata, JSON-LD
│   ├── page.tsx               # Trang chủ: snap-scroll container
│   ├── globals.css            # Design system, animations, color palette
│   ├── sitemap.ts             # Tạo sitemap.xml
│   ├── robots.ts              # Tạo robots.txt
│   └── icon.png               # Favicon
├── components/
│   ├── Navbar.tsx             # Floating pill nav (Client)
│   ├── Hero.tsx               # Hero section toàn màn hình
│   ├── HeroButtons.tsx        # CTA buttons (Client)
│   ├── About.tsx              # Câu chuyện Má Tư
│   ├── Menu.tsx               # Thực đơn switcher (Client)
│   ├── Gallery.tsx            # Ảnh không gian quán
│   ├── GalleryButtons.tsx     # Điều khiển gallery (Client)
│   ├── Testimonials.tsx       # Đánh giá khách hàng (Client)
│   ├── BookingModal.tsx       # Modal đặt bàn (Client)
│   ├── Lightbox.tsx           # Xem ảnh phóng to (Client)
│   ├── Footer.tsx             # Footer liên hệ + social
│   ├── AnimationProvider.tsx  # IntersectionObserver (Client)
│   └── ui/
│       ├── CustomCursor.tsx   # Con trỏ tùy chỉnh
│       ├── Counter.tsx        # Animated counter
│       ├── ScrollIndicator.tsx # Thanh tiến trình cuộn
│       └── CornerOrnament.tsx # Hoa văn trang trí góc
└── lib/
    ├── data.ts                # Dữ liệu tĩnh: thực đơn, gallery, testimonials
    └── hooks.ts               # Custom hooks (useInView)

public/
└── images/                    # Ảnh WebP: logo, món ăn, không gian quán
```

---

## 📞 Thông tin quán

|  |  |
|---|---|
| **Địa chỉ** | QL55, TT. Đất Đỏ, Bà Rịa - Vũng Tàu |
| **Điện thoại** | [0772 818 172](tel:0772818172) |
| **Giờ mở cửa** | 6:00 – 22:00, hàng ngày |
| **Website** | [comtammatu.com](https://comtammatu.com) |
