import { useState } from 'react'

const navLinks = [
  { label: 'Brands', href: '#brands' },
  { label: 'Employer brands', href: '#employer-brands' },
  { label: 'Marketing Studio', href: '#marketing-studio' },
  { label: 'Work', href: '#work' },
]

const MobileLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="py-3 text-lg font-medium tracking-wide transition-colors hover:text-accent"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="relative z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <div className="text-left leading-tight">
            <span className="font-display text-xl font-semibold text-navy">
              morres & company
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Creative Marketing Agency
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-slate-600 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
          <div className="relative flex items-center gap-1 text-slate-600">
            <a
              href="#about"
              className="flex items-center gap-1 transition-colors hover:text-navy"
            >
              About Morres
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-slate-600"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>

        <div className="hidden lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-navy shadow-[0_10px_25px_rgba(247,211,84,0.35)] transition hover:bg-accentDark"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden"
          onClick={toggleMenu}
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
            <path
              d="M2 2H26"
              stroke="#0F2232"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M2 10H26"
              stroke="#0F2232"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M2 18H26"
              stroke="#0F2232"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-navy/95 px-6 py-8 text-white transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <div className="flex items-center justify-between">
            <div className="text-left leading-tight text-white/80">
              <span className="font-display text-xl font-semibold text-white">
                morres & company
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.3em]">
                Creative Marketing Agency
              </span>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={toggleMenu}
              className="text-white/80 transition hover:text-white"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path
                  d="M6 6L20 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 6L6 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-12 flex flex-col">
            {navLinks.map((link) => (
              <MobileLink key={link.label} href={link.href} onClick={closeMenu}>
                {link.label}
              </MobileLink>
            ))}
            <MobileLink href="#about" onClick={closeMenu}>
              About Morres
            </MobileLink>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-navy shadow-[0_10px_30px_rgba(247,211,84,0.35)] transition hover:bg-accentDark"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}
    </header>
  )
}

