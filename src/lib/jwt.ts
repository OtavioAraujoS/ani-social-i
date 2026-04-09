export interface JwtPayload {
  sub: string;
  role: string;
  userName: string;
  userId: string;
  createdAt: string;
  exp: number;
  iat: number;
  avatar: string;
}

export function decodeJwt(token: string): JwtPayload {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Token JWT inválido.");
  }

  const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
  const json = atob(base64);
  return JSON.parse(json) as JwtPayload;
}

export function isTokenExpired(payload: JwtPayload): boolean {
  return Date.now() >= payload.exp * 1000;
}
