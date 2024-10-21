export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 place-content-center h-screen">
      <div className="col-span-6 col-start-4">{children}</div>
    </div>
  );
}
