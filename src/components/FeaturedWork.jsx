const works = [
  {
    id: 'asqin',
    title: 'asqin is the new, standout brand in the financial interim and consulting market',
    image:
      'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?auto=format&fit=crop&w=1200&q=80',
    tags: ['Branding', 'Storytelling', "'s-Hertogenbosch"],
  },
  {
    id: 'movares',
    title: 'The new Movares: more impact for smarter solutions',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Branding', 'Tech & Industrie', 'Utrecht'],
    isVideo: true,
  },
]

const Tag = ({ children }) => (
  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy/70">
    {children}
  </span>
)

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-white pb-20 pt-4 sm:pt-6 lg:pb-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-slate-600">
              Try saying no to this.
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-navy sm:text-4xl">
              Campaigns and identities designed to make decisions easier.
            </h2>
          </div>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-bold text-white shadow-[0_6px_18px_rgba(244,78,34,0.22)] transition hover:bg-accentDark"
          >
            Check out our work
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
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {works.map((work) => (
            <article
              key={work.id}
              className="flex h-full flex-col rounded-[28px] border border-navy/8 bg-cream p-6 shadow-card transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,34,50,0.14)]"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-64 w-full object-cover object-center"
                  loading="lazy"
                />
                {work.isVideo && (
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-navy transition hover:scale-105"
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <circle
                        cx="11"
                        cy="11"
                        r="10.5"
                        stroke="currentColor"
                      />
                      <path
                        d="M9.5 8.5L14 11L9.5 13.5V8.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="mt-6 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-navy">
                    {work.title}
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

