import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseClass = "transition-transform duration-300 ease-out";

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={[baseClass, className].filter(Boolean).join(" ")}
      {...props}
    >
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={[baseClass, className].filter(Boolean).join(" ")}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={[baseClass, className].filter(Boolean).join(" ")}
      {...props}
    >
      <path d="M6.5 9.5H3.7V20h2.8V9.5zM5.1 4a1.65 1.65 0 100 3.3A1.65 1.65 0 005.1 4zM20.3 20h-2.8v-5.5c0-1.3-.5-2.2-1.7-2.2-1.1 0-1.7.7-2 1.5-.1.3-.1.6-.1.9V20h-2.8s.05-8.9 0-10.5h2.8v1.5c.4-.6 1.1-1.7 2.8-1.7 2 0 3.5 1.3 3.5 4.2V20z" />
    </svg>
  );
}
