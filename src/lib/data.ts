/* ─────────────────────────────────────────────
   DATA & TYPES — Cơm Tấm Má Tư
   Tập trung toàn bộ data constants tại đây
───────────────────────────────────────────── */

// ── TypeScript Types ──────────────────────

export interface MenuItemEntry {
    name: string;
    price: string;
    tag?: string;
}

export interface MenuGroup {
    title: string;
    description?: string;
    img: string | null;
    basePrice: string | null;
    items: MenuItemEntry[];
}

export interface SideItem {
    name: string;
    price: string;
}

export interface DrinkOption {
    name: string;
    price: string;
}

export interface BaseOption {
    id: string;
    name: string;
    price: number;
    img: string;
    tag: string;
}

export interface ToppingOption {
    id: string;
    name: string;
    price: number;
    emoji: string;
}

export interface GalleryImage {
    src: string;
    alt: string;
    span: string;
}

export interface Testimonial {
    name: string;
    role: string;
    quote: string;
    rating: number;
}

// ── Menu Data ─────────────────────────────

export const menuGroups: MenuGroup[] = [
    {
        title: "Cơm Sườn Cốt Lết",
        description: "Sườn mềm nướng than hoa thơm lừng bề mặt xém cạnh, chuẩn vị Sài Thành.",
        img: "/images/com_suon_cot_let.webp",
        basePrice: "35.000₫",
        items: [
            { name: "+ Bì", price: "42.000₫" },
            { name: "+ Chả", price: "42.000₫" },
            { name: "+ Trứng ốp la", price: "40.000₫" },
            // { name: "+ Bì, Chả, Trứng", price: "54.000₫", tag: "Full" },
        ],
    },
    {
        title: "Cơm Sườn Cây",
        description: "Bẹ sườn nguyên cây thịt dày, cắn ngập vị đậm đà cùng lớp mỡ béo ngậy xen kẽ.",
        img: "/images/com_suon_cay.webp",
        basePrice: "40.000₫",
        items: [
            { name: "+ Bì", price: "47.000₫" },
            { name: "+ Chả", price: "47.000₫" },
            { name: "+ Trứng ốp la", price: "45.000₫" },
            // { name: "+ Bì, Chả, Trứng", price: "59.000₫", tag: "Full" },
        ],
    },
    {
        title: "Cơm Tấm",
        description: "Hạt tấm tơi xốp truyền thống rưới mỡ hành, hòa quyện cùng nước mắm chua ngọt.",
        img: null,
        basePrice: null,
        items: [
            { name: "Cơm tấm Bì", price: "20.000₫" },
            { name: "Cơm tấm Chả", price: "20.000₫" },
            { name: "Cơm tấm Trứng ốp la", price: "20.000₫" },
        ],
    },
];

export const sideItems: SideItem[] = [
    { name: "Chả chưng", price: "7.000₫" },
    { name: "Bì heo", price: "7.000₫" },
    { name: "Trứng ốp la", price: "5.000₫" },
    { name: "Cơm thêm", price: "5.000₫" },
];

export const drinkOptions: DrinkOption[] = [
    { name: "Nước ngọt", price: "15.000₫" },
    { name: "Nước cam", price: "15.000₫" },
    { name: "Rau má sữa", price: "15.000₫" },
    { name: "Trà tắc", price: "15.000₫" },
    { name: "Rau má", price: "10.000₫" },
    { name: "Nước suối", price: "10.000₫" },
    { name: "Trà đá", price: "2.000₫" },
];

export const baseOptions: BaseOption[] = [
    {
        id: "suon",
        name: "Cơm sườn cốt lết",
        price: 35000,
        img: "/images/com_suon_cot_let.webp",
        tag: "Bestseller",
    },
    {
        id: "suoncay",
        name: "Cơm sườn cây",
        price: 40000,
        img: "/images/com_suon_cay.webp",
        tag: "Đặc biệt",
    },
];

export const toppingOptions: ToppingOption[] = [
    { id: "bi", name: "Bì heo", price: 7000, emoji: "🥩" },
    { id: "cha", name: "Chả chưng", price: 7000, emoji: "🍖" },
    { id: "trung", name: "Trứng ốp la", price: 5000, emoji: "🍳" },
    { id: "com_them", name: "Cơm thêm", price: 5000, emoji: "🍚" },
];

// ── Gallery Data ──────────────────────────

export const galleryImages: GalleryImage[] = [
    {
        src: "/images/space-1.webp",
        alt: "Toàn cảnh không gian quán Cơm tấm Má Tư phong cách Indochine",
        span: "col-span-2 row-span-2",
    },
    { src: "/images/space-2.webp", alt: "Khu vực bàn ăn với đèn lồng đỏ truyền thống", span: "" },
    { src: "/images/space-3.webp", alt: "Góc trang trí nội thất gỗ ấm cúng", span: "" },
    { src: "/images/space-5.webp", alt: "Không gian ngoài trời xanh mát", span: "" },
    { src: "/images/space-6.webp", alt: "Chi tiết trang trí Indochine hoài cổ", span: "" },
    { src: "/images/space-7.webp", alt: "Khu vực quầy phục vụ và bếp mở", span: "col-span-2" },
];

// ── Testimonials Data ──────────────────────

export const testimonials: Testimonial[] = [
    {
        name: "Chị Ngọc Hân",
        role: "Khách hàng thân thiết",
        quote:
            "Cơm tấm Má Tư mang lại hương vị đậm đà của Sài Gòn ngày xưa. Sườn rim ngọt vừa miệng, chả trứng béo ngậy. Không gian quán rất đẹp và ấm cúng!",
        rating: 5,
    },
    {
        name: "Anh Minh Tuấn",
        role: "Food Blogger",
        quote:
            "Đây là quán cơm tấm ngon nhất mà tôi từng thử ở Bà Rịa. Phong cách Indochine rất độc đáo, món ăn truyền thống nhưng cách trình bày hiện đại.",
        rating: 5,
    },
    {
        name: "Gia đình anh Phúc",
        role: "Khách quen hàng tuần",
        quote:
            "Cả gia đình tôi đều thích đến đây vào cuối tuần. Đồ ăn ngon, giá cả hợp lý, phục vụ nhiệt tình. Không gian rộng rãi, phù hợp cho gia đình.",
        rating: 5,
    },
];

// ── Nav Links ─────────────────────────────

export const navLinks = [
    { label: "Câu chuyện", href: "#cau-chuyen" },
    { label: "Thực đơn", href: "#thuc-don" },
    { label: "Không gian", href: "#khong-gian" },
    { label: "Cảm nhận", href: "#cam-nhan" },
    { label: "Liên hệ", href: "#footer" },
];
