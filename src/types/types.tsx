export interface IErrors {
  email?: string;
  password?: string;
  passwordRepeat?: string;
}

export interface IFormData {
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface ISignInErrors {
  email?: string;
  password?: string;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface IFormMain {
  API: string;
}
