export default function Hero() {
  return (
    <section id="top" className="bg-white pt-6">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px] bg-charcoal/60 sm:rounded-[24px] lg:rounded-[36px]">
          <video
            className="h-[220px] w-full object-cover object-center sm:h-[300px] lg:h-[480px]"
            src="./videos/sample.webm"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.jpg"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase text-white/95 backdrop-blur-md">
                Attraction starts here
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 text-base leading-7 text-charcoal/80 sm:mt-12 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] sm:items-center sm:gap-10 lg:grid-cols-1 lg:gap-8">
          <div className="text-left sm:text-center lg:text-left lg:mx-auto lg:max-w-4xl">
            <h1 className="text-3xl font-display font-semibold text-charcoal sm:text-4xl lg:text-5xl">
              Creative strategies that move audiences to say yes.
            </h1>
          </div>

          <p className="text-lg text-charcoal/80 sm:text-xl sm:text-center lg:mx-auto lg:max-w-4xl lg:text-left">
            Everything starts with attraction. That’s why we create brands you
            just can’t ignore, employer brands that attract top talent, and
            campaigns that make your target audience move. We make brands
            irresistible. From strategy to creation, and from production to
            activation.
          </p>

          <div className="lg:flex lg:justify-center">
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-navy lg:justify-center"
            >
              Check out our services
              <span className="text-lg leading-none">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

