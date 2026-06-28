import type { Metadata } from "next";
import { EventDetailsRedirect } from "./redirect";

export const metadata: Metadata = {
  title: "R-EVENTS - 企画詳細",
  openGraph: {
    title: "R-EVENTS - 共有された企画を見る",
    description: "R-EVENTSで共有された立命祭の企画をチェック!",
  },
};

export default function Page() {
  return <EventDetailsRedirect />;
}
