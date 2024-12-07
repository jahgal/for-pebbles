import { ApiResponse } from "@models/api";
import { User } from "@models/user";

interface SignInSuccessData {
  token: string;
  user: User;
}

type SignInErrorData = null;

type EmailVerify = {
  isExistEmail: boolean;
};

export type SignInRes = ApiResponse<SignInSuccessData | SignInErrorData>;

export type SignUpRes = ApiResponse<User | null>;

export type EmailVerifyRes = ApiResponse<EmailVerify>;
