import { IResponse } from '../types';
import { ILoginData, ISignupData } from '../types/auth.types';
import { HttpService } from './http.service';
import { HttpServiceFactory } from './index';

export class AuthService {
  constructor(private httpService: HttpService) {}
  public login(data: ILoginData) {
    return this.httpService.post<IResponse, ILoginData>('example/post', {
      ...data,
    });
  }
  public register(data: ISignupData) {
    return this.httpService.post<IResponse, ISignupData>('example/post', {
      ...data,
    });
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
