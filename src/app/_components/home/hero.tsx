import Image, { type StaticImageData } from "next/image";
import { cva } from "class-variance-authority";
import { AnimatedCount } from "./count-up";
import { Button } from "@/components/button";
import heroDesktop from "@/assets/image-hero-desktop-new.webp";
import heroMobile from "@/assets/image-hero-mobile-new.webp";

const statCardVariants = cva(
  "absolute whitespace-nowrap rounded-[10px] bg-white shadow-[0_25px_50px_-12px_rgba(19,24,63,0.15)]",
  {
    variants: {
      compact: {
        true: "px-4 py-3",
        false: "px-6 py-5",
      },
    },
    defaultVariants: {
      compact: false,
    },
  },
);

const statLabelVariants = cva("font-bold text-grey", {
  variants: {
    compact: {
      true: "text-xs",
      false: "text-base leading-7",
    },
  },
  defaultVariants: {
    compact: false,
  },
});
const statValueVariants = cva("font-extrabold text-navy", {
  variants: {
    compact: {
      true: "text-[28px] leading-8",
      false: "text-[40px] leading-[51px]",
    },
  },
  defaultVariants: {
    compact: false,
  },
});

type StatCardProps = {
  label: string;
  value: number;
  suffix?: string;
  separator?: string;
  className: string;
  compact?: boolean;
};

function StatCard({
  label,
  value,
  suffix,
  separator,
  className,
  compact = false,
}: StatCardProps) {
  return (
    <div className={statCardVariants({ compact, className })}>
      <p className={statLabelVariants({ compact })}>{label}</p>
      <p>
        <AnimatedCount
          className={statValueVariants({ compact })}
          end={value}
          separator={separator}
          suffix={suffix}
        />
      </p>
    </div>
  );
}
function DesktopComposition({ image }: { image: StaticImageData }) {
  return (
    <div className="relative h-[938px] w-[1046px]">
      <div
        aria-hidden
        className="absolute top-[308px] left-[90px] h-[317px] w-[993px] -rotate-45 rounded-full bg-gradient-to-r from-gradient-pink to-gradient-blue"
      />
      <Image
        src={image}
        alt=""
        priority
        width={317}
        height={560}
        className="absolute top-[313px] left-[174px]"
      />
      <StatCard label="Members" value={29} suffix="k" className="top-[420px] left-[453px]" />
      <StatCard
        label="Course hours"
        value={1451}
        separator=","
        className="top-[656px] left-[57px]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1110px] px-6 md:px-10 lg:px-0">
      <div className="grid gap-10 py-6 text-center md:py-8 lg:min-h-[720px] lg:grid-cols-2 lg:items-center lg:gap-0 lg:py-0 lg:text-left">
        <div className="flex flex-col items-center gap-6 lg:-mt-6 lg:items-start lg:gap-8">
          <h1 className="max-w-[520px] text-[2.5rem] font-extrabold leading-[51px] text-navy lg:text-[3.5rem] lg:leading-[70px]">
            Maximize skill, minimize budget
          </h1>
          <p className="max-w-[30rem] text-base font-medium leading-7 text-grey lg:text-lg">
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
          <Button variant="orange-pink" size="lg" href="#courses">
            Get Started
          </Button>
        </div>

        <div className="relative hidden self-start md:block lg:hidden">
          <div className="flex h-[650px] w-full justify-center overflow-visible">
            <div className="origin-top scale-[0.68]">
              <DesktopComposition image={heroDesktop} />
            </div>
          </div>
        </div>

        <div className="relative hidden self-start lg:block">
          <div className="pointer-events-none absolute top-[-212px] left-[14px]">
            <DesktopComposition image={heroDesktop} />
          </div>
        </div>

        <div className="relative mx-auto h-[390px] w-full max-w-[360px] md:hidden">
          <div
            aria-hidden
            className="absolute top-[70px] left-[86px] h-[145px] w-[420px] -rotate-45 rounded-full bg-gradient-to-r from-gradient-pink to-gradient-blue"
          />
          <Image
            src={heroMobile}
            alt=""
            priority
            width={253}
            height={253}
            className="absolute top-[36px] left-1/2 -translate-x-1/2"
          />
          <StatCard
            compact
            label="Members"
            value={29}
            suffix="k"
            className="top-[55px] right-[4px]"
          />
          <StatCard
            compact
            label="Course hours"
            value={1451}
            separator=","
            className="top-[220px] left-0"
          />
        </div>
      </div>
    </section>
  );
}
