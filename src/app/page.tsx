import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";
import AnimationProvider from "@/components/AnimationProvider";

export default function Home() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth font-serif">
      <AnimationProvider />
      <Navbar />

      <Hero />

      <About />

      <Menu />

      <GalleryClient />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  );
}
