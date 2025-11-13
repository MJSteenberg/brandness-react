const services = [
  {
    id: 'brands',
    title: 'Brands',
    description:
      'We create bold, visionary brands that resonate with audiences and shake up the market. No shortcuts, just strategic stories that drive impact, build loyal fans, and stay ahead of the game.',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-sand',
  },
  {
    id: 'employer-brands',
    title: 'Employer brands',
    description:
      'Employers who attract and retain talent have one thing in common: a strong employer brand. We help you become the place people can’t wait to work for.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-cream',
  },
  {
    id: 'marketing-studio',
    title: 'Marketing Studio',
    description:
      'In the Marketing Studio, we bring brand experiences to life. From short-form content to large-scale campaigns, we deliver ideas that make audiences lean in.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-bluish',
  },
]

const ArrowButton = () => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-[0_10px_24px_rgba(15,34,50,0.12)] transition hover:-translate-y-1 hover:text-accent">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 12L12 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 4H12V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className={`flex h-full flex-col justify-between rounded-[28px] border border-navy/5 p-7 pb-6 shadow-card transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,34,50,0.14)] ${service.accent}`}
            >
              <div>
                <h2 className="font-display text-xl font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  {service.description}
                </p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-32 w-32 rounded-2xl object-cover object-center shadow-[0_20px_40px_rgba(15,34,50,0.18)]"
                    loading="lazy"
                  />
                </div>
                <ArrowButton />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-16 rounded-full bg-navy/70" />
          <span className="h-2 w-8 rounded-full bg-navy/20" />
          <span className="h-2 w-8 rounded-full bg-navy/20" />
        </div>
      </div>
    </section>
  )
}

