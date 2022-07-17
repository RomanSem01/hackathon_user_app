import { GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';
import { queryKeys } from '../../constants/query-keys.constants';
import { authService } from '../../services/auth.service';
import { IActivationData } from '../../types/auth.types';
import * as Styled from '../../styles/activation.styled';

export async function getServerSideProps(context: GetStaticPropsContext) {
  const user = context.params?.user;
  const token = context.params?.token;
  const queryClient = new QueryClient();

  const queryString = user && token ? `/?user=${user}&token=${token}` : '/';

  await queryClient.prefetchQuery(queryKeys.activationLink, () =>
    authService.activation(queryString),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Activation: NextPage = () => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const { user, token } = router.query;

  const queryString = user && token ? `/?user=${user}&token=${token}` : '/';
  const { data }: IActivationData = useQuery(
    queryKeys.activationLink,
    () => authService.activation(queryString),
    {
      refetchOnWindowFocus: false,
    },
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
