// import { IResponse } from '../types';
import {
  IActivationResponse,
  ILoginData,
  ILoginResponse,
  ISignupData,
  ISignupResponse,
} from '../types/auth.types';
import { HttpService } from './http.service';
import { HttpServiceFactory } from './index';

export class AuthService {
  constructor(private httpService: HttpService) {}
  public login(data: ILoginData): Promise<ILoginResponse | undefined | void> {
    return this.httpService.post('api/auth/login/', {
      ...data,
    });
  }
  public register(
    data: ISignupData,
  ): Promise<ISignupResponse | undefined | void> {
    return this.httpService.post('api/users/', {
      ...data,
    });
  }
  public activation(
    query: string,
  ): Promise<IActivationResponse | undefined | void> {
    return this.httpService.get(`api/users/activate${query}`);
  }
}

const factory = new HttpServiceFactory();
export const authService = new AuthService(factory.createHttpService());

//how to use in your component with react-query

// const addExampleMutation = useMutation(
//   ({email, password}: {email: string; password: string}) =>
//     exampleService.examplePost(email, password),
//   {
//     onSuccess: () => {
//       queryClient.invalidateQueries('get_data');
//     },
//   },
// );

//code services in a component folder
