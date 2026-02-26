import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";

// Tối ưu hoá: Lazy load các component không nằm ở màn hình đầu tiên (Above the fold)
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Lightbox = dynamic(() => import("@/components/Lightbox"));
const BookingModal = dynamic(() => import("@/components/BookingModal"));

export default function Home() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth font-serif">
      <AnimationProvider />
      <Navbar />

      <Hero />

      <About />

      <Menu />

      <Gallery />

      <Testimonials />

      <Footer />

      <BookingModal />
      <Lightbox />
    </main>
  );
}
