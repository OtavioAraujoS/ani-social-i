export interface LoginResponse {
  message: string;
  token: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  code: number;
}
