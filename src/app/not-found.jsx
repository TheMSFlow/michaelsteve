import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-full flex items-center justify-center px-4 py-16 bg-dark-blue">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-6 sm:p-8">
        {/* Title */}
        <h1 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
          Oops!
        </h1>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base text-white/60">
          This page is not very intelligent.
        </p>

        {/* Info box */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/70">
            <span className="font-medium text-white">
              This page doesn’t exist, has been moved, or the link is incorrect.
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white text-black px-4 py-2.5 text-sm font-medium transition hover:bg-white/90 active:scale-[0.99]"
          >
            Go to homepage
          </Link>

          <Link
            href="https://intelligence.michaelsteve.com"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white px-4 py-2.5 text-sm font-medium transition hover:bg-white/10 active:scale-[0.99]"
          >
            Go to Intelligence Center
          </Link>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-xs text-white/45">
          If you believe this is an error, contact support or try again later.
        </p>
      </div>
    </main>
  );
}
