export interface UserModel {
  uid?: string;
  email?: string;
  username?: string;
  password?: string;
  status?: string;
  display?: string;
}

export function emptyUserModel(): UserModel {
  return {
    uid: '',
    email: '',
    username: '',
    password: '',
    status: '',
    display: ''
  };
}
