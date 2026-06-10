"use client";

import React from "react";
import Link from "next/link";
import { X, Instagram, Twitter } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

export default function MobileMenu() {
  const { isMenuOpen, closeMenu } = useCartStore();

  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    toast(`${platform} - Under Construction`, {
      description: "Will be available soon. Stay tuned!",
      duration: 3000,
    });
  };

  return (
    <>
      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] transition-opacity md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#050505] border-r border-zinc-900 z-[70] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col md:hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-900">
          <img
            src="/logo.png"
            alt="Driepe Logo"
            className="h-8 object-contain"
          />
          <button
            onClick={closeMenu}
            className="hover:rotate-90 transition-transform text-zinc-400 hover:text-white"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto flex flex-col p-8 gap-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-4xl font-black tracking-widest uppercase hover:text-zinc-400 transition-colors"
              style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}
            >
              HOME
            </Link>
            <Link
              href="/store"
              onClick={closeMenu}
              className="text-4xl font-black tracking-widest uppercase hover:text-zinc-400 transition-colors"
              style={{ fontFamily: "var(--font-koulen), Impact, sans-serif" }}
            >
              STORE
            </Link>
          </div>

          <div className="w-12 h-[2px] bg-zinc-800 my-2" />

          <div className="flex flex-col gap-6">
            <Link
              href="/size-guide"
              onClick={closeMenu}
              className="text-lg tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              SIZE GUIDE
            </Link>
            <Link
              href="/faq"
              onClick={closeMenu}
              className="text-lg tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              FAQ / SUPPORT
            </Link>
            <Link
              href="/shipping"
              onClick={closeMenu}
              className="text-lg tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              SHIPPING
            </Link>
            <Link
              href="/returns"
              onClick={closeMenu}
              className="text-lg tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              RETURNS
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-lg tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="p-8 border-t border-zinc-900 flex gap-6 items-center shrink-0">
          <button
            onClick={(e) => handleSocialClick(e, "Instagram")}
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Instagram - Coming Soon"
          >
            <Instagram size={24} />
          </button>
          <button
            onClick={(e) => handleSocialClick(e, "X (Twitter)")}
            className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="X - Coming Soon"
          >
            <Twitter size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
