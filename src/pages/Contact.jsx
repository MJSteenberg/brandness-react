const locations = [
  {
    city: 'Maastricht',
    address: 'Voltstraat 66',
    postalCode: '6224 EM Maastricht',
    mapUrl: 'https://maps.google.com/?q=Voltstraat+66+Maastricht',
  },
  {
    city: 'Eindhoven',
    address: 'Stratumsedijk 34B',
    postalCode: '5611 NE Eindhoven',
    mapUrl: 'https://maps.google.com/?q=Stratumsedijk+34B+Eindhoven',
  },
  {
    city: 'Nijmegen',
    address: 'Kaapstander 23',
    postalCode: '6541 EX Nijmegen',
    mapUrl: 'https://maps.google.com/?q=Kaapstander+23+Nijmegen',
  },
]

const inquiryTopics = [
  'Branding',
  'Campaigns',
  'Employer branding',
  'Short form video',
  'Social advertising',
  'Web support',
  'Other',
]

export default function Contact() {
  return (
    <div className="bg-[#FCF7EF] text-navy">
      <section className="bg-[#F7F2E9]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-start lg:gap-20 lg:px-8 lg:py-[112px]">
          <div className="lg:w-[38%]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">We’ll say hi first</p>
            <h1 className="mt-6 text-4xl font-display font-semibold text-navy sm:text-5xl lg:text-[54px]">
              Well, good morning!
            </h1>
            <span className="mt-5 block h-[3px] w-14 rounded-full bg-accent/60" />
          </div>

          <div className="flex flex-1 flex-col gap-8">
            <p className="text-base leading-relaxed text-charcoal/85 sm:text-lg">
              Do you have a question, comment, or just want to drop by for a chat? Fill out the form below and
              we’ll get back to you as soon as possible.
            </p>
            <div className="grid gap-6 text-base sm:grid-cols-2 sm:gap-8">
              <div>
                <p className="font-semibold text-navy">Email</p>
                <a href="mailto:info@brandness.co.za" className="mt-1 block text-accent hover:text-accent/80">
                  info@brandness.co.za
                </a>
              </div>
              <div>
                <p className="font-semibold text-navy">Phone</p>
                <a href="tel:+310850133248" className="mt-1 block text-charcoal/80 hover:text-charcoal">
                  +31 (0)85 013 32 48
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {locations.map((location) => (
                <article
                  key={location.city}
                  className="flex h-full flex-col justify-between rounded-3xl border border-navy/5 bg-white/80 p-6 shadow-[0_8px_24px_rgba(15,34,50,0.06)]"
                >
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-charcoal/70">
                      {location.city}
                    </h3>
                    <p className="mt-4 text-sm text-charcoal/80">{location.address}</p>
                    <p className="text-sm text-charcoal/80">{location.postalCode}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-accent shadow-[0_5px_16px_rgba(244,78,34,0.18)] transition hover:bg-black hover:text-white"
                    >
                      <span>Route</span>
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/5 bg-[#F2EAD9]">
        <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="overflow-hidden rounded-[32px] bg-charcoal/10">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80"
              alt="Brandness team meeting outside the studio"
              className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-start lg:gap-20 lg:px-8 lg:py-[112px]">
          <div className="lg:w-[35%]">
            <h2 className="text-3xl font-display font-semibold text-navy sm:text-4xl">
              I would like to know more about:
            </h2>
            <ul className="mt-6 space-y-2 text-base text-charcoal/80">
              {inquiryTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-accent" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <form className="flex flex-1 flex-col gap-8 rounded-[32px] border border-navy/5 bg-[#F7F2E9] p-8 shadow-[0_10px_30px_rgba(15,34,50,0.07)] sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="contact-name" className="text-sm font-semibold text-charcoal/70">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="First and last name"
                  className="mt-2 rounded-[18px] border border-navy/10 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-company" className="text-sm font-semibold text-charcoal/70">
                  Company name
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  placeholder="Company"
                  className="mt-2 rounded-[18px] border border-navy/10 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="contact-email" className="text-sm font-semibold text-charcoal/70">
                  Email address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@brand.com"
                  className="mt-2 rounded-[18px] border border-navy/10 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-phone" className="text-sm font-semibold text-charcoal/70">
                  Phone number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+31 ..."
                  className="mt-2 rounded-[18px] border border-navy/10 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="contact-message" className="text-sm font-semibold text-charcoal/70">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Tell us a little more about how we can help..."
                className="mt-2 rounded-[18px] border border-navy/10 bg-white px-4 py-3 text-base text-charcoal outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                required
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-charcoal/80">
              <input
                type="checkbox"
                name="privacy"
                className="mt-1 h-4 w-4 rounded border border-navy/20 text-accent focus:ring-accent"
              />
              <span>
                I agree that brandness. may store and process my personal data as described in the{' '}
                <a href="#privacy" className="text-accent underline underline-offset-2 hover:text-accent/80">
                  privacy policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-[0_6px_18px_rgba(244,78,34,0.22)] transition hover:bg-accentDark"
            >
              Send message
              <span aria-hidden>↗</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

