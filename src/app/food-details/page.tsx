import type { Metadata } from "next";
import { FoodDetailsRedirect } from "./redirect";

export const metadata: Metadata = {
  title: "R-EVENTS - 店舗詳細",
  openGraph: {
    title: "R-EVENTS - 共有された店舗を見る",
    description: "立命館慶祥 公式イベント案内アプリ",
  },
};

export default function Page() {
  return <FoodDetailsRedirect />;
}
