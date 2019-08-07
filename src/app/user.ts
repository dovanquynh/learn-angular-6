export class User {
    id: number;
    username: string;
    password: string;
    repeatPassword: string;
    first_name: string;
    last_name: string;
    display_name: string;
    email: string;
    email_alt: string;
    is_chairman: number;
    is_admin: number;
    status: number;
    languages: string;
}

export const languages = ['en', 'ja'];
export const is_chairman = [0, 1];
export const is_admin = [0, 1];
export const status = [0, 1];