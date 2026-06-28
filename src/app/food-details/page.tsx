"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function FoodDetailsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    // カスタムスキームでアプリを起動試行（インストール済みなら開く）
    window.location.href = `rsaiapp://food-details${id ? `?id=${id}` : ""}`;

    // アプリが開かなかった場合のみダウンロードページへ
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return null;
}

export default function FoodDetailsRedirect() {
  return (
    <Suspense>
      <FoodDetailsRedirectInner />
    </Suspense>
  );
}
