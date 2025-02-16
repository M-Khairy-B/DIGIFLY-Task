export interface IAuthUserModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
}

export interface ILoginModel {
    email: string;
    password: string;
}

export class LoginModel implements ILoginModel {
    email = '';
    password = '';
}
export interface IUserModel {
    id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
}


