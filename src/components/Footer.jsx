const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '\uf0e1' },
  { label: 'Instagram', href: 'https://instagram.com', icon: '\uf16d' },
  { label: 'Facebook', href: 'https://facebook.com', icon: '\uf09a' },
]

const SocialIcon = ({ label, icon }) => (
  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-lg text-white">
    <span aria-hidden className="font-[FontAwesomeBrands]">{icon}</span>
    <span className="sr-only">{label}</span>
  </span>
)

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#031a5c] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold">
              Let’s make your brand irresistible.
            </h3>
            <div className="space-y-1 text-base leading-relaxed text-white/80">
              <a
                href="mailto:info@brandness.co.za"
                className="block text-lg font-medium text-white hover:text-accent"
              >
                info@brandness.co.za
              </a>
              <a
                href="tel:+31403302148"
                className="block text-lg font-medium text-white hover:text-accent"
              >
                +31 (0)85 013 32 48
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:-translate-y-0.5 hover:text-accent"
                >
                  <SocialIcon label={social.label} icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Our locations
            </h4>
            <ul className="mt-6 space-y-4 text-base text-white/80">
              <li>
                <span className="font-semibold text-white">Maastricht</span> –
                Voltstraat 66
              </li>
              <li>
                <span className="font-semibold text-white">Eindhoven</span> –
                Stratumsedijk 348
              </li>
              <li>
                <span className="font-semibold text-white">Nijmegen</span> –
                Koopstraten 23
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase text-white/70">
              Proud partner of
            </h4>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 shadow-inner">
                Leadinfo
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 shadow-inner">
                BNO Member
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex sm:items-center sm:justify-between">
          <p>©2025 brandness. All rights reserved.</p>
          <div className="mt-3 flex gap-6 sm:mt-0">
            <a href="#privacy" className="hover:text-accent">
              Privacy policy
            </a>
            <a href="#cookies" className="hover:text-accent">
              Cookies
            </a>
            <a href="#terms" className="hover:text-accent">
              General terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

