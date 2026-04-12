"use client";

import { useEffect, useRef, useState } from "react";

export default function TableOfContents({ headings }) {
    const [activeId, setActiveId] = useState("");
    const listRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            let current = "";

            for (let i = 0; i < headings.length; i++) {
                const el = document.getElementById(headings[i].id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();

                if (rect.top <= 180) {
                    current = headings[i].id;
                }
            }

            setActiveId(current);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headings]);

    useEffect(() => {
        if (!activeId || !listRef.current) return;

        const activeLink = listRef.current.querySelector(
            `a[href="#${CSS.escape(activeId)}"]`
        );

        if (activeLink) {
            activeLink.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    }, [activeId]);

    return (
        <aside className="hidden lg:block">
            <div className="sticky top-24">
                <div className="bg-white border rounded-2xl p-5 shadow-sm">
                    <h3 className="font-semibold mb-4 text-gray-800">
                        Table of Contents
                    </h3>

                    <ul
                        ref={listRef}
                        className="space-y-2 text-sm max-h-[70vh] overflow-y-auto pr-2"
                    >
                        {headings.map((h, i) => (
                            <li key={i}>
                                <a
                                    href={`#${h.id}`}
                                    className={`block px-3 py-1 rounded-md transition ${activeId === h.id
                                            ? "bg-gray-100 text-black font-medium"
                                            : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    {h.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}