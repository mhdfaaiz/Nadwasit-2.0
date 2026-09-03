/**
 * Bespoke chrome. Every CTA is its own component with its own interaction
 * identity, per the design brief's CTA inventory. There is deliberately no
 * shared button utility on this site.
 */

import type { ReactNode } from "react";

import { openPicker } from "./pickers";

/**
 * The real Nad Wasit marks, taken from the brand files (img/Logo.png and
 * img/log.png). These are the client's own artwork: nothing here is redrawn.
 */

/** The amber capsule with the N and W monogram. */
export function NadwasitMark({ className }: { className?: string }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      decoding="async"
      src="/assets/brand/logo-mark.png"
    />
  );
}

/** The horizontal lockup: capsule plus the NAD WASIT wordmark. */
export function NadwasitLockup({ className }: { className?: string }) {
  return (
    <img
      alt="Nad Wasit"
      className={className}
      decoding="async"
      src="/assets/brand/logo-wordmark.png"
    />
  );
}

interface OrderCtaProps {
  small?: boolean;
  label?: string;
}

/**
 * The one order label on the page. Solid amber slab, the label mask slides up
 * on hover and a second copy rises into place.
 *
 * It opens the branch chooser rather than linking straight out: every branch
 * has its own WhatsApp number, so a single hard coded link would send everyone
 * to the head office.
 */
export function OrderCta({ small, label = "Order on WhatsApp" }: OrderCtaProps) {
  return (
    <button
      className={small ? "cta-order cta-order--sm" : "cta-order"}
      onClick={() => openPicker("order")}
      type="button"
    >
      <span aria-hidden="true" className="cta-order__slide">
        <span>{label}</span>
        <span>{label}</span>
      </span>
      <span className="sr-only-nw">{label}</span>
    </button>
  );
}

/** Hairline outline, cobalt wipes in from the left, arrow steps right. */
export function BranchCta({ href = "#branches" }: { href?: string }) {
  return (
    <a className="cta-branch" href={href}>
      Find a branch
      <svg
        aria-hidden="true"
        className="cta-branch__arrow"
        fill="none"
        height="10"
        viewBox="0 0 16 10"
        width="16"
      >
        <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </a>
  );
}

/** Mono text, underline draws from the left. No box, no fill. */
export function CallCta({ href, children }: { href: string; children: string }) {
  return (
    <a className="cta-call" href={href}>
      {children}
    </a>
  );
}

/** Circular ring around an arrow that rotates 45 degrees on hover. */
export function MenuCta({ label = "See the menu" }: { label?: string }) {
  return (
    <button className="cta-menu" onClick={() => openPicker("menu")} type="button">
      <span className="cta-menu__ring">
        <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 14 14" width="14">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </span>
      {label}
    </button>
  );
}

/**
 * The service glyph set: one shared 1.6 stroke, one 24 grid, one corner
 * language, so the eight read as a single family.
 */
export function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    balloon: (
      <>
        <path d="M12 3.5a5 5 0 0 1 5 5c0 3.4-2.6 6.2-5 6.2S7 11.9 7 8.5a5 5 0 0 1 5-5Z" />
        <path d="M12 14.7v2.1M10.4 18.9c.9-.6 2.3-.6 3.2 0-.9.6-2.3.6-3.2 0Z" />
        <path d="M12 20.5v-1.6" />
      </>
    ),
    briefcase: (
      <>
        <path d="M3.5 8.5h17v11h-17z" />
        <path d="M9 8.5V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5" />
        <path d="M3.5 13.2h17" />
      </>
    ),
    chef: (
      <>
        <path d="M7.5 12.5a3.5 3.5 0 1 1 1.4-6.7 3.6 3.6 0 0 1 6.2 0 3.5 3.5 0 1 1 1.4 6.7z" />
        <path d="M7.5 12.5v6h9v-6" />
        <path d="M7.5 16h9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5.2l3.4 2" />
      </>
    ),
    fire: (
      <>
        <path d="M12 3.5c3.2 3 4.8 5.5 4.8 7.6a4.8 4.8 0 0 1-9.6 0c0-2.1 1.6-4.6 4.8-7.6Z" />
        <path d="M12 20.5c-3.6 0-6.5-.9-6.5-2s2.9-2 6.5-2 6.5.9 6.5 2-2.9 2-6.5 2Z" />
      </>
    ),
    leaf: (
      <>
        <path d="M4.5 19.5C3 13.5 7 5.5 19.5 4.5c1 12.5-7 16.5-13 15Z" />
        <path d="M4.5 19.5 13 11" />
      </>
    ),
    scooter: (
      <>
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
        <path d="M9 17h6l-2.2-9H9.8" />
        <path d="M14.5 8h3.2l1.3 9" />
      </>
    ),
    tray: (
      <>
        <path d="M3 18.5h18" />
        <path d="M5 15.5a7 7 0 0 1 14 0z" />
        <path d="M12 8.5v-2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="22"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      width="22"
    >
      {paths[name] ?? paths.fire}
    </svg>
  );
}
