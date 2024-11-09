import { Suspense } from "react";

import SignUpSuccessModal from "@components/auth/SignUpSuccessModal";

export default function Page() {
  return (
    <section>
      메인페이지
      <Suspense>
        <SignUpSuccessModal />
      </Suspense>
    </section>
  );
}
