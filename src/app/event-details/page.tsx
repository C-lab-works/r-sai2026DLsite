import type { Metadata } from "next";
import { EventDetailsRedirect } from "./redirect";

export const metadata: Metadata = {
  title: "R-EVENTS - 企画詳細",
  openGraph: {
    title: "R-EVENTS - 共有された企画を見る",
    description: "立命館慶祥 公式イベント案内アプリ",
  },
};

export default function Page() {
  return <EventDetailsRedirect />;
}
