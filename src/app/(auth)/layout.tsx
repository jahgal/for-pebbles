import Logo from "images/stonePick.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 max-sm:grid-cols-8 place-content-center h-screen">
      <div className="col-span-6 col-start-4 max-sm:col-span-6 max-sm:col-start-2">
        <div className="flex items-center w-full justify-center mb-3">
          <Logo width="8rem" height="3rem" />
        </div>
        {children}
      </div>
    </div>
  );
}
