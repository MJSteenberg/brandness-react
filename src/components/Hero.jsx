const heroImage =
  'https://images.unsplash.com/photo-1523661149972-0becaca201f0?auto=format&fit=crop&w=1600&q=80'

export default function Hero() {
  return (
    <section id="top" className="bg-white pb-16 pt-6 sm:pb-20 lg:pb-28">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-charcoal/50">
          <img
            src={heroImage}
            alt="Illustration of a bridge design"
            className="h-[320px] w-full object-cover object-center lg:h-[420px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur-md">
                Attraction starts here
              </span>
              <h1 className="mt-6 max-w-xl font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                Creative strategies that move audiences to say yes.
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 text-base leading-7 text-charcoal/80 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] sm:items-center sm:gap-12 lg:gap-16">
          <p className="text-lg text-charcoal/80 sm:text-xl">
            Everything starts with attraction. That’s why we create brands you
            just can’t ignore, employer brands that attract top talent, and
            campaigns that make your target audience move. We make brands
            irresistible. From strategy to creation, and from production to
            activation.
          </p>

          <div>
            <a
              href="#brands"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.38em] text-slate-600"
            >
              Check it out
              <span className="rounded-full border border-slate-400 px-3 py-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

