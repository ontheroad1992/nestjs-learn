export interface Login {
    username: string;
    password: string;
    verifyType?: number;
    verifyCode?: string;
}

export interface TokenResult {
    readonly uuid: number;
    readonly username: string;
    readonly access_token: string;
    readonly refresh_token?: string;
}
