const inspirationItems = [
  {
    id: 'bright-nights',
    title:
      'Signify stands out with interactive booth at Bright Nights in Walibi',
    date: 'February 8, 2025',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'amo-brand',
    title: 'How Amo created a brand that thrives on challenge',
    date: 'January 31, 2025',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bno',
    title:
      'Morres & Company joins Beroepsorganisatie Nederlandse Ontwerpers (BNO)',
    date: 'December 7, 2024',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
]

const ArrowIcon = () => (
  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-[0_8px_22px_rgba(15,34,50,0.12)] transition hover:-translate-y-1">
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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

export default function Inspiration() {
  return (
    <section className="bg-white pb-24 pt-4 lg:pb-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-slate-600">
              Inspiration
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
              Ideas, projects, and stories from our studio.
            </h2>
          </div>
          <a
            href="#inspiration"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-navy/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-navy transition hover:border-navy/30"
          >
            More inspiration
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {inspirationItems.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-[28px] border border-navy/8 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,34,50,0.14)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.date}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">
                    {item.title}
                  </h3>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-navy hover:text-accent"
                  >
                    Read more
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

