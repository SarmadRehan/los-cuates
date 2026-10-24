"use client";

import { createContext, useCallback, useContext, useRef } from "react";

import { cuates, phoneHref } from "@/data/cuates";

import { Logo } from "./Logo";

const OrderDialogContext = createContext<(() => void) | null>(null);

/** Renders the single "ordering coming soon" panel shared by every order button. */
export function OrderDialogProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = useCallback(() => dialogRef.current?.showModal(), []);
  const close = () => dialogRef.current?.close();

  return (
    <OrderDialogContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="order-dialog-title"
        aria-describedby="order-dialog-description"
        className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl border border-pink/40 bg-panel p-0 text-snow shadow-2xl backdrop:bg-night/80 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          // Clicks on the backdrop land on the <dialog> itself, not its content.
          if (event.target === event.currentTarget) close();
        }}
      >
        <div aria-hidden="true" className="papel h-5" />
        <div className="p-7 text-center sm:p-8">
          <Logo className="mx-auto w-48" />
          <p className="mt-5 inline-block rounded-full bg-neon px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-night">
            Coming soon
          </p>
          <h2 id="order-dialog-title" className="mt-3 font-sign text-3xl text-pink">
            Order Online
          </h2>
          <p id="order-dialog-description" className="mt-3 leading-relaxed text-fog">
            Online ordering isn&apos;t live yet. For now, call {cuates.phone}.
          </p>
          <a
            href={phoneHref(cuates.phone)}
            className="mt-6 block rounded-full bg-pink px-6 py-3.5 text-lg font-bold text-night transition-colors hover:bg-neon"
          >
            Call {cuates.phone}
          </a>
          <button
            type="button"
            autoFocus
            onClick={close}
            className="mt-5 text-sm font-bold text-fog underline underline-offset-4 hover:text-snow"
          >
            Close
          </button>
        </div>
      </dialog>
    </OrderDialogContext.Provider>
  );
}

type OrderButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function OrderButton({ className, children }: OrderButtonProps) {
  const openDialog = useContext(OrderDialogContext);
  if (!openDialog) throw new Error("OrderButton must be rendered inside OrderDialogProvider");

  return (
    <button type="button" aria-haspopup="dialog" className={className} onClick={openDialog}>
      {children}
    </button>
  );
}
