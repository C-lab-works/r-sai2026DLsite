import Image from "next/image";

const ICON_URL = "https://r2.r-sai2026.site/revents.webp";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12 gap-10">

      {/* タイトル */}
      <div className="flex flex-col items-center gap-4">
        <Image
          src={ICON_URL}
          alt="R-EVENTS アイコン"
          width={80}
          height={80}
          className="rounded-2xl shadow-md"
        />
        <h1 className="text-2xl text-gray-800 font-bold">R-EVENTS</h1>
        <p className="text-gray-700 text-sm">立命館慶祥 公式イベント案内アプリ</p>
        <p className="text-gray-700 text-sm">現在は2026年度立命祭の情報を掲載中!!</p>
      </div>

      {/* QR + ボタン（2列） */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-sm">

        {/* iOS */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/ios_qr.webp"
            alt="App Store QRコード"
            width={140}
            height={140}
          />
          <a
            href="https://apps.apple.com/jp/app/r-events/id6773613459"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-500 text-white text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            App Store で開く
          </a>
        </div>

        {/* Android */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="https://r2.r-sai2026.site/androidqr.webp"
            alt="Google Play QRコード"
            width={140}
            height={140}
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.rsai.app&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-500 text-white text-center py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Google Play で開く
          </a>
        </div>

      </div>
    </main>
  );
}
