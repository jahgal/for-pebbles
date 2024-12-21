import Gnb from "@shared/Gnb";
import HeaderTop from "@shared/HeaderTop";

export default function BookDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <HeaderTop />
        <Gnb />
      </header>
      <section className="items-center my-10">{children}</section>
    </>
  );
}
