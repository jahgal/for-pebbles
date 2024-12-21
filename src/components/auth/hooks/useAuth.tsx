import { create } from "zustand";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}));

export default function useAuth() {
  const { accessToken, setAccessToken, clearAccessToken } = useAuthStore();

  // 토큰 설정
  const setToken = (token: string) => {
    setAccessToken(token);
  };

  // 토큰 초기화
  const removeToken = () => {
    clearAccessToken();
  };

  return {
    accessToken,
    setToken,
    removeToken,
  };
}
