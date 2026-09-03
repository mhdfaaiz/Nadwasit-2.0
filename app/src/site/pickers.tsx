import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { BRANCHES, MENUS, waHref, type MenuEntry } from "./data";

/**
 * Two choosers, one shell.
 *
 * Ordering and menus are per branch, so neither CTA can be a plain link to the
 * head office. Both open a dialog that asks which restaurant first, then hands
 * off: WhatsApp for ordering, the branch's own menu pages for the menu.
 *
 * The CTAs live inside a module constant (the scroll journey scenes), so they
 * cannot receive an open handler as a prop. They dispatch a document event
 * instead and this component, mounted once, listens for it.
 */

export type PickerKind = "order" | "menu";

export const PICKER_EVENT = "nw:picker";

export function openPicker(kind: PickerKind) {
  if (typeof document === "undefined") return;
  document.dispatchEvent(new CustomEvent(PICKER_EVENT, { detail: kind }));
}

interface ModalProps {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ title, subtitle, onClose, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="nw-modal" role="presentation">
      <button
        aria-label="Close"
        className="nw-modal__scrim"
        onClick={onClose}
        type="button"
      />
      <div
        aria-labelledby="nw-modal-title"
        aria-modal="true"
        className="nw-modal__panel"
        ref={panelRef}
        role="dialog"
        tabIndex={-1}
      >
        <header className="nw-modal__head">
          <div>
            <p className="nw-modal__eyebrow">{subtitle}</p>
            <h2 className="nw-modal__title" id="nw-modal-title">
              {title}
            </h2>
          </div>
          <button
            aria-label="Close"
            className="nw-modal__close"
            onClick={onClose}
            type="button"
          >
            <svg aria-hidden="true" fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </header>
        <div className="nw-modal__body">{children}</div>
      </div>
    </div>
  );
}

function OrderPicker({ onClose }: { onClose: () => void }) {
  return (
    <Modal
      onClose={onClose}
      subtitle="Order on WhatsApp"
      title="Which branch is closest?"
    >
      <ul className="nw-picklist">
        {BRANCHES.filter((branch) => !branch.head).map((branch) => (
          <li key={branch.id}>
            <a
              className="nw-pick"
              href={waHref(branch.phoneHref)}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="nw-pick__main">
                <span className="nw-pick__name">{branch.name}</span>
                <span className="nw-pick__where">
                  {branch.area}, {branch.emirate}
                </span>
              </span>
              <span className="nw-pick__side">
                <span className="nw-pick__meta">{branch.phone}</span>
                <span className="nw-pick__meta nw-pick__meta--dim">{branch.hours}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  );
}

function MenuPicker({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<MenuEntry>(MENUS[0]);
  const pages = Array.from({ length: active.pages }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );

  return (
    <Modal onClose={onClose} subtitle="Food menu" title="Choose your restaurant">
      <div className="nw-menutabs" role="tablist">
        {MENUS.map((entry) => (
          <button
            aria-selected={entry.id === active.id}
            className="nw-menutab"
            key={entry.id}
            onClick={() => setActive(entry)}
            role="tab"
            type="button"
          >
            <span className="nw-menutab__name">{entry.name}</span>
            <span className="nw-menutab__where">{entry.where}</span>
          </button>
        ))}
      </div>

      <div className="nw-menupages">
        {pages.map((page, index) => (
          <img
            alt={`${active.name} menu, page ${index + 1} of ${active.pages}`}
            className="nw-menupage"
            key={`${active.id}-${page}`}
            loading={index < 2 ? "eager" : "lazy"}
            src={`/menus/${active.file}/p-${page}.jpg`}
          />
        ))}
      </div>
    </Modal>
  );
}

/** Mounted once per page. Owns which chooser, if any, is open. */
export function Pickers() {
  const [open, setOpen] = useState<PickerKind | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const onOpen = (event: Event) => {
      const detail = (event as CustomEvent<PickerKind>).detail;
      if (detail === "order" || detail === "menu") setOpen(detail);
    };
    document.addEventListener(PICKER_EVENT, onOpen);
    return () => document.removeEventListener(PICKER_EVENT, onOpen);
  }, []);

  if (open === "order") return <OrderPicker onClose={close} />;
  if (open === "menu") return <MenuPicker onClose={close} />;
  return null;
}
