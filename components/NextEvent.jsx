export default function NextEvent() {
  return (
    <div className="max-w-56">
      <a
        href="/events"
        className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg px-6 py-4 rounded-full transition-all duration-300 ease-out-flex transform hover:scale-105 border border-white/20 hover:border-white/40"
      >
        <span className="text-white font-medium">Next Event</span>
        <svg
          className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </a>
    </div>
  );
}
