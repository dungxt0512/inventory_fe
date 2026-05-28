export interface User {
  id: number;
  name: string;
  role: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userName: User;
  role: string;
}