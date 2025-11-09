export interface registerDto {
  email: string;
  username: string;
  password?: string; 
}


export interface loginDto {
    email: string;
    password?: string; 
}

export type AuthResponse = {
  access_token: string;
  user: {
    user_id: string | number;
    email: string;
    username: string;
    role: string;
  };
  message: string;
};

export type User = {
  user_id: string | number;
  email: string;
  username: string;
  role?: string;
};