import { cn } from "@utils";

export default function GridLayout({
  children,
  additionalClass,
}: {
  children: React.ReactNode;
  additionalClass?: string;
}) {
  const gridStyle = cn("grid grid-cols-12 max-sm:grid-cols-8", additionalClass);

  return <div className={gridStyle}>{children}</div>;
}
