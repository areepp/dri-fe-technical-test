"use client";

import { useSyncExternalStore } from "react";
import CountUp, { type CountUpProps } from "react-countup";

type AnimatedCountProps = Pick<
  CountUpProps,
  "className" | "end" | "separator" | "suffix"
>;

function formatInitialValue(end: number, separator = ",", suffix = "") {
  return `${String(end).replace(/\B(?=(\d{3})+(?!\d))/g, separator)}${suffix}`;
}

export function AnimatedCount({
  className,
  end,
  separator,
  suffix,
}: AnimatedCountProps) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const initialValue = formatInitialValue(end, separator, suffix);

  return (
    <span
      className={`${className} inline-block`}
      style={{ minWidth: `${initialValue.length}ch` }}
    >
      {isMounted ? (
        <CountUp
          duration={2}
          end={end}
          separator={separator}
          start={0}
          suffix={suffix}
        />
      ) : (
        initialValue
      )}
    </span>
  );
}
