import { HttpStatusCode } from "axios";

export interface ApiResponse<T> {
  status: HttpStatusCode;
  message: string;
  data: T;
}
