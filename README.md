# 🍚 Cơm tấm Má Tư — Website chính thức

Website landing page cho quán **Cơm tấm Má Tư** – hương vị truyền thống Việt Nam trong không gian Indochine hoài cổ tại Đất Đỏ, Bà Rịa - Vũng Tàu.

---

## ✨ Tính năng

- **Full-page Snap Scroll** – cuộn trang theo từng section mượt mà
- **Floating Pill Navbar** – hiệu ứng glassmorphism, thay đổi khi cuộn
- **Thực đơn tương tác** – switcher ảnh món ăn, hiển thị giá đầy đủ
- **Gallery + Lightbox** – xem ảnh phóng to không gian quán
- **Reveal Animations** – hiệu ứng xuất hiện khi cuộn đến section
- **Testimonials Carousel** – đánh giá khách hàng (mobile: swipe ngang, desktop: 3 cột)
- **SEO đầy đủ** – metadata, Open Graph, sitemap.xml, robots.txt
- **Responsive** – tối ưu cả mobile lẫn desktop

---

## 🛠️ Tech Stack

| Công nghệ | Phiên bản |
|---|---|
| [Next.js](https://nextjs.org) | 16.x (App Router) |
| [React](https://react.dev) | 19.x |
| [TypeScript](https://typescriptlang.org) | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | 4.x |
| Google Fonts | Philosopher (serif), Mulish (sans) |

---

## 📁 Cấu trúc dự án

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata SEO, fonts
│   ├── page.tsx            # Server Component – trang chủ
│   ├── globals.css         # Design system, animations, utilities
│   ├── sitemap.ts          # /sitemap.xml tự động
│   └── robots.ts           # /robots.txt chuẩn SEO
├── components/
│   ├── Navbar.tsx          # Floating pill nav (Client)
│   ├── Hero.tsx            # Hero section với watermark
│   ├── About.tsx           # Câu chuyện Má Tư
│   ├── Menu.tsx            # Thực đơn 3 cột (Client – switcher)
│   ├── Gallery.tsx         # Ảnh không gian quán
│   ├── GalleryClient.tsx   # Lightbox state wrapper (Client)
│   ├── Testimonials.tsx    # Đánh giá khách hàng
│   ├── Contact.tsx         # Thông tin liên hệ + Google Maps
│   ├── Footer.tsx          # Footer
│   ├── AnimationProvider.tsx # IntersectionObserver (Client)
│   ├── Lightbox.tsx        # Xem ảnh phóng to
│   └── ui/
│       ├── Counter.tsx     # Animated counter
│       └── ScrollIndicator.tsx
└── lib/
    ├── data.ts             # Dữ liệu thực đơn, testimonials, gallery
    └── hooks.ts            # Custom hooks (useInView)
```

---

## 🚀 Chạy dự án

```bash
# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

---

## 📦 Scripts

| Lệnh | Mô tả |
|---|---|
| `npm run dev` | Chạy dev server (localhost:3000) |
| `npm run build` | Build production |
| `npm run start` | Chạy production build |
| `npm run lint` | Kiểm tra linting |

---

## 📞 Thông tin quán

| | |
|---|---|
| **Địa chỉ** | QL55, TT.Đất Đỏ, Bà Rịa - Vũng Tàu |
| **Điện thoại** | [0772 818 172](tel:0772818172) |
| **Giờ mở cửa** | 6:00 – 22:00, hàng ngày |
| **Website** | [comtammatuu.vn](https://comtammatuu.vn) |
