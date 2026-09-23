export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
      <section className="grid gap-12 py-8 lg:grid-cols-2 lg:items-center lg:py-16">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#13183d] md:text-5xl lg:text-[3.5rem]">
            Maximize skill, minimize budget
          </h1>
          <p className="max-w-md text-lg leading-8 text-[#83869a]">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <a
            href="#"
            className="rounded-full bg-gradient-to-b from-[#ff864b] to-[#ff5a5a] px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
