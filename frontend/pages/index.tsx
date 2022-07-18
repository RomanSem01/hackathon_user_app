import type { NextPage } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { queryKeys } from '../constants/query-keys.constants';
import { usersService } from '../services/users.service';

import * as Styled from '../styles/home.styled';
import { headerData, userData } from '../constants/home.constants';
import ListElement from '../components/list-element';
import { IUserData, IUsersResponse } from '../types/home.types';
import Image from 'next/image';
import NavBar from '../components/navbar';

const Home: NextPage = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [access, setAccess] = useState('');
  const [username, setUsername] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState<boolean>(false);
  const scrollHandler = useCallback(() => {
    if (ref.current) {
      setScroll(ref.current.getBoundingClientRect().y < -50);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => window.removeEventListener('scroll', scrollHandler, true);
  }, [scrollHandler]);

  useEffect(() => {
    setAccess(localStorage.getItem('ACCESS_TOKEN') || '');
    if (access.length > 0) {
      setUsername(localStorage.getItem('USERNAME') || '');
    } else {
      setUsername('');
    }
  }, [access.length]);

  const { data, refetch }: IUsersResponse = useQuery(
    queryKeys.getUsers,
    () => {
      const headers = {
        Authorization: `Bearer ${access}`,
      };
      return usersService.getUsers(headers);
    },
    {
      enabled: access.length > 0,
      onSuccess: (data) => {
        if (data) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      },
    },
  );

  return access && isAuth ? (
    <Styled.HomeWrapper ref={ref}>
      <NavBar scrolled={scroll} name={username} refetch={refetch} />
      <Styled.Main>
        <Styled.ListContainer>
          <Styled.TableHead>
            <Styled.TableRow>
              {headerData.map((el, idx) => (
                <Styled.TableData
                  className={el.flex === 3 ? 'main' : 'secondary'}
                  key={idx}
                >
                  {el.name}
                </Styled.TableData>
              ))}
            </Styled.TableRow>
          </Styled.TableHead>
          <Styled.TableBody>
            {data?.map((el, key) => (
              <ListElement key={key} data={el} refetch={refetch} />
            ))}
          </Styled.TableBody>
        </Styled.ListContainer>
      </Styled.Main>
    </Styled.HomeWrapper>
  ) : (
    <Styled.HomeWrapper ref={ref}>
      <NavBar
        scrolled={scroll}
        name={access !== '' ? username : undefined}
        refetch={refetch}
      />
      <Styled.Main>
        <Styled.AuthMessage>
          Please <Link href="/login"> login </Link> or{' '}
          <Link href="/signup"> signup </Link>
        </Styled.AuthMessage>
      </Styled.Main>
    </Styled.HomeWrapper>
  );
};

export default Home;
