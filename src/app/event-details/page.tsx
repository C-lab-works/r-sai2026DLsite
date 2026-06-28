"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function EventDetailsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    // カスタムスキームでアプリを起動試行（インストール済みなら開く）
    window.location.href = `rsaiapp://event-details${id ? `?id=${id}` : ""}`;

    // アプリが開かなかった場合のみダウンロードページへ
    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return null;
}

export default function EventDetailsRedirect() {
  return (
    <Suspense>
      <EventDetailsRedirectInner />
    </Suspense>
  );
}
