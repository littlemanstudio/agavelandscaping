import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <rect x="7.6" y="7.6" width="8.8" height="8.8" rx="2.6" />
      <circle cx="12" cy="12" r="2.3" />
      <circle cx="15.2" cy="8.8" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M13.8 9.2h-1.3c-.7 0-1 .3-1 1v1.3h2.2l-.3 2.1h-1.9v5.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path
        d="M9.3 8.6c.15-.35.3-.35.5-.35h.3c.15 0 .25 0 .4.3.15.3.45 1.05.45 1.15.05.1.05.15 0 .3-.05.1-.15.2-.25.3l-.25.25c-.1.1-.15.15-.05.3.15.3.5.8 1 1.25.6.5 1.05.7 1.2.75.15.05.25.05.3-.05l.3-.4c.1-.15.2-.15.3-.1l1 .45c.15.05.25.1.25.2.05.15.05.5-.1.8-.2.3-.8.5-1.2.5-.4 0-1-.1-2-.55-1.25-.65-2.15-1.85-2.25-2-.05-.1-.6-.75-.6-1.5 0-.65.35-1 .5-1.1Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
      {...props}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
