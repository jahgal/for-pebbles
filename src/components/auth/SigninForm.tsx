"use client";

import { FormEvent, useState, useMemo } from "react";
import { useRouter } from "next/navigation";

import { signInAction } from "@actions/auth";
import Button from "@shared/Button";
import Input from "@shared/Input";
import Divider from "@shared/Divider";
import CheckBox from "@shared/CheckBox";
import KakaoLoginButton from "@shared/KakaoLoginButton";
import InputLabel from "@shared/InputLabel";
import HelpText from "@shared/HelpText";
import AccountPrompt from "@components/auth/AccountPrompt";
import useAuth from "@components/auth/hooks/useAuth";
import { emailRegex } from "@utils/regex";

export default function SignInForm() {
  const router = useRouter();
  const { setToken } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auto, setAuto] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    result: "",
  });

  const isValidEmail = (email: string) => emailRegex.test(email);
  const isSubmitDisabled = useMemo(() => {
    return (
      [email, password].includes("") ||
      error.email.length !== 0 ||
      error.password.length !== 0
    );
  }, [error, email, password]);

  const handleEmailBlur = () => {
    setError((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "유효한 이메일 주소를 입력해 주세요." : "",
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!password) {
      setError((prev) => ({ ...prev, password: "비밀번호를 입력해 주세요." }));
      return;
    }

    const { success, token, message } = await signInAction({ email, password });

    if (success && token) {
      setToken(token);
      setError({ email: "", password: "", result: "" });
      return router.push("/");
    }
    setError((prev) => ({ ...prev, result: message }));
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
          {error.email && <HelpText type="warning" message={error.email} />}
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
          {error.password && (
            <HelpText type="warning" message={error.password} />
          )}
        </div>
      </div>
      <div className="my-4 flex justify-between">
        <CheckBox checked={auto} onChange={setAuto} label="자동 로그인" />
        <div className="text-gray-700 text-label-xs cursor-pointer">
          비밀번호 재설정
        </div>
      </div>
      {error.result && (
        <HelpText
          type="warning"
          message={error.result}
          additionalClass="mb-8"
        />
      )}
      <div className="mb-10">
        <Button
          type="submit"
          size="medium"
          variant="contained"
          color="purple"
          disabled={isSubmitDisabled}
        >
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
