import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { queryKeys } from '../../constants/query-keys.constants';
import { authService } from '../../services/auth.service';
import { IActivationData } from '../../types/auth.types';
import * as Styled from '../../styles/activation.styled';

const Activation: NextPage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const router = useRouter();

  const { user, token } = router.query;
  const queryString = user && token ? `?user=${user}&token=${token}` : '';
  const { data }: IActivationData = useQuery(queryKeys.activationLink, () =>
    authService.activation(queryString),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Styled.ContainerWrapper>
        <Styled.MessageWrapper>{data?.message}</Styled.MessageWrapper>
      </Styled.ContainerWrapper>
    </QueryClientProvider>
  );
};

export default Activation;
