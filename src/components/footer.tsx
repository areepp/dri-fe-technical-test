import Image from "next/image";
import { Button } from "./button";

export function Footer() {
  return (
    <footer className="bg-navy">
      <div className="mx-auto flex w-full max-w-[1110px] items-center justify-between px-6 py-11 md:px-10 lg:px-0">
        <Image src="/icons/logo-light.svg" alt="skilled" width={112} height={29} />
        <Button variant="blue-pink" href="#">
          Get Started
        </Button>
      </div>
    </footer>
  );
}
