"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function EventDetailsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    // 行事（rsai / rexpo）。アプリは受け取ると、その行事に切り替えてから詳細を開く
    const event = searchParams.get("event");

    const query = new URLSearchParams();
    if (id) query.set("id", id);
    if (event) query.set("event", event);
    const qs = query.toString();

    window.location.href = `rsaiapp://event-details${qs ? `?${qs}` : ""}`;

    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return null;
}

export function EventDetailsRedirect() {
  return (
    <Suspense>
      <EventDetailsRedirectInner />
    </Suspense>
  );
}
