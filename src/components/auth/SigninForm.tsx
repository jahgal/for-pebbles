"use client";

import { useState, FormEvent } from "react";

import Button from "@shared/Button";
import Input from "@shared/Input";
import Divider from "@shared/Divider";
import CheckBox from "@shared/CheckBox";
import AccountPrompt from "@components/auth/AccountPrompt";
import { emailRegex } from "@utils/regex";

import KakaoLogo from "images/kakao-logo.svg";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auto, setAuto] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    result: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  const isValidEmail = (email: string) => emailRegex.test(email);

  const handleEmailBlur = () => {
    setError((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "유효한 이메일 주소를 입력해 주세요." : "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-10">
        <Input
          type="email"
          size="medium"
          label="이메일 아이디"
          placeholder="stonepick@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          error={error.email.length > 0}
          errorMessage={error.email}
        />
        <Input
          type="password"
          size="medium"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error.result.length > 0 && (
        <div className="text-red-500 text-label-m">{error.result}</div>
      )}
      <div className="mt-6 mb-9 flex justify-between">
        <CheckBox checked={auto} onChange={setAuto} label="자동 로그인" />
        <div className="text-gray-700 text-label-xs cursor-pointer">
          비밀번호 재설정
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Button type="submit" size="medium">
          <span>로그인</span>
        </Button>
        <div className="flex items-center cursor-default">
          <Divider />
          <span className="text-gray-300 px-4 break-keep">또는</span>
          <Divider />
        </div>
        <Button type="submit" size="medium" variant="kakao">
          <span className="flex items-center justify-center gap-1">
            <KakaoLogo />
            카카오 로그인
          </span>
        </Button>
      </div>
      <AccountPrompt
        question="계정이 없으신가요? 지금 바로 가입하세요!"
        linkLable="회원가입"
        to="/auth/signup"
      />
    </form>
  );
}
