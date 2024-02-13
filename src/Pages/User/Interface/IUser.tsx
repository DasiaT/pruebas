
export interface IUser {
    id: number;
    name: string;
    username: string;
    password: string;
}

export interface IUserFilters {
    username?:string;
    password?: string;
}