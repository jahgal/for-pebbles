"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Modal from "@shared/Modal";
import Button from "@shared/Button";

export default function SignUpSuccessModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showModal =
    searchParams && searchParams.get("modal") === "signupSuccess";

  const [isClient, setIsClient] = useState(false);

  const handleCloseModal = () => {
    router.replace("/");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !showModal) {
    return null;
  }

  return (
    <Modal>
      <div className="flex flex-col justify-center items-start gap-8 text-gray-900">
        <h2 className="w-full text-title-l text-center">
          🎉 환영합니다! 회원가입이 완료되었습니다. 🎉
        </h2>
        <p className="text-center text-body-m">
          이제 웹소설의 무한한 세계로 떠날 준비가 되셨습니다!
          <br />
          솔직한 리뷰와 함께 더 나은 작품을 찾고,
          <br />
          당신만의 이야기를 공유해보세요.
        </p>
        <Button onClick={handleCloseModal}>
          <span>작품 확인하러 가기</span>
        </Button>
      </div>
    </Modal>
  );
}
