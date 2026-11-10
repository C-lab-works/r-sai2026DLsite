import Image from "next/image";

const ICON_URL = "https://r2.r-sai2026.site/revents.webp";

const STORES = [
  {
    key: "ios",
    label: "iPhone / iPad",
    cta: "App Store で開く",
    href: "https://apps.apple.com/jp/app/r-events/id6773613459",
    qr: "/images/ios_qr.webp",
    qrAlt: "App Store QRコード",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    key: "android",
    label: "Android",
    cta: "Google Play で開く",
    href: "https://play.google.com/store/apps/details?id=com.rsai.app&pcampaignid=web_share",
    qr: "https://r2.r-sai2026.site/androidqr.webp",
    qrAlt: "Google Play QRコード",
    color: "bg-emerald-600 hover:bg-emerald-700",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white px-4 py-14 text-gray-800">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-3 text-center">
          <Image
            src={ICON_URL}
            alt="R-EVENTS アイコン"
            width={96}
            height={96}
            priority
            className="rounded-[22px]"
          />
          <h1 className="text-3xl font-bold">R-EVENTS</h1>
          <p className="text-sm text-gray-600">立命館慶祥 公式イベント案内アプリ</p>
          <p className="max-w-md text-sm leading-relaxed text-gray-600">
            2026年度立命祭を終え、R-EXPO 2027の情報を順次公開していきます!
          </p>
        </header>

        <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {STORES.map((s) => (
            <div
              key={s.key}
              className="flex flex-col items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6"
            >
              <span className="text-xs font-bold tracking-widest text-gray-400">
                {s.label}
              </span>

              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.cta}（QRコード）`}
                className="transition-transform duration-200 hover:scale-105"
              >
                <Image src={s.qr} alt={s.qrAlt} width={140} height={140} />
              </a>

              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-bold text-white transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 ${s.color}`}
              >
                {s.cta}
                <ArrowIcon />
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
