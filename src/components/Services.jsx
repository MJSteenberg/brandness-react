import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const serviceSlides = [
  {
    id: 'social-media-management',
    label: 'Always-On Social Media Management',
    summary:
      'We turn your social presence into a place people want to be. Smart strategy, consistent creativity, and daily momentum that keeps your audience engaged and curious.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    background: 'bg-[#F7F2E9]',
  },
  {
    id: 'paid-media-management',
    label: 'Full-Funnel Paid Media Management',
    summary:
      'We build campaigns that don’t just reach people—they move them. From awareness to conversion, we design paid journeys that attract the right audience and guide them to yes.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    background: 'bg-[#F7F2E9]',
  },
  {
    id: 'content-creation',
    label: 'Full-Spectrum Content Production',
    summary:
      'Content that earns attention. From UGC to high-polish production, we create the stories, visuals, and moments that make your brand impossible to ignore.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    background: 'bg-[#F7F2E9]',
  },
  {
    id: 'brand-design',
    label: 'Branding & Visual Design',
    summary:
      'We shape brands people feel. Identities that stand out, systems that scale, and design that makes your message unmistakable. From first impression to final detail.',
    image:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
    background: 'bg-[#F7F2E9]',
  },
  {
    id: 'website-development',
    label: 'Website & E-Commerce Development',
    summary:
      'Digital experiences built to captivate and convert. Whether it’s a one-page site or a full-scale online store, we craft fast, intuitive, on-brand websites made to perform.',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80',
    background: 'bg-[#F7F2E9]',
  },
]

const ArrowButton = () => (
  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white text-navy shadow-[0_12px_28px_rgba(15,34,50,0.12)] transition group-hover:-translate-y-1 group-hover:text-accent">
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
    <section id="services" className="bg-white py-20 sm:py-40 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="services-swiper-container overflow-hidden pt-3 sm:pt-4 lg:pt-4">
          <Swiper
            modules={[Pagination, A11y]}
            pagination={{
              clickable: true,
              el: '.services-pagination',
            }}
            spaceBetween={20}
            slidesPerView={1.05}
            centeredSlides
            touchReleaseOnEdges
            resistance
            resistanceRatio={0.7}
            speed={650}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                centeredSlides: false,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 30,
              },
            }}
            className="services-swiper !overflow-visible pb-12"
          >
            {serviceSlides.map((service) => (
              <SwiperSlide key={service.id}>
                <div className={`group rounded-[28px] border border-navy/5 ${service.background} shadow-[0_6px_16px_rgba(15,34,50,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,34,50,0.08)]`}>
                  <article className="flex h-full flex-col justify-between rounded-[28px] bg-transparent p-7">
                    <div>
                      <h3 className="font-display font-[Font369120] text-lg font-semibold text-navy">
                        {service.label.includes('&') ? (
                          <>
                            {service.label.split('&')[0].trim()} &
                            <br />
                            {service.label.split('&').slice(1).join('&').trim()}
                          </>
                        ) : (
                          service.label
                        )}
                      </h3>
                      <span className="mt-3 block h-[3px] w-12 rounded-full bg-navy/25" />
                      <p className="mt-5 text-[15px] leading-relaxed text-charcoal/80">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-6">
                      <div className="relative w-full overflow-hidden rounded-[24px] bg-navy/5">
                        <img
                          src={service.image}
                          alt={service.label}
                          className="h-[180px] w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <ArrowButton />
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
            <div className="services-pagination swiper-pagination mt-6 flex justify-center"></div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

