import type { Metadata } from "next";
import { FoodDetailsRedirect } from "./redirect";

export const metadata: Metadata = {
  title: "R-EVENTS - 店舗詳細",
  openGraph: {
    title: "R-EVENTS - 共有された店舗を見る",
    description: "R-EVENTSで共有された立命祭の店舗をチェック!",
  },
};

export default function Page() {
  return <FoodDetailsRedirect />;
}
