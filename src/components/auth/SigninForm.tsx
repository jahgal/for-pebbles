"use client";

import { useState, FormEvent } from "react";

import Button from "@shared/Button";
import Input from "@shared/Input";
import Divider from "@shared/Divider";
import CheckBox from "@shared/CheckBox";
import KakaoLoginButton from "@shared/KakaoLoginButton";
import AccountPrompt from "@components/auth/AccountPrompt";
import { emailRegex } from "@utils/regex";
import InputLabel from "@shared/InputLabel";

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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <InputLabel text="이메일 아이디" />
          <Input
            type="email"
            size="medium"
            placeholder="stonepick@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            error={error.email.length > 0}
          />
        </div>
        <div className="flex flex-col gap-3">
          <InputLabel text="비밀번호" />
          <Input
            type="password"
            size="medium"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="my-10 flex justify-between">
        <CheckBox checked={auto} onChange={setAuto} label="자동 로그인" />
        <div className="text-gray-700 text-label-xs cursor-pointer">
          비밀번호 재설정
        </div>
      </div>
      <div className="mb-10">
        <Button type="submit" size="medium" variant="contained" color="purple">
          <span>로그인</span>
        </Button>
        <div className="flex items-center cursor-default my-10 max-sm:my-8">
          <Divider />
          <span className="text-gray-300 px-4 break-keep">또는</span>
          <Divider />
        </div>
        <KakaoLoginButton />
      </div>
      <AccountPrompt
        question="계정이 없으신가요? 지금 바로 가입하세요!"
        linkLable="회원가입"
        to="/signup"
      />
    </form>
  );
}
