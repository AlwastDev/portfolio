import { useQuery } from 'react-query';

type useGetProjectsType<T> = {
  request: () => Promise<T>;
  keys: string | string[];
};

export const useAppQuery = <T>({ request, keys }: useGetProjectsType<T>) => {
  return useQuery({
    queryFn: request,
    queryKey: keys,
    staleTime: 1000 * 15,
  });
};
