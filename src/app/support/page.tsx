"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [sec, setSec] = useState(4);
  useEffect(() => {
    const t = setTimeout(() => {
      router.push("https://tanmays-organization-2.gitbook.io/ship/");
    }, 4000);
    const i = setInterval(() => {
      if (sec <= 0) return;
      setSec((prev) => (prev - 1 + 4) % 4);
    }, 1000);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, [router]);
  return (
    <div className="p-4">
      <a
        href="https://github.com/babyo777/ship"
        className="text-blue-500  underline underline-offset-2"
      >
        contribute
      </a>
      <p>Redirecting... in {sec}</p>
    </div>
  );
}
