export interface IUserData {
  id: number;
  email: string;
  first_name: string | null;
  is_active: boolean;
  is_staff: boolean;
  job: string | null;
  last_name: string | null;
  username: string;
}

export interface IUsersResponse {
  data: IUserData[] | undefined;
  isLoading: boolean;
  refetch: () => void;
}

export interface INavBarProps {
  scrolled: boolean;
  name?: string;
  refetch: () => void;
}
