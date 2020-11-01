/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr';

import api from '@repo/axios';

export function useFetchSWR<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async apiUrl => {
    const response = await api.get(apiUrl);

    return response.data;
  });

  return { data, error, mutate };
}
