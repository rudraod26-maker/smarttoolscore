"use client";

import { useEffect } from "react";

type Props = {
  slot: string;
  style?: React.CSSProperties;
};

export default function AdBanner({ slot, style }: Props) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          width: "100%",
          ...style,
        }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // 🔴 REPLACE
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}