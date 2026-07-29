"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Home,
  Images,
  Layers,
  Menu,
  Phone,
  Shield,
  UserPlus,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/animations";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Always visible in desktop bar */
const PRIMARY_LINKS: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Users },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Our Clients", href: "/clients", icon: Briefcase },
  { label: "Gallery", href: "/gallery", icon: Images },
];

/** Overflow — More dropdown */
const MORE_LINKS: NavItem[] = [
  { label: "Recruitments", href: "/recruitments", icon: UserPlus },
  { label: "Our Strength", href: "/strength", icon: Shield },
  { label: "Careers", href: "/careers", icon: Briefcase },
  { label: "Contact Us", href: "/contact", icon: Phone },
];

const ALL_LINKS = [...PRIMARY_LINKS, ...MORE_LINKS];

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const moreActive = MORE_LINKS.some((l) => isActive(l.href));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0.82)",
          boxShadow: scrolled
            ? "0 8px 30px -12px rgba(26,80,110,0.18)"
            : "0 1px 0 rgba(26,80,110,0.06)",
          backdropFilter: "blur(18px)",
        }}
        transition={{ duration: 0.35 }}
        className="border-b border-ink/5"
      >
        <nav className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: easeOut }}
            className="flex shrink-0 items-center"
          >
            <Link href="/" className="block">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 400, damping: 18 },
                }}
              >
                <Image
                  src="/logo-amazepms.png"
                  alt="Amaze PMSPL Logo"
                  width={140}
                  height={76}
                  priority
                  className="h-11 w-auto object-contain sm:h-12"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop nav — primary + More */}
          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
            {PRIMARY_LINKS.map((link, i) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.18 + i * 0.04,
                    duration: 0.45,
                    ease: easeOut,
                  }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "group inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[12px] font-semibold tracking-wide transition-all duration-300 xl:gap-2 xl:px-3 xl:text-[13px]",
                      active
                        ? "bg-[#1a1a5c]/[0.08] text-[#1a1a5c]"
                        : "text-ink-soft/80 hover:bg-[#1a1a5c]/[0.05] hover:text-[#1a1a5c]"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 transition-colors duration-300 xl:h-4 xl:w-4",
                        active
                          ? "text-[#e89172]"
                          : "text-ink-soft/55 group-hover:text-[#e89172]"
                      )}
                      strokeWidth={2}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}

            {/* More dropdown */}
            <motion.li
              ref={moreRef}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45, ease: easeOut }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="menu"
                className={cn(
                  "group inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-[12px] font-semibold tracking-wide transition-all duration-300 xl:gap-2 xl:px-3 xl:text-[13px]",
                  moreOpen || moreActive
                    ? "bg-[#1a1a5c]/[0.08] text-[#1a1a5c]"
                    : "text-ink-soft/80 hover:bg-[#1a1a5c]/[0.05] hover:text-[#1a1a5c]"
                )}
              >
                More
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 transition-transform duration-300",
                    moreOpen && "rotate-180",
                    moreOpen || moreActive
                      ? "text-[#e89172]"
                      : "text-ink-soft/55 group-hover:text-[#e89172]"
                  )}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: easeOut }}
                    className="absolute right-0 top-[calc(100%+10px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-ink/8 bg-white py-2 shadow-[0_20px_50px_-18px_rgba(26,26,92,0.35)]"
                  >
                    {MORE_LINKS.map((link) => {
                      const active = isActive(link.href);
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          onClick={() => setMoreOpen(false)}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2.5 text-[13px] font-semibold transition-colors duration-200",
                            active
                              ? "bg-[#1a1a5c]/[0.06] text-[#1a1a5c]"
                              : "text-ink-soft hover:bg-[#1a1a5c]/[0.04] hover:text-[#1a1a5c]"
                          )}
                        >
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              active ? "text-[#e89172]" : "text-ink-soft/50"
                            )}
                            strokeWidth={2}
                          />
                          {link.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </ul>

          {/* CTA — xl+ */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.55, ease: easeOut }}
            className="hidden shrink-0 items-center gap-3 xl:flex"
          >
            <a
              href="tel:9908538137"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-ink-soft transition-colors hover:text-[#1a1a5c]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#e89172]" />
              99085 38137
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-white to-[#f8ebe5] px-4 py-2 text-[13px] font-bold text-[#1a1a5c] shadow-[0_8px_24px_-8px_rgba(232,145,114,0.35)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_12px_28px_-8px_rgba(26,26,92,0.3)]"
            >
              Get a Quote
              <ArrowUpRight className="h-3.5 w-3.5 text-[#e89172] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Mobile toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-sm lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile drawer — all links with icons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden border-b border-ink/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-[1400px] flex-col gap-0.5 px-4 py-4 sm:px-6">
              {ALL_LINKS.map((link, i) => {
                const Icon = link.icon;
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.28 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-300 hover:translate-x-1 hover:bg-[#1a1a5c]/[0.06]",
                        active ? "bg-[#1a1a5c]/[0.06] text-[#1a1a5c]" : "text-ink-soft"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          active ? "text-[#e89172]" : "text-ink-soft/50"
                        )}
                      />
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <a
                href="tel:9908538137"
                className="mt-2 flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-ink"
              >
                <Phone className="h-4 w-4 text-cyan" />
                99085 38137
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-cyan px-4 py-3 text-center text-sm font-bold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
