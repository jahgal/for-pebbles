"use client";

import KakaoLogo from "images/kakao-logo.svg";

export default function KakaoLoginButton() {
  return (
    <button
      type="submit"
      className="w-full rounded focus:outline-none transition-all duration-300 bg-kakao-bg text-kakao-text hover:opacity-75 h-12 px-4 text-label-m max-sm:h-10 max-sm:px-3 max-sm:text-label-s"
    >
      <span className="flex items-center justify-center gap-1">
        <KakaoLogo />
        카카오 로그인
      </span>
    </button>
  );
}
