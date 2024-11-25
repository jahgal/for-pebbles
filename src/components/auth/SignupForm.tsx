"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

import Button from "@shared/Button";
import Input from "@shared/Input";
import AccountPrompt from "@components/auth/AccountPrompt";
import { emailRegex, passwordRegex } from "@utils/regex";
import InputLabel from "@shared/InputLabel";
import WarningMessage from "@shared/WarningMessage";

export default function SignUpForm() {
  const router = useRouter();

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
      <div className="flex flex-col gap-3">
        <InputLabel text="이메일 아이디" />
        <div className="flex gap-4 items-center">
          <Input
            type="email"
            size="medium"
            placeholder="stonepick@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            error={error.email.length > 0}
            additionalClass="flex-1"
          />
          <Button additionalClass="max-w-fit break-keep">
            <span>중복확인</span>
          </Button>
        </div>
        {error.email.length > 0 && (
          <WarningMessage errorMessage={error.email} />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <InputLabel text="닉네임" />
        <Input
          type="text"
          size="medium"
          placeholder="닉네임을 입력해주세요."
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <InputLabel text="비밀번호" />
        <Input
          type="password"
          size="medium"
          placeholder="영문, 숫자, 특수문자 포함 8~15자"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handlePasswordBlur}
          error={error.password.length > 0}
        />
        {error.password.length > 0 && (
          <WarningMessage errorMessage={error.password} />
        )}
      </div>
      <div className="flex flex-col gap-3">
        <InputLabel text="비밀번호 확인" />
        <Input
          type="password"
          size="medium"
          placeholder="******"
          value={confrimPassword}
          onChange={(e) => setConfrimPassword(e.target.value)}
          error={error.confrim.length > 0}
          onBlur={handleConfirmBlur}
        />
        {error.confrim.length > 0 && (
          <WarningMessage errorMessage={error.confrim} />
        )}
      </div>
      <div className="flex flex-col gap-5">
        <Button
          type="submit"
          size="medium"
          disabled={error.result.length > 0}
          onClick={() => router.push("/?modal=signupSuccess")}
        >
          <span>회원가입</span>
        </Button>
        <AccountPrompt
          question="이미 계정이 있으신가요?"
          linkLable="로그인"
          to="/signin"
        />
      </div>
    </form>
  );
}
