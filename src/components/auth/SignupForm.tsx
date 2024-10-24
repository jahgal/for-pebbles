"use client";

import { useState, FormEvent } from "react";

import Button from "@shared/Button";
import Input from "@shared/Input";
import AccountPrompt from "@components/auth/AccountPrompt";
import { emailRegex, passwordRegex } from "@utils/regex";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    nickName: "",
    password: "",
    confrim: "",
    result: "",
  });

  const isValidEmail = (email: string) => emailRegex.test(email);
  const isValidPassword = (password: string) => passwordRegex.test(password);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleEmailBlur = () => {
    setError((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "유효한 이메일 주소를 입력해 주세요." : "",
    }));
  };

  const handlePasswordBlur = () => {
    setError((prev) => ({
      ...prev,
      password: !isValidPassword(password)
        ? "영문, 숫자, 특수문자 포함 8~15자로 입력해주세요."
        : "",
    }));
  };

  const handleConfirmBlur = () => {
    setError((prev) => ({
      ...prev,
      confrim:
        password !== confrimPassword ? "비밀번호가 일치하지 않습니다." : "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
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
        type="text"
        size="medium"
        label="닉네임"
        placeholder="닉네임을 입력해주세요."
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <Input
        type="password"
        size="medium"
        label="비밀번호"
        placeholder="영문, 숫자, 특수문자 포함 8~15자"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePasswordBlur}
        error={error.password.length > 0}
        errorMessage={error.password}
      />
      <Input
        type="password"
        size="medium"
        label="비밀번호 확인"
        placeholder="******"
        value={confrimPassword}
        onChange={(e) => setConfrimPassword(e.target.value)}
        error={error.confrim.length > 0}
        errorMessage={error.confrim}
        onBlur={handleConfirmBlur}
      />

      {error.result.length > 0 && (
        <div className="text-red-500 text-label-m">{error.result}</div>
      )}
      <div>
        <Button type="submit" size="medium">
          <span>회원가입</span>
        </Button>
        <AccountPrompt
          question="이미 계정이 있으신가요?"
          linkLable="로그인"
          to="/auth/signin"
        />
      </div>
    </form>
  );
}
