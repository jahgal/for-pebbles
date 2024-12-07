"use server";

import https from "https";
import axios, { AxiosError, AxiosResponse } from "axios";
import { cookies } from "next/headers";

import { EmailVerifyRes, SignInRes, SignUpRes } from "@models/auth";

const agent = new https.Agent({ rejectUnauthorized: false });
const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/users`;

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const response: AxiosResponse<SignInRes> = await axios.post(
      `${BASE_URL}/sign-in`,
      {
        email,
        password,
      },
      {
        headers: {
          Accept: "*/*",
        },
        httpsAgent: agent,
      }
    );

    const { status, data, message } = response.data;

    if (status === 200 && data) {
      const { token, user } = data;

      if (!token || !user) {
        throw new Error("서버 응답에 토큰 또는 사용자 정보가 없습니다.");
      }

      (await cookies()).set({
        name: "authToken",
        value: token,
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      return { success: true, token, user, message };
    }

    throw new Error(message || "로그인에 실패했습니다.");
  } catch (error: unknown) {
    console.log(error);
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
    const response: AxiosResponse<SignUpRes> = await axios.post(
      `${BASE_URL}/sign-up`,
      {
        email,
        password,
        nickname,
      },
      {
        headers: {
          Accept: "*/*",
        },
        httpsAgent: agent,
      }
    );

    const { status, data, message } = response.data;

    if (status === 200 && data) {
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
    const response: AxiosResponse<EmailVerifyRes> = await axios.post(
      `${BASE_URL}/email/verify`,
      { email },
      {
        httpsAgent: agent,
        headers: {
          Accept: "*/*",
        },
      }
    );

    const { status, data, message } = response.data;

    if (status === 200 && data) {
      if (data.isExistEmail) {
        return { success: true, message };
      }
      return { success: false, message };
    }
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: "이메일 중복 확인에 실패했습니다.",
    };
  }
}
