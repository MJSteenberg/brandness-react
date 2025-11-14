export const getNavbarOffset = () => {
  if (typeof window === 'undefined') return 0

  const defaultOffsets = [
    { minWidth: 1440, offset: 172 },
    { minWidth: 1280, offset: 164 },
    { minWidth: 1024, offset: 152 },
    { minWidth: 768, offset: 136 },
    { minWidth: 0, offset: 118 },
  ]

  const baseOffset = defaultOffsets.find(({ minWidth }) => window.innerWidth >= minWidth)?.offset ?? 120

  let computedOffset = baseOffset

  const bar = document.querySelector('[data-navbar-bar]')
  if (bar) {
    const height = bar.getBoundingClientRect().height
    if (height) {
      computedOffset = Math.max(computedOffset, height + 24)
    }
  }

  const pill = document.querySelector('[data-navbar-pill]')
  if (pill) {
    const height = pill.getBoundingClientRect().height
    if (height) {
      computedOffset = Math.max(computedOffset, height + 36)
    }
  }

  return computedOffset
}

export const scrollToWithOffset = (element, behavior = 'smooth') => {
  if (!element) return

  const offset = getNavbarOffset()
  const rect = element.getBoundingClientRect()
  const absoluteTop = rect.top + window.pageYOffset
  const target = Math.max(absoluteTop - offset, 0)

  window.scrollTo({ top: target, behavior })
}
