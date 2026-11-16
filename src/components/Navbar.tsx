'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXmark, FaPhone } from 'react-icons/fa6';

const leftNavLinks = [
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
];

const rightNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

const allNavLinks = [...leftNavLinks, ...rightNavLinks];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const pathname = usePathname();
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const openMenu = () => {
    setIsRendered(true);
    setIsOpen(true);
  };

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      toggleBtnRef.current?.focus();
    }
    setTimeout(() => {
      setIsRendered(false);
    }, 350);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu(true);
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('stop-scroll');
    } else {
      document.body.classList.remove('stop-scroll');
    }

    return () => {
      document.body.classList.remove('stop-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const firstLink = drawerRef.current?.querySelector<HTMLElement>('a');
    firstLink?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu(true);
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = [
          ...(toggleBtnRef.current ? [toggleBtnRef.current] : []),
          ...Array.from(
            drawerRef.current.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled])'
            )
          ),
        ];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-[9999]">
      <nav
        aria-label="Main Navigation"
        className="relative block md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 max-w-[1800px] mx-auto px-4 md:px-6"
      >
        {/* Mobile Hamburger / Close Button */}
        <button
          ref={toggleBtnRef}
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          className="md:hidden absolute top-1/2 left-2 -translate-y-1/2 min-w-11 min-h-11 inline-flex items-center justify-center text-[1.35rem] text-[#303030] hover:text-[#c44d2b] transition-colors bg-transparent border-none cursor-pointer z-10"
        >
          {isOpen ? (
            <FaXmark aria-hidden="true" className="w-5 h-5 block" />
          ) : (
            <FaBars aria-hidden="true" className="w-5 h-5 block" />
          )}
        </button>

        {/* Mobile Quick-Call Icon */}
        <a
          href="tel:+13239331212"
          aria-label="Call Sun Wellness Acupuncture at (323) 933-1212"
          className="md:hidden absolute top-1/2 right-2 -translate-y-1/2 min-w-11 min-h-11 inline-flex items-center justify-center text-[#303030] hover:text-[#c44d2b] transition-colors z-10"
        >
          <FaPhone aria-hidden="true" className="w-4 h-4 block" />
        </a>

        {/* Desktop Left Column */}
        <ul className="hidden md:flex list-none p-0 m-0 justify-evenly items-center">
          {leftNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="font-baloo text-center">
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 tracking-[0.1rem] no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#c44d2b] after:transition-transform after:duration-300 ${
                    isActive
                      ? 'text-[#b54524] font-semibold after:scale-x-100'
                      : 'text-[#303030] hover:text-[#b54524] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Center Brand Title */}
        <div className="justify-self-center text-center py-3 md:py-4 px-12 md:px-4">
          <Link
            href="/"
            onClick={() => isOpen && closeMenu()}
            className="text-[#303030] no-underline inline-block group"
          >
            <span className="block font-berkshire font-normal text-[clamp(1.25rem,5.5vw,1.75rem)] md:text-[1.75rem] tracking-[0.05rem] m-0 transition-colors duration-300 group-hover:text-[#c44d2b]">
              Sun Wellness Acupuncture
            </span>
            <span className="block font-baloo font-normal text-[clamp(0.75rem,3.2vw,1rem)] md:text-[1rem] tracking-[0.15rem] m-0 text-[#303030]">
              Chinese Acupuncture &amp; Herbal Clinic
            </span>
          </Link>
        </div>

        {/* Desktop Right Column */}
        <ul className="hidden md:flex list-none p-0 m-0 justify-evenly items-center">
          {rightNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="font-baloo text-center">
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 tracking-[0.1rem] no-underline transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#c44d2b] after:transition-transform after:duration-300 ${
                    isActive
                      ? 'text-[#b54524] font-semibold after:scale-x-100'
                      : 'text-[#303030] hover:text-[#b54524] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="hidden lg:block font-baloo text-center">
            <a
              href="tel:+13239331212"
              className="group inline-flex items-center gap-2 rounded-full border border-[#c44d2b] px-3.5 py-1.5 text-sm text-[#303030] tracking-[0.05rem] no-underline transition-colors duration-300 hover:bg-[#c44d2b] hover:text-white"
            >
              <FaPhone
                aria-hidden="true"
                className="w-3 h-3 text-[#c44d2b] transition-colors group-hover:text-white"
              />
              <span>(323) 933-1212</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Drawer & Backdrop */}
      {isRendered && (
        <div
          onClick={() => closeMenu(true)}
          className="md:hidden fixed inset-x-0 top-full h-screen w-full overflow-hidden bg-black/50 z-[4]"
        >
          <nav
            id="mobile-navigation-drawer"
            ref={drawerRef}
            aria-label="Mobile Navigation"
            onClick={(e) => e.stopPropagation()}
            className={`bg-white w-full h-auto py-6 px-8 shadow-lg border-t border-gray-100 z-[5] ${
              isOpen ? 'slide-out' : 'slide-in'
            }`}
          >
            <ul className="list-none p-0 m-0 font-baloo flex flex-col gap-5">
              {allNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => closeMenu()}
                      aria-current={isActive ? 'page' : undefined}
                      className={`block text-[1.15rem] tracking-[0.08rem] no-underline transition-colors duration-200 ${
                        isActive
                          ? 'text-[#b54524] font-semibold'
                          : 'text-[#303030] hover:text-[#b54524]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 pt-5 border-t border-gray-200">
              <a
                href="tel:+13239331212"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#c44d2b] border-2 border-[#c44d2b] py-2.5 px-6 font-baloo font-semibold text-white tracking-[0.08rem] no-underline transition-colors duration-300 hover:bg-white hover:text-[#b54524]"
              >
                <FaPhone aria-hidden="true" className="w-3.5 h-3.5" />
                <span>Call (323) 933-1212</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
