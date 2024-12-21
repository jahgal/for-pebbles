"use server";

import axios, { AxiosError, AxiosResponse, HttpStatusCode } from "axios";

import { EmailVerifyRes, SignInRes, SignUpRes } from "@models/auth";
import apiClient from "@actions/apiClient";

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response: AxiosResponse<SignInRes> = await apiClient.post(
      "/users/sign-in",
      {
        email,
        password,
      }
    );

    const { status, data, message } = response.data;

    if (status == HttpStatusCode.Ok && data) {
      const { token, user } = data;

      if (!token || !user) {
        throw new Error("서버 응답에 토큰 또는 사용자 정보가 없습니다.");
      }

      return { success: true, token, user, message };
    }

    throw new Error(message || "로그인에 실패했습니다.");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<SignInRes>;
      const serverMessage = axiosError.response?.data?.message;
      return {
        success: false,
        message:
          serverMessage ?? "서버에 문제가 발생했습니다. 다시 시도해 주세요.",
      };
    }

    return {
      success: false,
      message: (error as Error).message ?? "알 수 없는 오류가 발생했습니다.",
    };
  }
}

export async function signUpAction({
  email,
  password,
  nickname,
}: {
  email: string;
  password: string;
  nickname: string;
}) {
  try {
    const response: AxiosResponse<SignUpRes> = await apiClient.post(
      "/users/sign-up",
      {
        email,
        password,
        nickname,
      }
    );

    const { status, data, message } = response.data;

    if (status == HttpStatusCode.Ok && data) {
      return { success: true, message };
    }
    throw new Error(message || "회원가입에 실패했습니다.");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<SignUpRes>;
      const serverMessage = axiosError.response?.data?.message;
      return {
        success: false,
        message:
          serverMessage ?? "서버에 문제가 발생했습니다. 다시 시도해 주세요.",
      };
    }

    return {
      success: false,
      message: (error as Error).message ?? "알 수 없는 오류가 발생했습니다.",
    };
  }
}

export async function checkEmailAction({ email }: { email: string }) {
  try {
    const response: AxiosResponse<EmailVerifyRes> = await apiClient.post(
      "/users/email/verify",
      { email }
    );

    const { status, data, message } = response.data;

    if (status == HttpStatusCode.Ok && data) {
      if (data.isExistEmail) {
        return { success: false, message };
      }
      return { success: true, message };
    }
    throw Error();
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "이메일 중복 확인에 실패했습니다.",
    };
  }
}
