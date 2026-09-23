import Image from "next/image";
import { Button } from "./button";

export function Header() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-[1110px] items-center justify-between px-6 py-6 md:px-10 lg:px-0">
      <a href="#" aria-label="skilled home">
        <Image src="/icons/logo-dark.svg" alt="skilled" width={112} height={29} />
      </a>
      <Button variant="navy" href="#courses">
        Get Started
      </Button>
    </header>
  );
}
