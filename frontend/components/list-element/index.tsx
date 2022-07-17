import React, { useEffect, useState } from 'react';
import { getClearData } from '../../utils/getFirstData';
import * as Styled from '../../styles/home.styled';
import { IUserData } from '../../types/home.types';
import { getSecondData } from '../../utils/getSecondData';
import { useMutation } from 'react-query';
import { queryKeys } from '../../constants/query-keys.constants';
import { usersService } from '../../services/users.service';
import { IUserDelete } from '../../types/users.types';

interface IList {
  data: IUserData;
  refetch: () => void;
}

const ListElement = ({ data, refetch }: IList) => {
  const [access, setAccess] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setAccess(localStorage.getItem('ACCESS_TOKEN') || '');
  }, []);

  const { mutate } = useMutation(
    queryKeys.deleteUser,
    (userData: IUserDelete) => usersService.deleteUser(userData),
    {
      onSuccess: (data) => {
        refetch();
        console.log(data);
      },
    },
  );
  const checkmark = (
    <svg
      width="36"
      height="36"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const closemark = (
    <svg
      width="36"
      height="36"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const handleDeleteClick = () => {
    if (typeof window === 'object') {
      const userData = {
        id: data.id,
        auth: { Authorization: `Bearer ${access}` },
      };
      mutate(userData);
    }
  };

  const handleArrowClick = () => {
    setIsOpen((old) => !old);
  };

  const dataEntries = Object.entries(getSecondData(data));

  return (
    <>
      <Styled.TableBodyRow>
        {Object.entries(getClearData(data)).map((el) => {
          console.log(el);

          return (
            <Styled.TableBodyData key={el[0]}>
              {typeof el[1] === 'boolean' ? (
                <Styled.Icon className={el[1] ? 'checkmark' : 'closemark'}>
                  {el[1] ? checkmark : closemark}
                </Styled.Icon>
              ) : (
                el[1]
              )}
            </Styled.TableBodyData>
          );
        })}
        {!data.is_staff && (
          <Styled.TableBodyData className="delete">
            <Styled.DeleteBtnContainer onClick={handleDeleteClick}>
              Delete
            </Styled.DeleteBtnContainer>
          </Styled.TableBodyData>
        )}
        <Styled.TableBodyData className="arrow">
          <Styled.ArrowContainer
            onClick={handleArrowClick}
            className={isOpen ? 'open' : undefined}
          >
            {arrow}
          </Styled.ArrowContainer>
        </Styled.TableBodyData>
      </Styled.TableBodyRow>
      {isOpen && (
        <>
          <Styled.TableBodyRow className="collapsed">
            {dataEntries.map((el, idx) => (
              <Styled.TableBodyData className="collapsed" key={idx}>
                {el[0]
                  .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
                  .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())}
              </Styled.TableBodyData>
            ))}
          </Styled.TableBodyRow>
          <Styled.TableBodyRow className="collapsed">
            {dataEntries.map((el, idx) => (
              <Styled.TableBodyData key={idx} className="collapsed">
                {typeof el[1] === 'boolean' ? (
                  <Styled.Icon className={el[1] ? 'checkmark' : 'closemark'}>
                    {el[1] ? checkmark : closemark}
                  </Styled.Icon>
                ) : el[1] === null ? (
                  '-'
                ) : (
                  el[1]
                )}
              </Styled.TableBodyData>
            ))}
          </Styled.TableBodyRow>
        </>
      )}
    </>
  );
};

export default ListElement;
