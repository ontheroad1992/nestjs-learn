export interface User {
    user_id: number;
    username: string;
    password: string;
}

export interface UserValidateResult {
    readonly user_id: number;
    readonly username: string;
}
