"use client";

import Link from "next/link";

export default function ArticleCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "14px",
        padding: "18px",
        textDecoration: "none",
        transition: "all 0.25s ease",
        display: "block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid #6366f1";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid #e2e8f0";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <h3 style={{ fontSize: "18px", fontWeight: 600 }}>{title}</h3>
    </Link>
  );
}