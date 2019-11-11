export interface Login {
    username: string;
    password: string;
    verifyType?: number;
    verifyCode?: string;
}

export interface TokenResult {
    readonly user_id: number;
    readonly username: string;
    readonly access_token: string;
    readonly refresh_token?: string;
}
