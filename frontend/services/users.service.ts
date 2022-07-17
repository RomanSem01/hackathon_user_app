import { IUserDelete, IUserHeader } from '../types/users.types';
import { HttpService } from './http.service';
import { HttpServiceFactory } from './index';

export class UsersService {
  constructor(private httpService: HttpService) {}
  public getUsers(auth: IUserHeader) {
    return this.httpService.get('api/users/', { headers: { ...auth } });
  }
  public deleteUser(userData: IUserDelete) {
    return this.httpService.delete(`api/users/${userData.id}`, {
      headers: { ...userData.auth },
    });
  }
}

const factory = new HttpServiceFactory();
export const usersService = new UsersService(factory.createHttpService());
