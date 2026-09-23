import { Header } from "@/components/header";
import { Hero } from "@/app/_components/home/hero";
import { Courses } from "@/app/_components/home/courses";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
      </main>
      <Footer />
    </>
  );
}
