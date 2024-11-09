import { Suspense } from "react";

import Gnb from "@shared/Gnb";
import HeaderTop from "@shared/HeaderTop";
import SignUpSuccessModal from "@components/auth/SignUpSuccessModal";
import MainList from "@components/MainList";

export default function Page() {
  return (
    <>
      <header>
        <HeaderTop />
        <Gnb />
      </header>
      <section className="my-10">
        <MainList />
        <Suspense>
          <SignUpSuccessModal />
        </Suspense>
      </section>
    </>
  );
}
