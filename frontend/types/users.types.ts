export interface IUserHeader {
  Authorization: string;
}

export interface IUserDelete {
  id: number;
  auth: IUserHeader;
}
