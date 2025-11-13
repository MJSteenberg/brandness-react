import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Brands', href: '#brands', type: 'hash' },
  { label: 'Employer brands', href: '#employer-brands', type: 'hash' },
  { label: 'Marketing Studio', href: '#marketing-studio', type: 'hash' },
  { label: 'Work', href: '#work', type: 'hash' },
  { label: 'Fonts', href: '/fonts', type: 'route' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showFloatingFlag, setShowFloatingFlag] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowFloatingFlag(scrollY > 200)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const closeMenu = () => setIsMenuOpen(false)

  const handleScrollToHash = (hash) => {
    if (!hash) return
    const performScroll = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/', { replace: false })
      setTimeout(performScroll, 200)
    } else {
      performScroll()
    }
  }

  return (
    <header className="relative z-[1000]">
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 transition-all duration-500 lg:px-8 lg:py-6 ${
          showFloatingFlag ? 'pointer-events-none opacity-0 -translate-y-6' : 'opacity-100 translate-y-0'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 text-left leading-tight">
          <div className="text-left leading-tight">
            <span className="font-display text-xl font-semibold text-navy">
              brandness.
            </span>
            <span className="block text-xs font-semibold text-slate-500">
              Cultivating Digital Growth
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navLinks.map((link) => (
            link.type === 'route' ? (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-navy ${
                    isActive ? 'text-navy' : 'text-slate-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <Link
                key={link.label}
                to={`/${link.href}`}
                className="relative text-slate-600 transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            )
          ))}
          <div className="relative flex items-center gap-1 text-slate-600">
            <a
              href="#about"
              className="flex items-center gap-1 transition-colors hover:text-navy"
            >
              About brandness.
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
        className={`fixed inset-x-0 top-4 z-[1000] flex justify-center transition-all duration-500 ease-out ${
          showFloatingFlag
            ? 'pointer-events-auto opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-6'
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/95 px-6 py-3 shadow-[0_18px_45px_rgba(15,34,50,0.08)] backdrop-blur">
          <Link to="/" className="flex items-center gap-2 text-left leading-tight">
            <div className="text-left leading-tight">
              <span className="font-display text-xl font-semibold text-navy">brandness.</span>
              <span className="block text-xs font-semibold text-slate-500">
                Cultivating Digital Growth
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              link.type === 'route' ? (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className={({ isActive }) =>
                    `relative transition-colors hover:text-navy ${
                      isActive ? 'text-navy' : 'text-slate-600'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                <Link
                  key={link.label}
                  to={`/${link.href}`}
                  className="relative text-slate-600 transition-colors hover:text-navy"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="relative flex items-center gap-1 text-slate-600">
              <a
                href="#about"
                className="flex items-center gap-1 transition-colors hover:text-navy"
              >
                About brandness.
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
              <path d="M2 2H26" stroke="#0F2232" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 10H26" stroke="#0F2232" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 18H26" stroke="#0F2232" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[995] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          />

          <div className="fixed inset-0 z-[1000] bg-white text-navy lg:hidden">
            <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
              <div className="flex items-center justify-between">
                <div className="text-left leading-tight text-navy">
                  <span className="font-display text-xl font-semibold text-navy">
                    brandness.
                  </span>
                  <span className="block text-xs font-semibold text-slate-500">
                    Cultivating Digital Growth
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={toggleMenu}
                  className="text-navy/60 transition hover:text-navy"
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

              <nav className="mt-12 flex flex-1 flex-col gap-7 text-2xl font-medium text-navy">
                {[...navLinks, { label: 'About brandness.', href: '#about', type: 'hash' }].map(
                  (link) => (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => {
                        closeMenu()
                        if (link.type === 'route') {
                          navigate(link.href)
                        } else {
                          handleScrollToHash(link.href)
                        }
                      }}
                      className="text-left transition hover:text-accent"
                    >
                      {link.label}
                    </button>
                  ),
                )}
              </nav>

              <div className="mt-12 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu()
                    handleScrollToHash('#contact')
                  }}
                  className="w-full rounded-full bg-accent px-6 py-3 text-base font-semibold text-navy shadow-[0_10px_30px_rgba(247,211,84,0.35)] transition hover:bg-accentDark"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

