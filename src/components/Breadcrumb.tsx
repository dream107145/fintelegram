import Link from "next/link";

export default function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="text-[12px] text-ft-muted mb-4 py-3 border-b border-ft-border">
      {items.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span className="mx-1.5 text-ft-border">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-ft-red">
              {item.label}
            </Link>
          ) : (
            <span className="text-ft-text">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
