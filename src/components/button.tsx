import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-block rounded-full px-8 text-center text-base font-bold text-white",
  {
    variants: {
      variant: {
        navy: "bg-navy transition-colors duration-300 hover:bg-purple",
        "orange-pink":
          "group relative overflow-hidden bg-gradient-to-b from-gradient-orange to-gradient-pink",
        "blue-pink":
          "group relative overflow-hidden bg-gradient-to-b from-gradient-blue to-gradient-pink",
      },
      size: {
        md: "py-3",
        lg: "py-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const buttonOverlayVariants = cva(
  "absolute inset-0 rounded-full bg-gradient-to-b opacity-0 transition-opacity duration-300 group-hover:opacity-100",
  {
    variants: {
      variant: {
        navy: "hidden",
        "orange-pink":
          "from-hover-gradient-start to-hover-gradient-end",
        "blue-pink": "from-hover-gradient-blue to-hover-gradient-end",
      },
    },
  },
);

type ButtonProps = Required<Pick<VariantProps<typeof buttonVariants>, "variant">> &
  Omit<VariantProps<typeof buttonVariants>, "variant"> & {
    href: string;
    children: React.ReactNode;
  };

export function Button({ variant, size, href, children }: ButtonProps) {
  return (
    <Link href={href} className={buttonVariants({ variant, size })}>
      <span
        aria-hidden
        className={buttonOverlayVariants({ variant })}
      />
      <span className="relative">{children}</span>
    </Link>
  );
}
