"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function FoodDetailsRedirectInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    window.location.href = `rsaiapp://food-details${id ? `?id=${id}` : ""}`;

    const timer = setTimeout(() => {
      router.replace("/");
    }, 1500);

    return () => clearTimeout(timer);
  }, [router, searchParams]);

  return null;
}

export function FoodDetailsRedirect() {
  return (
    <Suspense>
      <FoodDetailsRedirectInner />
    </Suspense>
  );
}
