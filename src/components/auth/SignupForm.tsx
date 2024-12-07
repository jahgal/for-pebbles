"use client";

import { useState, FormEvent, useMemo } from "react";
import { useRouter } from "next/navigation";

import { signUpAction, checkEmailAction } from "@actions/auth";
import Button from "@shared/Button";
import Input from "@shared/Input";
import InputLabel from "@shared/InputLabel";
import WarningMessage from "@shared/WarningMessage";
import AccountPrompt from "@components/auth/AccountPrompt";
import { emailRegex, passwordRegex } from "@utils/regex";

export default function SignUpForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    nickname: "",
    password: "",
    confrim: "",
    result: "",
  });

  const isValidEmail = (email: string) => emailRegex.test(email);
  const isValidPassword = (password: string) => passwordRegex.test(password);
  const isSubmitDisabled = useMemo(() => {
    return (
      error.email.length !== 0 ||
      error.nickname.length !== 0 ||
      error.password.length !== 0 ||
      error.confrim.length !== 0 ||
      [email, nickname, password, confirmPassword].includes("")
    );
  }, [error, email, nickname, password, confirmPassword]);

  const handleCheckEmail = async () => {
    if (!email) {
      setError({
        email: "",
        nickname: "",
        password: "",
        confrim: "",
        result: "",
      });
      return;
    }

    const res = await checkEmailAction({ email });

    if (res?.success) {
      return;
    }
    setError((prev) => ({
      ...prev,
      email: res?.message ?? "사용할 수 없는 이메일입니다.",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!password) {
      setError((prev) => ({ ...prev, password: "비밀번호를 입력해 주세요." }));
      return;
    }

    const res = await signUpAction({ email, password, nickname });

    if (res.success) {
      setError({
        email: "",
        nickname: "",
        password: "",
        confrim: "",
        result: "",
      });
      return router.push("/?modal=signupSuccess");
    }
    setError((prev) => ({ ...prev, result: res.message }));
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
        password !== confirmPassword ? "비밀번호가 일치하지 않습니다." : "",
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
          <Button
            additionalClass="max-w-fit break-keep"
            onClick={handleCheckEmail}
            disabled={!isValidEmail(email)}
          >
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
          value={nickname}
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
          value={confirmPassword}
          onChange={(e) => {
            const { value } = e.target;
            setConfirmPassword(e.target.value);
            setError((prev) => ({
              ...prev,
              confrim:
                password !== value ? "비밀번호가 일치하지 않습니다." : "",
            }));
          }}
          error={error.confrim.length > 0}
          onBlur={handleConfirmBlur}
        />
        {error.confrim.length > 0 && (
          <WarningMessage errorMessage={error.confrim} />
        )}
      </div>
      <div className="flex flex-col gap-5">
        <Button type="submit" size="medium" disabled={isSubmitDisabled}>
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
