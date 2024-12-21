"use client";

import { useRouter } from "next/navigation";

import SearchBar from "@components/SearchBar";
import useAuth from "@components/auth/hooks/useAuth";

import Logo from "images/stonePick.svg";

export default function HeaderTop() {
  const router = useRouter();
  const { accessToken, removeToken } = useAuth();

  return (
    <div className="flex px-16 py-4 items-center justify-between border-b border-gray-300">
      <div>
        <Logo width="8rem" height="3rem" onClick={() => router.push("/")} />
      </div>

      <div className="flex gap-2 items-center">
        <SearchBar />
        {accessToken ? (
          <>
            <span className="px-3 cursor-pointer font-bold text-gray-900 text-body-m">
              마이페이지
            </span>
            <span
              className="px-3 cursor-pointer font-bold text-gray-900 text-body-m"
              onClick={() => removeToken()}
            >
              로그아웃
            </span>
          </>
        ) : (
          <>
            <span
              className="px-3 cursor-pointer font-bold text-gray-900 text-body-m"
              onClick={() => router.push("/signup")}
            >
              회원가입
            </span>
            <span
              className="px-3 cursor-pointer font-bold text-gray-900 text-body-m"
              onClick={() => router.push("/signin")}
            >
              로그인
            </span>
          </>
        )}
      </div>
    </div>
  );
}
