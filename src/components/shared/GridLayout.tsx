export default function GridLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const gridStyle = `grid grid-cols-12 max-sm:grid-cols-8 ${className ?? ""}`;

  return <div className={gridStyle}>{children}</div>;
}
