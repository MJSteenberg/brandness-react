const toGlyphs = (...codes) =>
  codes.map((code) => String.fromCharCode(code)).join(' ')

const textFontSamples = [
  {
    label: 'Font 369A2D F 0',
    file: '369A2D_F_0.woff2',
    className: 'font-[Font369F0]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
  {
    label: 'Font 369A2D 11 0',
    file: '369A2D_11_0.woff2',
    className: 'font-[Font369110]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
  {
    label: 'Font 369A2D 10 0',
    file: '369A2D_10_0.woff2',
    className: 'font-[Font36920]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
  {
    label: 'Font 369A2D 12 0',
    file: '369A2D_12_0.woff2',
    className: 'font-[Font369120]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
  {
    label: 'Font 369A2D 2 0',
    file: '369A2D_2_0.woff2',
    className: 'font-[Font36920]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
  {
    label: 'Font 369A2D 4 0',
    file: '369A2D_4_0.woff2',
    className: 'font-[Font36940]',
    sample: 'The quick brown fox jumps over 123.',
    sampleUpper: 'THE QUICK BROWN FOX JUMPS OVER 123.',
  },
]

const iconFontSamples = [
  {
    label: 'Font Awesome Light',
    file: 'fa-light-300.woff2',
    className: 'font-[FAL]',
    sample: toGlyphs(0xf007, 0xf0f3, 0xf002),
  },
  {
    label: 'Font Awesome Solid',
    file: 'fa-solid-900.woff2',
    className: 'font-[FAS]',
    sample: toGlyphs(0xf0c0, 0xf005, 0xf0e7),
  },
  {
    label: 'Font Awesome Brands',
    file: 'fa-brands-400.woff2',
    className: 'font-[FAB]',
    sample: toGlyphs(0xf09a, 0xf099, 0xf16a),
  },
  {
    label: 'Font Awesome Duotone',
    file: 'fa-duotone-900.woff2',
    className: 'font-[FAD]',
    sample: toGlyphs(0xf0f4, 0xf085, 0xf0a0),
  },
  {
    label: 'Font Awesome Regular',
    file: 'fa-regular-400.woff2',
    className: 'font-[FAR]',
    sample: toGlyphs(0xf044, 0xf0f4, 0xf1fc),
  },
  {
    label: 'Material Icons',
    file: 'material-icons.woff2',
    className: 'font-[MaterialIcons]',
    sample: 'home favorite chat',
  },
]

const Card = ({ font }) => (
  <div className="rounded-2xl border border-navy/5 bg-white/70 p-5 shadow-[0_10px_24px_rgba(15,34,50,0.08)]">
    <p className="text-xs font-semibold uppercase text-slate-500">
      {font.label}
    </p>
    <p className="mt-3 text-sm text-slate-500">{font.file}</p>
    <p className={`mt-5 text-3xl tracking-wide text-navy ${font.className}`}>
      {font.sample}
    </p>
    {font.sampleUpper && (
      <p className={`mt-3 text-2xl tracking-wide text-slate-600 ${font.className}`}>
        {font.sampleUpper}
      </p>
    )}
  </div>
)

export default function FontShowcase() {
  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <header className="text-center">
          <h1 className="font-display text-4xl font-semibold text-navy">Font Library</h1>
          <p className="mt-4 text-lg text-slate-600">
            Preview the uploaded typefaces and icon sets available in this project.
          </p>
        </header>

        <div className="mt-12 rounded-3xl border border-navy/10 bg-white/80 p-6 shadow-card">
          <h2 className="font-display text-sm font-semibold uppercase text-slate-600">
            Text Families
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {textFontSamples.map((font) => (
              <Card key={font.file} font={font} />
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-navy/10 bg-white/80 p-6 shadow-card">
          <h2 className="font-display text-sm font-semibold uppercase text-slate-600">
            Icon Families
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Icon fonts render glyphs when the corresponding code points or ligatures are used.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {iconFontSamples.map((font) => (
              <Card key={font.file} font={font} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

