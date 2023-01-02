export interface AccountResponse {
  idToken: string;
  scopes: string[];
  serverAuthCode: null;
  user: User;
}

export interface User {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
}
