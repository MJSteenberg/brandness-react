export default function FloatingChat() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        className="pointer-events-auto relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-navy shadow-[0_18px_40px_rgba(247,211,84,0.45)] transition hover:-translate-y-1 hover:bg-accentDark"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M6 9.5C6 8.11929 7.11929 7 8.5 7H19.5C20.8807 7 22 8.11929 22 9.5V15.5C22 16.8807 20.8807 18 19.5 18H11L7 21V9.5Z"
            stroke="#0F2232"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="pointer-events-none absolute -right-2 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FF4D6D] text-xs font-semibold text-white shadow-[0_6px_12px_rgba(255,77,109,0.4)]">
          1
        </span>
      </button>
    </div>
  )
}

