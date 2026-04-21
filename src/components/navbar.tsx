"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
	{ href: "/", label: "Trang chủ" },
	{ href: "/about", label: "Giới thiệu" },
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Dự án" },
	{ href: "/guestbook", label: "Lưu bút" },
	{ href: "/contact", label: "Liên hệ" }
];

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-40 border-b border-[color:var(--border)] bg-[color:rgba(252,251,247,0.86)] backdrop-blur-lg">
			<div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
				<Link href="/" className="group inline-flex items-center gap-2">
					<span className="h-2.5 w-2.5 rounded-full bg-[color:var(--sun)] shadow-[0_0_0_6px_rgba(244,162,97,0.22)] transition-transform group-hover:scale-110" />
					<span className="text-lg font-semibold tracking-tight text-[color:var(--text)]">
						Nguyễn Văn Trường
					</span>
				</Link>

				<div className="flex flex-1 flex-wrap items-center justify-end gap-2 sm:gap-2.5">
					{navItems.map((item) => {
						const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
									active
										? "bg-[color:var(--accent)] text-white shadow-[0_10px_26px_-18px_rgba(21,95,79,0.95)]"
										: "text-[color:var(--muted)] hover:bg-[color:rgba(31,138,112,0.12)] hover:text-[color:var(--accent-strong)]"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}