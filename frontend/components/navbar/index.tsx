import { useRouter } from 'next/router';
import React from 'react';
import { useMutation } from 'react-query';
import { queryKeys } from '../../constants/query-keys.constants';
import { authService } from '../../services/auth.service';
import * as Styled from '../../styles/home.styled';
import { INavBarProps } from '../../types/home.types';
import { ILogoutData } from '../../types/users.types';

const NavBar = ({ scrolled, name, refetch }: INavBarProps) => {
  const router = useRouter();
  const { mutateAsync } = useMutation(
    queryKeys.logoutUsers,
    (data: ILogoutData) => {
      return authService.logoutUser(data);
    },
  );
  const handleLogOut = () => {
    const refresh = localStorage.getItem('REFRESH_TOKEN');
    const access = localStorage.getItem('ACCESS_TOKEN');
    if (refresh && access) {
      mutateAsync({ refresh, auth: { Authorization: `Bearer ${access}` } });
      refetch();
      router.push('/login');
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('REFRESH_TOKEN');
    }
  };
  return (
    <Styled.NavBar className={scrolled ? 'affix' : undefined}>
      <Styled.Logo>
        <Styled.LogoLink href="/">User Management</Styled.LogoLink>
      </Styled.Logo>
      <Styled.MailList>
        <Styled.List>
          {name && (
            <>
              <Styled.ListItem>
                <Styled.ListItemLink>Logged in as {name}</Styled.ListItemLink>
              </Styled.ListItem>
              <Styled.ListItem>
                <Styled.ListItemLink onClick={handleLogOut} className="cursor">
                  Log out
                </Styled.ListItemLink>
              </Styled.ListItem>
            </>
          )}
        </Styled.List>
      </Styled.MailList>
    </Styled.NavBar>
  );
};

export default NavBar;
