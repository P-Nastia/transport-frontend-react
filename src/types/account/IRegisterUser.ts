export interface IRegisterUser {
    name: string;
    lastName: string;
    password: string;
    phone: string;
    email: string;
    imageFile?: File | null;
}